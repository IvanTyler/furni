import { IFilterContacts } from '../../Interfaces/FilterContacts'
import style from './FilterContactsItem.module.scss'

import selectedFilterIcon from '../../assets/icon/common/selected-green.svg'


interface IFilterContactsItemProps {
    item: IFilterContacts
    itemFilterContactsEditHandler: (id: number, name: string) => void
}

export const FilterContactsItem: React.FC<IFilterContactsItemProps> = (
    {
        item,
        itemFilterContactsEditHandler
    }
) => {
    return (
        <li
            onClick={() => itemFilterContactsEditHandler(item.id, item.filter)}
            className={style.FilterContactsListItem}>
            {
                item.active &&
                    <img
                        className={style.FilterContactsListItem__icon}
                        src={selectedFilterIcon} alt="select" />
            }

            {item.name}
        </li>
    )
}