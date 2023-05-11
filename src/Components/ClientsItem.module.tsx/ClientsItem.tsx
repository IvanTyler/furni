import { log } from 'console';
import style from '../../assets/styles/tabsYourFurniActivityItem.module.scss'
import { IContacts, IDetailContacts } from '../../Interfaces/contacts';
import { IStatsClients } from '../../Interfaces/DataApi'
import cx from 'classnames'

interface IClientsProps {
    item: IContacts;
    itemEditHandler: (item: any) => void
}

export const ClientsItem: React.FC<IClientsProps> = ({ item, itemEditHandler }) => {

    const total = Object.values(item.detail)
        .reduce((acc: number, el: number) => acc + el, 0)

    return (
        <>
            <li className={style.tabsYourFurniActivityItem}>
                <div className={style.tabsYourFurniActivityItem__name}>
                    <div
                        onClick={() => itemEditHandler(item.id)}
                        className={item.active ? cx(
                            style.tabsYourFurniActivityItem__showDetailsContact, style.active) : style.tabsYourFurniActivityItem__showDetailsContact}
                    >
                    </div>
                    {item.name}
                </div>
                <div className={style.tabsYourFurniActivityItem__item}>
                </div>
                <div className={style.tabsYourFurniActivityItem__item}>
                    {total}
                </div>
            </li>
            {item.active ? <div>
                <li className={style.tabsYourFurniActivityItem}>
                    <div className={style.tabsYourFurniActivityItem__name}>
                        Direct sales
                    </div>
                    <div className={style.tabsYourFurniActivityItem__item}>
                        {item.detail.direct_sales}
                    </div>
                </li>
                <li className={style.tabsYourFurniActivityItem}>
                    <div className={style.tabsYourFurniActivityItem__name}>
                        Via partners
                    </div>
                    <div className={style.tabsYourFurniActivityItem__item}>
                        {item.detail.via_partners}
                    </div>
                </li>
                <li className={style.tabsYourFurniActivityItem}>
                    <div className={style.tabsYourFurniActivityItem__name}>
                        Via subpartners
                    </div>
                    <div className={style.tabsYourFurniActivityItem__item}>
                        {item.detail.via_subpartners}
                    </div>
                </li>
                <li className={style.tabsYourFurniActivityItem}>
                    <div className={style.tabsYourFurniActivityItem__name}>
                        Total earnings
                    </div>
                    <div className={style.tabsYourFurniActivityItem__item}>
                        {total}
                    </div>
                </li>
            </div> : null}
        </>
    )
}