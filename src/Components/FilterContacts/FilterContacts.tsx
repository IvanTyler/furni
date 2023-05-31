import style from './FilterContacts.module.scss'
import { useState } from 'react'
import { IFilterContacts } from '../../Interfaces/FilterContacts'
import { List } from '../List/List'
import { FilterContactsItem } from '../FilterContactsItem/FilterContactsItem'
import cx from 'classnames'
import { useAppDispath, useTypeSelector } from '../../Hooks/useTypeSelector'
import { grandTotalSelector, setfilterBy, totalDirectSales, totalViaPartners, totalViaSubPartners } from '../../Redux/Reducers/SliceReducers'

interface IFilterContactsProps {
    isFilterContactsActive: boolean
    setIsFilterContactsActive: (item: boolean) => void
    // filterClients: () => void
    // setAllContacts: () => void
    // filterPartners: () => void
    // filterSubPartners: () => void
    setTitleContacts: (item: string) => void
}

export const FilterContacts: React.FC<IFilterContactsProps> = (
    {
        isFilterContactsActive,
        setIsFilterContactsActive,
        // setAllContacts,
        // filterClients,
        // filterPartners,
        // filterSubPartners,
        setTitleContacts,
    }
) => {

    const dispath = useAppDispath()

    const mainTotal = useTypeSelector(grandTotalSelector)
    const totalClients = useTypeSelector(totalDirectSales)
    const totalPartners = useTypeSelector(totalViaPartners)
    const totalSubPartners = useTypeSelector(totalViaSubPartners)


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


    const itemFilterContactsEditHandler = (id: number, filter: any) => {
        setIsFilterContactsActive(false)

        dispath(setfilterBy(filter))

        setFilterContactsItem((prev: any) => {
            return prev.map((el: any) => {
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
                style.FilterContactsList :
                cx(style.FilterContactsList, style.hide)
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