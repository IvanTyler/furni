import { useEffect } from 'react'
import style from './OpenFilterContacts.module.scss'

import filterIcon from '../../assets/icon/common/filter.svg'
import filterIconActive from '../../assets/icon/common/filter-active.svg'
import cx from 'classnames'

interface IFilterContactsProps {
    active: boolean
    setIsFilterContactsActive: (item: boolean | ((prev: boolean) => boolean)) => void
}


export const OpenFilterContacts: React.FC<IFilterContactsProps> = (
    {
        active,
        setIsFilterContactsActive
    }
) => {

    useEffect(() => {
        const closeFilter = () => setIsFilterContactsActive(false)
        document.addEventListener('click', closeFilter)
        return () => document.removeEventListener('click', closeFilter)
    }, [setIsFilterContactsActive])

    return (
        <div
            onClick={(e) => {
                setIsFilterContactsActive((prev) => !prev)
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