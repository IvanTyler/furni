import style from './OpenFilterContacts.module.scss'

import filterIcon from '../../assets/icon/common/filter.svg'
import filterIconActive from '../../assets/icon/common/filter-active.svg'
import cx from 'classnames'

interface IFilterContactsProps {
    active: boolean
    setIsFilterContactsActive: (item: any) => void
}


export const OpenFilterContacts: React.FC<IFilterContactsProps> = (
    {
        active,
        setIsFilterContactsActive
    }
) => {

    return (
        <div
            onClick={() => setIsFilterContactsActive((prev: boolean) => prev = !prev)}
            className={
                active ?
                    cx(style.openfilterContacts, style.active) :
                    style.openfilterContacts}>
            <img src={
                active ?
                    filterIconActive :
                    filterIcon
            }
                alt="filter contacts" className={style.openfilterContacts__icon} />
        </div>
    )
}