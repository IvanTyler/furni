import { useState } from 'react';
import style from '../../assets/styles/tabsYourFurniActivityItem.module.scss'
import { IGetDataEvents } from '../../Interfaces/Events'
import cx from 'classnames'

interface IEventsProps {
    item: IGetDataEvents;
}

export const EventsItem: React.FC<IEventsProps> = ({ item }) => {

    const [openDetailList, setOpenDetailList] = useState(false)
    const date = new Date(item.created_at);
    return (
        <>
            <li className={openDetailList ?
                cx(style.tabsYourFurniActivityItem, style.active, style.events) :
                cx(style.tabsYourFurniActivityItem, style.events)}>
                <div className={style.tabsYourFurniActivityItem__name}>
                    <div
                        onClick={() => setOpenDetailList(prev => prev = !prev)}
                        className={
                            openDetailList ?
                                cx(style.tabsYourFurniActivityItem__showDetailsContact, style.active) :
                                style.tabsYourFurniActivityItem__showDetailsContact}
                    >
                    </div>
                    {item.name}
                </div>
                <div className={cx(style.tabsYourFurniActivityItem__item, style[item.event_type])}>
                    {item.event_text}
                </div>
            </li>
            {
                openDetailList ?
                    <ul>
                        <li className={cx(style.tabsYourFurniActivityItem, style.detalContent)}>
                            <div className={style.tabsYourFurniActivityItem__name}>
                                Sale type
                            </div>
                            <div className={style.tabsYourFurniActivityItem__item}>
                                {item.detail.sale_type}
                            </div>
                        </li>
                        <li className={cx(style.tabsYourFurniActivityItem, style.detalContent)}>
                            <div className={style.tabsYourFurniActivityItem__name}>
                                Deal amount
                            </div>
                            <div className={style.tabsYourFurniActivityItem__item}>
                                {item.detail.deal_amount}
                            </div>
                        </li>
                        <li className={cx(style.tabsYourFurniActivityItem, style.detalContent)}>
                            <div className={style.tabsYourFurniActivityItem__name}>
                                Your commission
                            </div>
                            <div className={style.tabsYourFurniActivityItem__item}>
                                {item.detail.your_commission}
                            </div>
                        </li>
                        <li className={cx(style.tabsYourFurniActivityItem, style.detalContent)}>
                            <div className={style.tabsYourFurniActivityItem__name}>
                                Reference code
                            </div>
                            <div className={style.tabsYourFurniActivityItem__item}>
                                {item.detail.reference_code}
                            </div>
                        </li>
                        <li className={cx(style.tabsYourFurniActivityItem, style.detalContent)}>
                            <div className={style.tabsYourFurniActivityItem__name}>
                                Created at
                            </div>
                            <div className={style.tabsYourFurniActivityItem__item}>
                                {date.getFullYear()}
                                /{date.getMonth() + 1}
                                /{date.getDate()}&nbsp;
                                {date.getHours()}:
                                {date.getMinutes()}
                            </div>
                        </li>
                    </ul> : null
            }
        </>
    )
}