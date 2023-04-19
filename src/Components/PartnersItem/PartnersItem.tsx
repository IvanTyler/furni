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
            <div className={style.tabsYourFurniActivityItem__amount}>
                {item.amount}
            </div>
            <div className={style.tabsYourFurniActivityItem__earnings}>
                {item.earnings}
            </div>
        </li>
    )
}