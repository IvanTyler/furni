import styleClients from '../../assets/styles/tabsYourFurniActivity.module.scss'
import styleClientsItem from '../../assets/styles/tabsYourFurniActivityItem.module.scss'
import cx from 'classnames'

import { List } from '../List/List'

import { EventsItem } from '../EventsItem/EventsItem'
import { DefaultPage } from '../DefaultPage/DefaultPage'
import { useEffect } from 'react'
import { IGetDataEvents } from '../../Interfaces/Events'
import { useAppDispath, useTypeSelector } from '../../Hooks/useTypeSelector'
import { dataActionEvents } from '../../Redux/Actions/dataAction'
import { Preloader } from '../Preloader/Preloader'

interface IPartnersProps {
    statsEvents?: any;
    img: string;
}

export const Events: React.FC<IPartnersProps> = ({ statsEvents, img }) => {

    const { events } = useTypeSelector(state => state.data)

    const dispath = useAppDispath()

    useEffect(() => {
        dispath(dataActionEvents())
    }, [])


    if (!events.length)
        return (
            <Preloader />
        )

    else if (events.length) {
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