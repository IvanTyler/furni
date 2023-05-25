import styleClients from '../../assets/styles/tabsYourFurniActivity.module.scss'
import styleClientsItem from '../../assets/styles/tabsYourFurniActivityItem.module.scss'
import cx from 'classnames'

import { List } from '../List/List'
import { ContactsItem } from '../ContactsItem/ContactsItem'

import { IGetDataContacts } from '../../Interfaces/contacts'
import { useState } from 'react'
import { DefaultPage } from '../DefaultPage/DefaultPage'
import { OpenFilterContacts } from '../OpenFilterContacts/OpenFilterContacts'
import { FilterContacts } from '../FilterContacts/FilterContacts'

interface IContactsProps {
    statsContacts: any;
    img: string;
}

export const Contacts: React.FC<IContactsProps> = ({ statsContacts, img }) => {

    const [contacts, setContacts] = useState<IGetDataContacts[]>(statsContacts)

    const [isFilterContactsActive, setIsFilterContactsActive] = useState(false)

    const total = contacts.reduce((acc: any, el) => {
        let total = Object.values(el.detail)
            .reduce((acc: number, el: number) => acc + el, 0)
        return acc + total
    }, 0)


    const itemEditHandler = (id: number) => {
        setContacts((prev: any) => {
            return prev.map((el: any) => {
                if (el.id === id) {
                    return {
                        ...el,
                        active: !el.active,
                    }
                }
                return el
            })
        })
    }

    const setAllContacts = () => setContacts(prev => prev = statsContacts)
    const filterClients = () => setContacts((prev: any) => prev = statsContacts.filter((el: IGetDataContacts) => el.detail.direct_sales !== 0))
    const filterPartners = () => setContacts((prev: any) => prev = statsContacts.filter((el: IGetDataContacts) => el.detail.via_partners !== 0))
    const filterSubPartners = () => setContacts((prev: any) => prev = statsContacts.filter((el: IGetDataContacts) => el.detail.via_subpartners !== 0))

    if (contacts.length) {
        return (
            <>
                <div className={styleClients.tabsYourFurniActivityList__wrapper}>
                    {isFilterContactsActive && <FilterContacts
                        setAllContacts={setAllContacts}
                        filterClients={filterClients}
                        filterPartners={filterPartners}
                        filterSubPartners={filterSubPartners}
                        setIsFilterContactsActive={setIsFilterContactsActive}
                    />}
                    <div className={styleClients.tabsYourFurniActivityList__content}>
                        <ul className={styleClients.tabsYourFurniActivityList}>
                            <li className={styleClientsItem.tabsYourFurniActivityItem}>
                                <div className={cx(styleClientsItem.tabsYourFurniActivityItem__title, styleClientsItem.name)}>
                                    <OpenFilterContacts
                                        active={isFilterContactsActive}
                                        setIsFilterContactsActive={setIsFilterContactsActive}
                                    />
                                    Contact
                                </div>
                                <div className={styleClientsItem.tabsYourFurniActivityItem__title}>
                                    Your earnings, AED
                                </div>
                            </li>

                            <List
                                items={contacts}
                                renderItem={(item: IGetDataContacts, index: number) => <ContactsItem
                                    itemEditHandler={itemEditHandler}
                                    item={item}
                                    key={index.toString()}
                                />}
                            />

                            <li className={styleClientsItem.tabsYourFurniActivityItem}>
                                <div className={styleClientsItem.tabsYourFurniActivityItem__title}>
                                    Total
                                </div>
                                <div className={styleClientsItem.tabsYourFurniActivityItem__title}>
                                    {total}
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </>
        )
    }

    return (
        <>
            <DefaultPage img={img} />
        </>
    )

}