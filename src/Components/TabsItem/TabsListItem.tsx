import { ITabs } from "../../Interfaces/Tabs"
import style from './TabsListItem.module.scss'
import cx from 'classnames'

interface ITabsListProps {
    item: ITabs;
    tabEditHandler(id: number, name: string): void
}

export const TabsListItem: React.FC<ITabsListProps> = ({ item, tabEditHandler }) => {
    return (
        <li
            className={
                item.active ?
                    cx(style.tabsListItem, style.active) :
                    style.tabsListItem
            }
            onClick={() => tabEditHandler(item.id, item.name)}
        >
            {item.name}
        </li>
    )
}