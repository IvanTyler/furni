import styleClients from '../../assets/styles/tabsYourFurniActivity.module.scss'
import styleClientsItem from '../../assets/styles/tabsYourFurniActivityItem.module.scss'

import useYourFurniActivityList from '../../Hooks/YourFurniActivityList'
import { IStatsClients } from '../../Interfaces/DataApi'
import { List } from '../List/List'
import { ClientsItem } from '../ClientsItem.module.tsx/ClientsItem'

import cx from 'classnames'

export const Clients: React.FC = () => {
    const { statsClients } = useYourFurniActivityList()

    const totalAmount = statsClients.reduce((acc: any, current) => acc + current.amount, 0)
    const totalEarnings = statsClients.reduce((acc: any, current) => acc + current.earnings, 0)

    return (
        <ul className={styleClients.tabsYourFurniActivityList}>
            <li className={styleClientsItem.tabsYourFurniActivityItem}>
                <div className={cx(styleClientsItem.tabsYourFurniActivityItem__title, styleClientsItem.name)}>
                    Name
                </div>
                <div className={styleClientsItem.tabsYourFurniActivityItem__title}>
                    Order amount, AED
                </div>
                <div className={styleClientsItem.tabsYourFurniActivityItem__title}>
                    Your earnings, AED
                </div>
            </li>
            <List
                items={statsClients}
                renderItem={(item: IStatsClients) => <ClientsItem item={item} key={item.id} />}
            />
            <li className={styleClientsItem.tabsYourFurniActivityItem}>
                <div className={styleClientsItem.tabsYourFurniActivityItem__title}>
                    Total
                </div>
                <div className={styleClientsItem.tabsYourFurniActivityItem__title}>
                    {totalAmount}
                </div>
                <div className={styleClientsItem.tabsYourFurniActivityItem__title}>
                    {totalEarnings}
                </div>
            </li>
        </ul>
    )
}