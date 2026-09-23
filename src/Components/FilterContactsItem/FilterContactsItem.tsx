import { IFilterContacts, FilterByType } from '../../Interfaces/FilterContacts'
import style from '../../assets/styles/filterListItem.module.scss'

import selectedFilterIcon from '../../assets/icon/common/selected-green.svg'

interface IFilterContactsItemProps {
    item: IFilterContacts
    itemFilterContactsEditHandler: (id: number, filter: FilterByType | null, name: string) => void
}

export const FilterContactsItem: React.FC<IFilterContactsItemProps> = (
    {
        item,
        itemFilterContactsEditHandler
    }
) => {
    return (
        <li
            onClick={() => itemFilterContactsEditHandler(item.id, item.filter, item.name)}
            className={style.FilterListItem}>
            {
                item.active &&
                <img
                    className={style.FilterListItem__icon}
                    src={selectedFilterIcon} alt="select" />
            }

            {item.name}
        </li>
    )
}