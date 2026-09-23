export type FilterByType = 'direct_sales' | 'via_partners' | 'via_subpartners';

export interface IFilterContacts {
    id: number,
    name: string,
    active: boolean,
    filter: FilterByType | null,
}