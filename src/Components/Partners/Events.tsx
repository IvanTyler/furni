import styleClients from '../../assets/styles/tabsYourFurniActivity.module.scss'
import styleClientsItem from '../../assets/styles/tabsYourFurniActivityItem.module.scss'

import { IStatsPartners } from '../../Interfaces/DataApi'
import { List } from '../List/List'

import cx from 'classnames'
import { PartnersItem } from '../PartnersItem/PartnersItem'
import { IMyDataContacts } from '../../Interfaces/contacts'
import { DefaultPage } from '../DefaultPage/DefaultPage'
import { useState } from 'react'
import { ContactsItem } from '../ContactsItem/ContactsItem'
import { IMyDataEvents } from '../../Interfaces/Events'
import { events } from '../../MockData/MockData'
import { useGetData } from '../../Hooks/useGetData'

interface IPartnersProps {
    statsPartners: any;
    img: string;
}

export const Events: React.FC<IPartnersProps> = ({ statsPartners, img }) => {

    // const totalAmount = statsPartners.reduce((acc: any, current: any) => acc + current.amount, 0)
    // const totalEarnings = statsPartners.reduce((acc: any, current: any) => acc + current.earnings, 0)

    const [contacts, setContacts] = useState<IMyDataContacts[]>(statsPartners)

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
                                    Contact
                                </div>
                                <div className={styleClientsItem.tabsYourFurniActivityItem__title}>
                                    What’s new
                                </div>
                            </li>

                            <List
                                items={contacts}
                                renderItem={(item: IMyDataContacts | IMyDataEvents, index: number) => <ContactsItem
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