import { useState } from 'react'
import { Events } from '../Events/Events'
import { TabsList } from '../Tabs/TabsList'
import { tabsYourFurniActivityListEnum } from '../../Enums/tabsYourFurniActivityListEnum'
import style from './YourFurniActivity.module.scss'

import { Overview } from '../Overview/Overview'

import imgOverview from '../../assets/images/overview.png'
import imgContacts from '../../assets/images/contacts.png'
import imgEvents from '../../assets/images/events.png'

import imgMoney from '../../assets/images/money.png'

import { useGetData } from '../../Hooks/useGetData'
import { useTypeSelector } from '../../Hooks/useTypeSelector';
import Contacts from '../Contacts/Contacts'

export const YourFurniActivity: React.FC = () => {
    const { you_have_earned } = useTypeSelector(state => state.data)

    const [tabElement, setTabElement] = useState('Overview')

    const { codeCopied } = useGetData()

    const getYouHaveEarnedLocalStorage = localStorage.getItem('youHaveEarned')


    return (
        <>
            <section className={
                style.sectionYourFurniActivity
            }>
                <div className={style.sectionYourFurniActivity__titles}>
                    <h2 className={style.sectionYourFurniActivity__subTitle}>
                        you’ve earned with Furni
                    </h2>
                    <h2 className={style.sectionYourFurniActivity__title}>
                        {
                            getYouHaveEarnedLocalStorage !== null ?
                                getYouHaveEarnedLocalStorage :
                                you_have_earned
                        } AED
                    </h2>
                    <img className={style.sectionYourFurniActivity__imgMoney} src={imgMoney} alt="" />
                </div>
                <div>
                    <TabsList setTabElement={setTabElement} />
                    <div className={style.sectionYourFurniActivity__content}>
                        {tabElement === tabsYourFurniActivityListEnum.overview ?
                            <Overview
                                img={imgOverview}
                            />
                            : null
                        }
                        {tabElement === tabsYourFurniActivityListEnum.contacts ?
                            <Contacts
                                img={imgContacts}
                            />
                            : null
                        }
                        {tabElement === tabsYourFurniActivityListEnum.events ?
                            <Events
                                img={imgEvents}
                            />
                            : null
                        }
                    </div>
                    {codeCopied && <div className={style.sectionYourFurniActivity__codeCopied}>
                        Code copied
                    </div>}
                </div>
            </section>
        </>
    )
}