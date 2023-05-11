import styleClients from '../../assets/styles/tabsYourFurniActivity.module.scss'
import styleClientsItem from '../../assets/styles/tabsYourFurniActivityItem.module.scss'

import { IStatsPartners } from '../../Interfaces/DataApi'
import { List } from '../List/List'

import cx from 'classnames'
import { PartnersItem } from '../PartnersItem/PartnersItem'
import { IContacts } from '../../Interfaces/contacts'
import { DefaultPage } from '../DefaultPage/DefaultPage'

interface IPartnersProps {
    statsPartners: any;
    contacts: IContacts[];
}

export const Partners: React.FC<IPartnersProps> = ({ statsPartners, contacts }) => {

    const totalAmount = statsPartners.reduce((acc: any, current: any) => acc + current.amount, 0)
    const totalEarnings = statsPartners.reduce((acc: any, current: any) => acc + current.earnings, 0)

    if (contacts.length) {
        return (
            <>
                <h2 className={styleClients.tabsYourFurniActivityList__subTitle}>
                    This is the list of partners directly referred by you. You'll earn 1%
                    commission on all purchases of their direct clients.
                </h2>

                <div className={styleClients.tabsYourFurniActivityList__wrapper}>
                    <div className={styleClients.tabsYourFurniActivityList__content}>
                        <ul className={styleClients.tabsYourFurniActivityList}>
                            <li className={styleClientsItem.tabsYourFurniActivityItem}>
                                <div className={cx(styleClientsItem.tabsYourFurniActivityItem__title, styleClientsItem.name)}>
                                    Name
                                </div>
                                <div className={styleClientsItem.tabsYourFurniActivityItem__title}>
                                    Clients amount
                                </div>
                                <div className={styleClientsItem.tabsYourFurniActivityItem__title}>
                                    Clients network
                                </div>
                                <div className={styleClientsItem.tabsYourFurniActivityItem__title}>
                                    Earnings network
                                </div>
                                <div className={styleClientsItem.tabsYourFurniActivityItem__title}>
                                    Order amount, AED
                                </div>
                                <div className={styleClientsItem.tabsYourFurniActivityItem__title}>
                                    Your earnings, AED
                                </div>
                            </li>
                            <List
                                items={statsPartners}
                                renderItem={(item: IStatsPartners, index: number) => <PartnersItem item={item} key={index.toString()} />}
                            />
                            <li className={styleClientsItem.tabsYourFurniActivityItem}>
                                <div className={styleClientsItem.tabsYourFurniActivityItem__title}>
                                    Total
                                </div>
                                <div className={styleClientsItem.tabsYourFurniActivityItem__title}>
                                </div>
                                <div className={styleClientsItem.tabsYourFurniActivityItem__title}>
                                </div>
                                <div className={styleClientsItem.tabsYourFurniActivityItem__title}>
                                    {totalAmount}
                                </div>
                                <div className={styleClientsItem.tabsYourFurniActivityItem__title}>
                                    {totalEarnings}
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </>
        )
    }
    
    return (
        <>
            <DefaultPage />
        </>
    )
}