import { useState } from 'react'
import { TabsList } from '../Tabs/TabsList'
import style from './YourFurniActivity.module.scss'

export const YourFurniActivity: React.FC = () => {

    const [tabElement, setTabElement] = useState('Clients')

    console.log(tabElement);
    

    return (
        <section className={style.sectionYourFurniActivity}>
            <h2 className={style.sectionYourFurniActivity__title}>
                Your Furni activity
            </h2>
            <TabsList setTabElement={setTabElement} />
        </section>
    )
}