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
    const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Now', 'Dec']
    
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
                    {
                        item.event_type === "new_partner" && item.detail.sale_type === "self"
                            ? 'welcome' :
                            item.event_text
                    }
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
                                {monthNames[date.getMonth()]}&nbsp;
                                {
                                    date.getDate() >= 10 ?
                                        date.getDate() :
                                        `0${date.getDate()}`
                                },&nbsp;
                                {date.getFullYear()},&nbsp;
                                {date.getHours() + 1 >= 10 ?
                                    date.getHours() + 1 :
                                    `0${date.getHours() + 1}`
                                }:
                                {date.getMinutes() >= 10 ?
                                    date.getMinutes() :
                                    `0${date.getMinutes()}`}
                            </div>
                        </li>
                    </ul> : null
            }
        </>
    )
}