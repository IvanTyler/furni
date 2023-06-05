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

    const documentBody = document
    documentBody.addEventListener('click', (e) => setIsFilterContactsActive((prev: any) => prev = false))

    return (
        <div
            onClick={(e) => {
                setIsFilterContactsActive((prev: boolean) => prev = !prev)
                e.stopPropagation()
            }}
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