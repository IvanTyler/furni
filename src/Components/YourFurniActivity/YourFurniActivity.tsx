import { useState } from 'react'
import { Clients } from '../Clients/Clients'
import { Partners } from '../Partners/Partners'
import { TabsList } from '../Tabs/TabsList'
import { tabsYourFurniActivityListEnum } from '../../Enums/tabsYourFurniActivityListEnum'
import style from './YourFurniActivity.module.scss'

import { IDataApi } from '../../Interfaces/DataApi'
import { Overview } from '../Overview/Overview'

interface IYourFurniActivityProps {
    getData: IDataApi;
}

export const YourFurniActivity: React.FC<IYourFurniActivityProps> = ({ getData }) => {

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
                                statsClients={getData.stats_clients}
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