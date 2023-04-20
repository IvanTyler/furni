import styleClients from '../../assets/styles/tabsYourFurniActivity.module.scss'
import styleClientsItem from '../../assets/styles/tabsYourFurniActivityItem.module.scss'

import useYourFurniActivityList from '../../Hooks/YourFurniActivityList'
import { IStatsPartners } from '../../Interfaces/DataApi'
import { List } from '../List/List'

import cx from 'classnames'
import { PartnersItem } from '../PartnersItem/PartnersItem'

export const Partners: React.FC = () => {
    const { StatsPartners } = useYourFurniActivityList()

    const totalAmount = StatsPartners.reduce((acc: any, current) => acc + current.amount, 0)
    const totalEarnings = StatsPartners.reduce((acc: any, current) => acc + current.earnings, 0)

    return (
        <ul className={styleClients.tabsYourFurniActivityList}>
            <li className={styleClientsItem.tabsYourFurniActivityItem}>
                <div className={cx(styleClientsItem.tabsYourFurniActivityItem__title, styleClientsItem.name)}>
                    Name
                </div>
                <div className={styleClientsItem.tabsYourFurniActivityItem__title}>
                    Clients amount
                </div>
                <div className={styleClientsItem.tabsYourFurniActivityItem__title}>
                    Order amount, AED
                </div>
                <div className={styleClientsItem.tabsYourFurniActivityItem__title}>
                    Your earnings, AED
                </div>
                <div className={styleClientsItem.tabsYourFurniActivityItem__title}>
                    Clients network
                </div>
                <div className={styleClientsItem.tabsYourFurniActivityItem__title}>
                    Earnings network
                </div>
            </li>
            <List
                items={StatsPartners}
                renderItem={(item: IStatsPartners) => <PartnersItem item={item} key={item.id} />}
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