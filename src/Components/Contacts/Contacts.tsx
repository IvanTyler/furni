import styleClients from '../../assets/styles/tabsYourFurniActivity.module.scss'
import styleClientsItem from '../../assets/styles/tabsYourFurniActivityItem.module.scss'

import { IStatsClients } from '../../Interfaces/DataApi'
import { List } from '../List/List'
import { ContactsItem } from '../ContactsItem/ContactsItem'

import cx from 'classnames'
import { IMyDataContacts } from '../../Interfaces/contacts'
import { useState } from 'react'
import { DefaultPage } from '../DefaultPage/DefaultPage'

interface IContactsProps {
    statsClients: any;
    img: string;
}

export const Contacts: React.FC<IContactsProps> = ({ statsClients, img }) => {

    const [contacts, setContacts] = useState<IMyDataContacts[]>(statsClients)

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

    if (contacts.length) {
        return (
            <>
                <div className={styleClients.tabsYourFurniActivityList__wrapper}>
                    <div className={styleClients.tabsYourFurniActivityList__content}>
                        <ul className={styleClients.tabsYourFurniActivityList}>
                            <li className={styleClientsItem.tabsYourFurniActivityItem}>
                                <div className={cx(styleClientsItem.tabsYourFurniActivityItem__title, styleClientsItem.name)}>
                                    Name
                                </div>
                                <div className={styleClientsItem.tabsYourFurniActivityItem__title}>
                                    Your earnings, AED
                                </div>
                            </li>

                            <List
                                items={contacts}
                                renderItem={(item: IMyDataContacts, index: number) => <ContactsItem
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