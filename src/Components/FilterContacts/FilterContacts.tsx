import style from '../../assets/styles/filterList.module.scss'
import { useState } from 'react'
import { IFilterContacts, FilterByType } from '../../Interfaces/FilterContacts'
import { List } from '../List/List'
import { FilterContactsItem } from '../FilterContactsItem/FilterContactsItem'
import cx from 'classnames'
import { useAppDispath } from '../../Hooks/useTypeSelector'
import { setfilterBy } from '../../Redux/Reducers/getDataContactsReducer'

interface IFilterContactsProps {
    isFilterContactsActive: boolean
    setIsFilterContactsActive: (item: boolean) => void
    setTitleContacts: (item: string) => void
}

export const FilterContacts: React.FC<IFilterContactsProps> = (
    {
        isFilterContactsActive,
        setIsFilterContactsActive,
        setTitleContacts
    }
) => {

    const dispath = useAppDispath()

    const filterContactsItems: IFilterContacts[] = [
        {
            id: 1,
            name: 'All contacts',
            active: true,
            filter: null,
        },
        {
            id: 2,
            name: 'Clients',
            active: false,
            filter: 'direct_sales',
        },
        {
            id: 3,
            name: 'Partners',
            active: false,
            filter: 'via_partners',
        },
        {
            id: 4,
            name: 'Subpartners',
            active: false,
            filter: 'via_subpartners',
        },
    ]

    const [filterContactsItem, setFilterContactsItem] = useState<IFilterContacts[]>(filterContactsItems)

    const itemFilterContactsEditHandler = (id: number, filter: FilterByType | null, name: string) => {
        setIsFilterContactsActive(false)
        setTitleContacts(name)

        dispath(setfilterBy(filter))

        setFilterContactsItem((prev) => {
            return prev.map((el) => {
                if (el.id === id) {
                    return {
                        ...el,
                        active: true,
                    }
                } else if (el.id !== id) {
                    return {
                        ...el,
                        active: false,
                    }
                }
                return el
            })
        })
    }

    return (
        <ul className={
            isFilterContactsActive ?
                style.FilterList :
                cx(style.FilterList, style.hide)
        }>
            <List
                items={filterContactsItem}
                renderItem={(item: IFilterContacts, index: number) => <FilterContactsItem
                    itemFilterContactsEditHandler={itemFilterContactsEditHandler}
                    item={item}
                    key={index.toString()}
                />}
            />
        </ul>
    )
}