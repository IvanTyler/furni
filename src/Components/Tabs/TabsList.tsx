import { useState } from 'react'
import { ITabs } from '../../Interfaces/Tabs'
import { List } from '../List/List'
import { TabsListItem } from '../TabsItem/TabsListItem'
import style from './TabsList.module.scss'

interface ITabsListProps {
    setTabElement(item: any): void
}

export const TabsList: React.FC<ITabsListProps> = ({ setTabElement }) => {

    const tabsList: ITabs[] = [
        {
            id: 1,
            name: 'Clients',
            active: true,
        },
        {
            id: 2,
            name: 'Partners',
            active: false,
        },
    ]

    const [tabsYourFurniActivityList, setTabsYourFurniActivityListList] = useState<ITabs[]>(tabsList)

    const tabEditHandler = (id: number, name: string) => {
        setTabElement((prev: string) => prev = name)
        setTabsYourFurniActivityListList(prev => {
            return prev.map(el => {
                if (el.id === id) {
                    return {
                        ...el,
                        active: true,
                    }
                } else if (el.id !== id) {
                    return {
                        ...el,
                        active: false,
                    }
                }
                return el
            })
        })
    }

    return (
        <ul className={style.tabsList}>
            <List
                items={tabsYourFurniActivityList}
                renderItem={(item: ITabs) =>
                    <TabsListItem
                        item={item}
                        key={item.id}
                        tabEditHandler={tabEditHandler}
                    />}
            />
        </ul>
    )
}