import style from '../../assets/styles/filterListItem.module.scss'

import selectedFilterIcon from '../../assets/icon/common/selected-green.svg'
import { IFilterTimeUnits } from '../../Interfaces/IFilterTimeUnits'

interface IFilterContactsItemProps {
    item: IFilterTimeUnits
    setTimeUnitTitle: (id: number, name: string) => void
}

export const TimeUnitsFilterItems: React.FC<IFilterContactsItemProps> = ({ item, setTimeUnitTitle }) => {
    return (
        <li onClick={() => setTimeUnitTitle(item.id, item.name)}
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