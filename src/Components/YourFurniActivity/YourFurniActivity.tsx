import { useState } from 'react'
import { Contacts } from '../Contacts/Contacts'
import { Events } from '../Events/Events'
import { TabsList } from '../Tabs/TabsList'
import { tabsYourFurniActivityListEnum } from '../../Enums/tabsYourFurniActivityListEnum'
import style from './YourFurniActivity.module.scss'

import { IDataApi } from '../../Interfaces/DataApi'
import { Overview } from '../Overview/Overview'

import imgOverview from '../../assets/images/overview.png'
import imgContacts from '../../assets/images/contacts.png'
import imgEvents from '../../assets/images/events.png'

import imgMoney from '../../assets/images/money.png'

import { contacts } from '../../MockData/MockData'
import { useGetData } from '../../Hooks/useGetData'


interface IYourFurniActivityProps {
    getData: IDataApi;
}

export const YourFurniActivity: React.FC<IYourFurniActivityProps> = (
    {
        getData,
    }
) => {

    const [tabElement, setTabElement] = useState('Overview')

    const { myDataContacts, myDataEvents } = useGetData()
    

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
                        24,204 AED
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
                                statsClients={myDataContacts}
                                img={imgContacts}
                            />
                            : null
                        }
                        {tabElement === tabsYourFurniActivityListEnum.events ?
                            <Events
                                img={imgEvents}
                                statsPartners={myDataEvents}
                            />
                            : null
                        }
                    </div>
                </div>

            </section>
        </>
    )
}