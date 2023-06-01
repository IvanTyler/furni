import styleClients from '../../assets/styles/tabsYourFurniActivity.module.scss'
import styleClientsItem from '../../assets/styles/tabsYourFurniActivityItem.module.scss'
import cx from 'classnames'

import { List } from '../List/List'
import { ContactsItem } from '../ContactsItem/ContactsItem'

import { useEffect, useState } from 'react'
import { DefaultPage } from '../DefaultPage/DefaultPage'
import { OpenFilterContacts } from '../OpenFilterContacts/OpenFilterContacts'
import { FilterContacts } from '../FilterContacts/FilterContacts'
import { dataActionContacts } from '../../Redux/Actions/dataAction'
import { useAppDispath, useTypeSelector } from '../../Hooks/useTypeSelector'
import { contactsSelector, grandTotalSelector, totalDirectSales, totalViaPartners, totalViaSubPartners } from '../../Redux/Reducers/SliceReducers'
import { Preloader } from '../Preloader/Preloader'

interface IContactsProps {
    img: string;
}

export const Contacts: React.FC<IContactsProps> = ({ img }) => {

    const { filterBy, isloading } = useTypeSelector(state => state.data)

    const contacts = useTypeSelector(contactsSelector)
    const grandTotal = useTypeSelector(grandTotalSelector)
    const totalClients = useTypeSelector(totalDirectSales)
    const totalPartners = useTypeSelector(totalViaPartners)
    const totalSubPartners = useTypeSelector(totalViaSubPartners)

    const dispath = useAppDispath()

    useEffect(() => {
        dispath(dataActionContacts())
    }, [])

    function setGrandTotalContacts() {
        switch (filterBy) {
            case null:
                return grandTotal
            case 'direct_sales':
                return totalClients
            case 'via_partners':
                return totalPartners
            case 'via_subpartners':
                return totalSubPartners
            default:
                return grandTotal
        }
    }

    const [isFilterContactsActive, setIsFilterContactsActive] = useState(false)
    const [titleContacts, setTitleContacts] = useState('All contacts')


    if (isloading === 'loading')
        return (
            <Preloader />
        )

    else if (isloading === 'ok') {
        return (
            <>
                <div className={styleClients.tabsYourFurniActivityList__wrapper}>
                    <FilterContacts
                        isFilterContactsActive={isFilterContactsActive}
                        setIsFilterContactsActive={setIsFilterContactsActive}
                        setTitleContacts={setTitleContacts}
                    />
                    <div className={styleClients.tabsYourFurniActivityList__content}>
                        <ul className={styleClients.tabsYourFurniActivityList}>
                            <li className={styleClientsItem.tabsYourFurniActivityItem}>
                                <div className={cx(styleClientsItem.tabsYourFurniActivityItem__title, styleClientsItem.name)}>
                                    <OpenFilterContacts
                                        active={isFilterContactsActive}
                                        setIsFilterContactsActive={setIsFilterContactsActive}
                                    />
                                    {titleContacts}
                                </div>
                                <div className={styleClientsItem.tabsYourFurniActivityItem__title}>
                                    Your earnings, AED
                                </div>
                            </li>

                            <List
                                items={contacts}
                                renderItem={(item: any, index: number) => <ContactsItem
                                    item={item}
                                    key={index.toString()}
                                />}
                            />

                            <li className={styleClientsItem.tabsYourFurniActivityItem}>
                                <div className={styleClientsItem.tabsYourFurniActivityItem__title}>
                                    Total
                                </div>
                                <div className={styleClientsItem.tabsYourFurniActivityItem__title}>
                                    {setGrandTotalContacts()}
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
            <DefaultPage img={img} />
        </>
    )


}