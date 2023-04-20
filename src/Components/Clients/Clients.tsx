import styleClients from '../../assets/styles/tabsYourFurniActivity.module.scss'
import styleClientsItem from '../../assets/styles/tabsYourFurniActivityItem.module.scss'

import { IStatsClients } from '../../Interfaces/DataApi'
import { List } from '../List/List'
import { ClientsItem } from '../ClientsItem.module.tsx/ClientsItem'

import cx from 'classnames'

interface IClientsProps {
    statsClients: any;
}

export const Clients: React.FC<IClientsProps> = ({ statsClients }) => {

    const totalAmount = statsClients.reduce((acc: any, current: { amount: any }) => acc + current.amount, 0)
    const totalEarnings = statsClients.reduce((acc: any, current: { earnings: any }) => acc + current.earnings, 0)

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
                renderItem={(item: IStatsClients, index: number) => <ClientsItem item={item} key={index.toString()} />}
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