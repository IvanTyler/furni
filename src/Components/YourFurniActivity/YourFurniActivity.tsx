import { useState } from 'react'
import useYourFurniActivityList from '../../Hooks/YourFurniActivityList'
import { Clients } from '../Clients/Clients'
import { Partners } from '../Partners/Partners'
import { TabsList } from '../Tabs/TabsList'
import { tabsYourFurniActivityListEnum } from '../../Enums/tabsYourFurniActivityListEnum'
import style from './YourFurniActivity.module.scss'
import { Preloader } from '../Preloader/Preloader'

import cx from 'classnames'

export const YourFurniActivity: React.FC = () => {

    const { loading } = useYourFurniActivityList()

    const [tabElement, setTabElement] = useState('Clients')

    return (
        <>
            <section className={loading ?
                cx(style.sectionYourFurniActivity, style.center) :
                style.sectionYourFurniActivity
            }>
                <h2 className={style.sectionYourFurniActivity__title}>
                    Your Furni activity
                </h2>
                {loading ?
                    <Preloader /> :
                    <div>
                        <TabsList setTabElement={setTabElement} />
                        <div className={style.sectionYourFurniActivity__content}>
                            <h2 className={style.sectionYourFurniActivity__subTitle}>
                                The list of clients directly referred by you. You'll earn 5%
                                commission on all their purchases.
                            </h2>
                            {tabElement === tabsYourFurniActivityListEnum.clients ?
                                <Clients />
                                : null
                            }
                            {tabElement === tabsYourFurniActivityListEnum.partners ?
                                <Partners />
                                : null
                            }
                        </div>
                    </div>
                }

            </section>
        </>
    )
}