import style from '../../assets/styles/tabsYourFurniActivityItem.module.scss'
import { IGetDataContacts } from '../../Interfaces/contacts';
import cx from 'classnames'

interface IClientsProps {
    item: IGetDataContacts;
    totalActive: boolean;
    itemEditHandler: (item: any) => void
}

export const ContactsItem: React.FC<IClientsProps> = (
    { item, itemEditHandler, totalActive }
) => {

    const total = Object.values(item.detail)
        .reduce((acc: number, el: number) => acc + el, 0)

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
                    {totalActive ? total : item.titleTotal}
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
                                {total}
                            </div>
                        </li>
                    </ul> : null
            }
        </>
    )
}