import { useState } from 'react'
import { Clients } from '../Clients/Clients'
import { Partners } from '../Partners/Partners'
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


interface IYourFurniActivityProps {
    getData: IDataApi;
    setContentImgDefaultPage: (item: string) => void;
    contentImgDefaultPage: string;
}

export const YourFurniActivity: React.FC<IYourFurniActivityProps> = (
    {
        getData,
        setContentImgDefaultPage,
        contentImgDefaultPage,
    }
) => {

    const [tabElement, setTabElement] = useState('Overview')

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
                            <Clients
                                statsClients={contacts}
                                img={imgContacts}
                                contentImgDefaultPage={contentImgDefaultPage}
                            />
                            : null
                        }
                        {tabElement === tabsYourFurniActivityListEnum.events ?
                            <Partners
                                img={imgEvents}
                                statsPartners={contacts}
                            />
                            : null
                        }
                    </div>
                </div>

            </section>
        </>
    )
}