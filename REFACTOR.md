# Рефакторинг Redux-слоя — TypeScript strictness

> Дата: 2026-07-03
> Область: `src/Redux/**`, компоненты, использующие Redux-стейт и локальные `useState`
> Контекст: проект 2023 года, написан на более раннем этапе развития навыков. Ревью и рефакторинг сделаны постфактум, чтобы довести код до текущего уровня качества.

## Цель

Убрать все использования `any` (21 файл) и проверить, какие реальные баги эти `any` скрывали. Проверка через `tsc --noEmit` после каждого шага — рефакторинг считается завершённым только при чистой компиляции в `strict` режиме.

---

## Найденные баги, которые маскировал `any`

### 1. Неверный импорт редьюсера в сторе

**Файл:** `src/Redux/Store/Store.ts`

```ts
// ❌ было — copy-paste ошибка, dataOverview подключён к чужому редьюсеру
import getDataOverview from '../Reducers/getDataEventsReducer'

// ✅ стало
import getDataOverview from '../Reducers/getDataOverviewReducer'
```

Слайс `dataOverview` в сторе был на самом деле дублем `dataEvents` — файл `getDataOverviewReducer.ts` существовал в проекте, но никогда не импортировался.

Заодно удалён неиспользуемый `rootReducer` (объявлен через `combineReducers`, но реальный стор собирался из отдельного объекта чуть ниже — мёртвый код).

---

### 2. Потерянный payload в экшене ошибки lead_id

**Файлы:** `dataActionOverview.ts`, `dataActionOverviewTab.ts`, `dataActionOverviewRefredh.ts`

```ts
// ❌ было — getDataLoadingErrorLeadId не принимает payload вообще,
// lead_id молча отбрасывался при каждом вызове
dispath(getDataLoadingErrorLeadId(response.data.lead_id))

// ✅ стало
dispath(getDataLoadingErrorLeadId())
```

Пока `$api.get<any>(...)` ничего не знал о форме ответа, TypeScript пропускал вызов action creator'а с лишним аргументом (`any` совместим с `void`-параметром). Как только эндпоинт получил тип `IOverviewResponse`, компилятор сразу показал: «Argument of type 'number' is not assignable to parameter of type 'void'» — то есть эта ветка кода никогда не работала так, как задумывалось.

---

### 3. `localStorage.setItem` с числом вместо строки

**Файлы:** те же три Overview-экшена

```ts
// ❌ localStorage.setItem всегда ожидает string
localStorage.setItem('lead_id', response.data.lead_id)
localStorage.setItem('youHaveEarned', response.data.earning_total)

// ✅
localStorage.setItem('lead_id', String(response.data.lead_id))
localStorage.setItem('youHaveEarned', String(response.data.earning_total))
```

Раньше это работало только потому, что `response.data` был `any`. В рантайме `setItem` неявно приводил число к строке сам, так что видимого бага не было — но типобезопасность отсутствовала полностью.

---

### 4. Рассинхронизация типа состояния с реальными данными API

**Файл:** `src/Redux/initialState.ts`, `src/Redux/Reducers/getDataContactsReducer.ts`

`state.contacts` был типизирован как `IGetDataContacts[]` (с полем `titleTotal`), хотя это поле — производное, добавляется только в `contactsSelector`. Реальные данные из API (`IgetDataContactsDto[]`) этого поля не содержат.

```ts
// ❌ store хранит DTO без titleTotal, но типизирован так, будто titleTotal уже есть
contacts: IGetDataContacts[]

// ✅ store хранит именно то, что приходит с бэкенда
contacts: IgetDataContactsDto[]
```

`contactsSelector` теперь явно указывает возвращаемый тип `IGetDataContacts[]` — то есть граница между «сырыми данными» и «данными для UI» стала явной, а не подразумеваемой.

---

### 5. Утечка обработчиков `click` на `document`

**Файлы:** `Header.tsx`, `TimeUnits.tsx`, `OpenFilterContacts.tsx`

```ts
// ❌ новый listener добавляется на каждый ре-рендер компонента, старые не снимаются
documentBody.addEventListener('click', (e) => setIsSocialMedia((prev: any) => prev = false))

// ✅ один listener на весь жизненный цикл компонента, с очисткой
useEffect(() => {
    const closeSocialMedia = () => setIsSocialMedia(false)
    document.addEventListener('click', closeSocialMedia)
    return () => document.removeEventListener('click', closeSocialMedia)
}, [])
```

Это не было замечено при первой оценке `any` — но раз уж эти строки трогались ради типов, заодно поправлена и утечка обработчиков, которая есть в трёх местах кодовой базы.

---

## Типизация (без функциональных изменений в поведении)

| Файл | Было | Стало |
|---|---|---|
| `getDataContactsReducer.ts` | `PayloadAction<any>` | `PayloadAction<IgetDataContactsDto[]>` |
| `getDataEventsReducer.ts` | `PayloadAction<any>` | `PayloadAction<IGetDataEvents[]>` |
| `registrationReducer.ts` | `PayloadAction<any>` | `PayloadAction<string>` |
| `Interfaces/FilterContacts.ts` | `filter: any` | `filter: FilterByType \| null` (новый union-тип `'direct_sales' \| 'via_partners' \| 'via_subpartners'`) |
| `dataActionRegistration.ts` | `$api.post<any>`, `error: any` | `$api.post<unknown>`, `error: AxiosError<IRegistrationErrorResponse>` |
| `http.ts` | `axios.post<any>` (refresh) | `axios.post<IGetDataTokens>` — переиспользован уже существующий тип из `dataAction.ts` |
| `dataActionOverview*.ts` (3 файла) | `$api.get<any>` | `$api.get<IOverviewResponse>` (новый файл `Interfaces/Overview.ts`) |
| `ProtectedRoute.tsx` | `children: any` | `children: ReactNode` |
| `SocialMedia.tsx` | `code?: any`, `useDispatch<any>()` | `code?: string \| number`, типизированный `useAppDispath()` |
| `Input.tsx` | `as?: any` | удалено (неиспользуемый проп) |
| `FormUserLogin.tsx` | `useState<any>()` | удалено (неиспользуемая переменная `value`/`setValue`) |
| `Events.tsx` | `statsEvents?: any` | удалено (неиспользуемый проп) |
| `TabsList.tsx` | `setTabElement(item: any)`, `useDispatch<any>()` | `setTabElement(item: string)`; удалён неиспользуемый `dispath` |
| `TimeUnitsFilter.tsx`, `FilterContacts.tsx` | `(prev: any) => ...`, `(el: any) => ...` | типы выводятся автоматически из `useState<T[]>` |

---

## Результат

- `npx tsc --noEmit` — 0 ошибок в `strict` режиме.
- 21 файл с `any` → 0.
- 2 реальных бага в проде (потерянный payload, неверный редьюсер в сторе) исправлены.
- 3 утечки обработчиков событий устранены.
- Функциональность не менялась — все изменения либо исправляют скрытые баги, либо чисто типизационные.

## Известное ограничение

API этого проекта сейчас не отвечает (бэкенд не поднят / недоступен), поэтому визуально проверить рантайм-поведение (особенно Overview-флоу) не удалось — изменения проверены только статической типизацией и логическим разбором кода. Для портфолио стоит держать это в уме и говорить об этом прямо, если спросят про тестирование изменений.
