import styleClients from '../../assets/styles/tabsYourFurniActivity.module.scss'
import styleClientsItem from '../../assets/styles/tabsYourFurniActivityItem.module.scss'
import cx from 'classnames'

import { List } from '../List/List'

import { EventsItem } from '../EventsItem/EventsItem'
import { DefaultPage } from '../DefaultPage/DefaultPage'
import { useState } from 'react'
import { IGetDataEvents } from '../../Interfaces/Events'

interface IPartnersProps {
    statsEvents?: any;
    img: string;
}

export const Events: React.FC<IPartnersProps> = ({ statsEvents, img }) => {

    const [events, setEvents] = useState<IGetDataEvents[]>(statsEvents)

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
                                renderItem={(item: IGetDataEvents, index: number) => <EventsItem
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