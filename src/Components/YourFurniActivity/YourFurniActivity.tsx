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
                <h2 className={style.sectionYourFurniActivity__title}>
                    Your Furni activity
                </h2>

                <div>
                    <TabsList setTabElement={setTabElement} />
                    <div className={style.sectionYourFurniActivity__content}>
                        {tabElement === tabsYourFurniActivityListEnum.overview ?
                            <Overview
                            />
                            : null
                        }
                        {tabElement === tabsYourFurniActivityListEnum.clients ?
                            <Clients
                                statsClients={contacts}
                                contentImgDefaultPage={contentImgDefaultPage}
                            />
                            : null
                        }
                        {tabElement === tabsYourFurniActivityListEnum.partners ?
                            <Partners
                                statsPartners={getData.stats_partners}
                            />
                            : null
                        }
                    </div>
                </div>

            </section>
        </>
    )
}