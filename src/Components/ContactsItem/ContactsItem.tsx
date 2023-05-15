import { log } from 'console';
import style from '../../assets/styles/tabsYourFurniActivityItem.module.scss'
import { IMyDataContacts } from '../../Interfaces/contacts';
import { IStatsClients } from '../../Interfaces/DataApi'
import cx from 'classnames'
import { IMyDataEvents } from '../../Interfaces/Events';

interface IClientsProps {
    item: any;
    itemEditHandler: (item: any) => void
}

export const ContactsItem: React.FC<IClientsProps> = ({ item, itemEditHandler }) => {

    // const total = Object.values(item.detail)
    //     .reduce((acc: number, el: number) => acc + el, 0)

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
                <div className={style.tabsYourFurniActivityItem__item}>
                </div>
                <div className={style.tabsYourFurniActivityItem__item}>
                    {item.event}
                </div>
            </li>
            {
                item.active ?
                    <ul>
                        <li className={cx(style.tabsYourFurniActivityItem, style.detalContent)}>
                            <div className={style.tabsYourFurniActivityItem__name}>
                                Direct sales
                            </div>
                            <div className={style.tabsYourFurniActivityItem__item}>
                                {item.detail.direct_sales}
                            </div>
                        </li>
                        <li className={cx(style.tabsYourFurniActivityItem, style.detalContent)}>
                            <div className={style.tabsYourFurniActivityItem__name}>
                                Via partners
                            </div>
                            <div className={style.tabsYourFurniActivityItem__item}>
                                {item.detail.via_partners}
                            </div>
                        </li>
                        <li className={cx(style.tabsYourFurniActivityItem, style.detalContent)}>
                            <div className={style.tabsYourFurniActivityItem__name}>
                                Via subpartners
                            </div>
                            <div className={style.tabsYourFurniActivityItem__item}>
                                {item.detail.via_subpartners}
                            </div>
                        </li>
                        <li className={cx(style.tabsYourFurniActivityItem, style.detalContent)}>
                            <div className={style.tabsYourFurniActivityItem__name}>
                                Total earnings
                            </div>
                            <div className={style.tabsYourFurniActivityItem__item}>
                            </div>
                        </li>
                    </ul> : null
            }
        </>
    )
}