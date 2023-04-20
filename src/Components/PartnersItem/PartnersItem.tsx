import style from '../../assets/styles/tabsYourFurniActivityItem.module.scss'
import { IStatsPartners } from '../../Interfaces/DataApi'

interface IClientsProps {
    item: IStatsPartners
}

export const PartnersItem: React.FC<IClientsProps> = ({ item }) => {
    return (
        <li className={style.tabsYourFurniActivityItem}>
            <div className={style.tabsYourFurniActivityItem__name}>
                {item.name}
            </div>
            <div className={style.tabsYourFurniActivityItem__item}>
                {item.clients}
            </div>
            <div className={style.tabsYourFurniActivityItem__item}>
                {item.amount}
            </div>
            <div className={style.tabsYourFurniActivityItem__item}>
                {item.earnings}
            </div>
            <div className={style.tabsYourFurniActivityItem__item}>
                {item.clients_network}
            </div>
            <div className={style.tabsYourFurniActivityItem__item}>
                {item.earnings_network}
            </div>
        </li>
    )
}