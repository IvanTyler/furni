import style from './FilterContacts.module.scss'
import { useState } from 'react'
import { IFilterContacts } from '../../Interfaces/FilterContacts'
import { List } from '../List/List'
import { FilterContactsItem } from '../FilterContactsItem/FilterContactsItem'

export const FilterContacts: React.FC = () => {

    const filterContactsItems: IFilterContacts[] = [
        {
            id: 1,
            name: 'All contacts',
            active: true,
        },
        {
            id: 2,
            name: 'Clients',
            active: false,
        },
        {
            id: 3,
            name: 'Partners',
            active: false,
        },
        {
            id: 4,
            name: 'Subpartners',
            active: false,
        },
    ]

    const [filterContactsItem, setFilterContactsItem] = useState<IFilterContacts[]>(filterContactsItems)


    const itemFilterContactsEditHandler = (id: number) => {
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
        <ul className={style.FilterContactsList}>
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