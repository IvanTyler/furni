import styleClients from '../../assets/styles/tabsYourFurniActivity.module.scss'
import styleClientsItem from '../../assets/styles/tabsYourFurniActivityItem.module.scss'
import cx from 'classnames'

import { List } from '../List/List'
import { ContactsItem } from '../ContactsItem/ContactsItem'

import { useEffect, useState } from 'react'
import { DefaultPage } from '../DefaultPage/DefaultPage'
import { OpenFilterContacts } from '../OpenFilterContacts/OpenFilterContacts'
import { FilterContacts } from '../FilterContacts/FilterContacts'
import { useAppDispath, useTypeSelector } from '../../Hooks/useTypeSelector'
import { Preloader } from '../Preloader/Preloader'
import React from 'react'
import { dataActionContacts } from '../../Redux/Actions/dataActionContacts'
import { contactsSelector, grandTotalSelector } from '../../Redux/Reducers/getDataContactsReducer'

interface IContactsProps {
    img: string;
}

function Contacts({ img }: IContactsProps) {

    const { isloading } = useTypeSelector(state => state.dataContacts)

    const contacts = useTypeSelector(contactsSelector)
    const grandTotal = useTypeSelector(grandTotalSelector)
    
    const dispath = useAppDispath()

    useEffect(() => {
        dispath(dataActionContacts())
    }, [])

    const [isFilterContactsActive, setIsFilterContactsActive] = useState(false)
    const [titleContacts, setTitleContacts] = useState('All contacts')

    if (isloading === 'pending')
        return (
            <Preloader />
        )

    else if (isloading === 'success' && contacts.length) {
        return (
            <>
                <div className={cx(styleClientsItem.tabsYourFurniActivityItem, styleClientsItem.header)}>
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
                </div>
                <div className={styleClients.tabsYourFurniActivityList__wrapper}>
                    <FilterContacts
                        isFilterContactsActive={isFilterContactsActive}
                        setIsFilterContactsActive={setIsFilterContactsActive}
                        setTitleContacts={setTitleContacts}
                    />
                    <div className={styleClients.tabsYourFurniActivityList__content}>
                        <ul className={styleClients.tabsYourFurniActivityList}>

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
                                    {grandTotal}
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </>
        )
    }

    else if (isloading === 'success' && !contacts.length) {
        return (
            <>
                <div className={cx(styleClientsItem.tabsYourFurniActivityItem, styleClientsItem.header)}>
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
                </div>
                <div className={styleClients.tabsYourFurniActivityList__wrapper}>
                    <FilterContacts
                        isFilterContactsActive={isFilterContactsActive}
                        setIsFilterContactsActive={setIsFilterContactsActive}
                        setTitleContacts={setTitleContacts}
                    />
                    <div className={styleClients.tabsYourFurniActivityList__content}>
                        <ul className={styleClients.tabsYourFurniActivityList}>
                            <li className={styleClientsItem.tabsYourFurniActivityItem}>
                                No data
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

export default React.memo(Contacts)