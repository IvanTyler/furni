import { useState } from 'react'
import useYourFurniActivityList from '../../Hooks/YourFurniActivityList'
import { Clients } from '../Clients/Clients'
import { Partners } from '../Partners/Partners'
import { TabsList } from '../Tabs/TabsList'
import { tabsYourFurniActivityListEnum } from '../Tabs/tabsYourFurniActivityListEnum'
import style from './YourFurniActivity.module.scss'

export const YourFurniActivity: React.FC = () => {

    const { loading } = useYourFurniActivityList()

    const [tabElement, setTabElement] = useState('Clients')

    return (
        <>
            <section className={style.sectionYourFurniActivity}>
                <h2 className={style.sectionYourFurniActivity__title}>
                    Your Furni activity
                </h2>
                <TabsList setTabElement={setTabElement} />
                {loading ? <p>loading...</p> : <div>
                    {tabElement === tabsYourFurniActivityListEnum.clients ?
                        <Clients />
                        : null
                    }
                    {tabElement === tabsYourFurniActivityListEnum.partners ?
                        <Partners />
                        : null
                    }
                </div>}

            </section>
        </>
    )
}