import style from '../../assets/styles/tabsYourFurniActivityItem.module.scss'
import { IStatsPartners } from '../../Interfaces/DataApi'
import { IMyDataEvents } from '../../Interfaces/Events'
import cx from 'classnames'

interface IEventsProps {
    item: IMyDataEvents;
    itemEditHandler: (item: any) => void
}

export const EventsItem: React.FC<IEventsProps> = ({ item, itemEditHandler }) => {


    function eventTypeColor(event_type: string) {
        switch (event_type) {
            case 'referral':
                return `${style.tabsYourFurniActivityItem__item, style.referral}`
            case 'closed_won':
                return `${style.tabsYourFurniActivityItem__item, style.closed_won}`
            case 'closed_lost':
                return `${style.tabsYourFurniActivityItem__item, style.closed_lost}`
            case 'waitkeys':
                return `${style.tabsYourFurniActivityItem__item, style.waitkeys}`
            case 'willmeet':
                return `${style.tabsYourFurniActivityItem__item, style.willmeet}`
            case 'sentofferr':
                return `${style.tabsYourFurniActivityItem__item, style.sentofferr}`
            case 'waitprepay':
                return `${style.tabsYourFurniActivityItem__item, style.waitprepay}`
            case 'recelc':
                return `${style.tabsYourFurniActivityItem__item, style.recelc}`
            default:
                return `${style.tabsYourFurniActivityItem__item}`
        }
    }

    return (
        <>
            <li className={item.active ?
                cx(style.tabsYourFurniActivityItem, style.active) :
                style.tabsYourFurniActivityItem}>
                <div className={style.tabsYourFurniActivityItem__name}>
                    <div
                        onClick={() => itemEditHandler(item.id)}
                        className={
                            item.active ?
                                cx(style.tabsYourFurniActivityItem__showDetailsContact, style.active) :
                                style.tabsYourFurniActivityItem__showDetailsContact}
                    >
                    </div>
                    {item.name}
                </div>
                <div className={
                    cx(eventTypeColor(item.event_type))
                }>
                    {item.event}
                </div>
            </li>
            {
                item.active ?
                    <ul>
                        <li className={cx(style.tabsYourFurniActivityItem, style.detalContent)}>
                            <div className={style.tabsYourFurniActivityItem__name}>
                                Sale type
                            </div>
                            <div className={style.tabsYourFurniActivityItem__item}>
                                {item.detail.Sale_type}
                            </div>
                        </li>
                        <li className={cx(style.tabsYourFurniActivityItem, style.detalContent)}>
                            <div className={style.tabsYourFurniActivityItem__name}>
                                Deal amount
                            </div>
                            <div className={style.tabsYourFurniActivityItem__item}>
                                {item.detail.Deal_amount}
                            </div>
                        </li>
                        <li className={cx(style.tabsYourFurniActivityItem, style.detalContent)}>
                            <div className={style.tabsYourFurniActivityItem__name}>
                                Your commission
                            </div>
                            <div className={style.tabsYourFurniActivityItem__item}>
                                {item.detail.Your_commission}
                            </div>
                        </li>
                        <li className={cx(style.tabsYourFurniActivityItem, style.detalContent)}>
                            <div className={style.tabsYourFurniActivityItem__name}>
                                Reference code
                            </div>
                            <div className={style.tabsYourFurniActivityItem__item}>
                                {item.detail.Reference_code}
                            </div>
                        </li>
                    </ul> : null
            }
        </>
    )
}