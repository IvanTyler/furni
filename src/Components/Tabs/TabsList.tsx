import { useState } from 'react'
import { ITabs } from '../../Interfaces/Tabs'
import { List } from '../List/List'
import { TabsListItem } from '../TabsItem/TabsListItem'
import style from './TabsList.module.scss'
import { useDispatch } from 'react-redux'

interface ITabsListProps {
    setTabElement(item: any): void
}

export const TabsList: React.FC<ITabsListProps> = ({ setTabElement }) => {

    const dispath = useDispatch<any>()

    const tabsList: ITabs[] = [
        {
            id: 1,
            name: 'Overview',
            active: true,
        },
        {
            id: 2,
            name: 'Contacts',
            active: false,
        },
        {
            id: 3,
            name: 'Events',
            active: false,
        },
    ]

    const [tabsYourFurniActivityList, setTabsYourFurniActivityListList] = useState<ITabs[]>(tabsList)

    const tabEditHandler = (id: number, name: string) => {

        // const currentname = tabsList.find((el: ITabs) => el.name === name)
        // if (currentname?.name === 'Contacts') {
        //     dispath(dataActionContacts())
        // }
        
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