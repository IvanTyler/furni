import style from '../../assets/styles/tabsYourFurniActivityItem.module.scss'
import { IStatsClients } from '../../Interfaces/DataApi'

interface IClientsProps {
    item: IStatsClients
}

export const ClientsItem: React.FC<IClientsProps> = ({ item }) => {
    return (
        <li className={style.tabsYourFurniActivityItem}>
            <div className={style.tabsYourFurniActivityItem__name}>
                {item.name}
            </div>
            <div className={style.tabsYourFurniActivityItem__item}>
                {item.amount}
            </div>
            <div className={style.tabsYourFurniActivityItem__item}>
                {item.earnings}
            </div>
        </li>
    )
}