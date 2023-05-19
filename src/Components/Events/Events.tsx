import styleClients from '../../assets/styles/tabsYourFurniActivity.module.scss'
import styleClientsItem from '../../assets/styles/tabsYourFurniActivityItem.module.scss'

import { IStatsPartners } from '../../Interfaces/DataApi'
import { List } from '../List/List'

import cx from 'classnames'
import { EventsItem } from '../EventsItem/EventsItem'
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

    const [events, setEvents] = useState<IMyDataEvents[]>(statsPartners)

    const itemEditHandler = (id: number) => {
        setEvents((prev: any) => {
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

    if (events.length) {
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
                                items={events}
                                renderItem={(item: IMyDataEvents, index: number) => <EventsItem
                                    itemEditHandler={itemEditHandler}
                                    item={item}
                                    key={index.toString()}
                                />}
                            />
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