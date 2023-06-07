import style from './TimeUnits.module.scss'

import calendarIcon from '../../assets/icon/common/calendar.svg'
import openTimeUnitsIcon from '../../assets/icon/overview/openTimeunits.svg'

import { useState } from 'react'
import { TimeUnitsFilter } from '../TimeUnitsFilter/TimeUnitsFilter'

export const TimeUnits: React.FC = () => {

    const [currentTimeUnit, setCurrentTimeUnit] = useState('This week')
    const [isFilterTimeUnitsActive, setIsFilterTimeUnitsActive] = useState(false)

    const documentBody = document
    documentBody.addEventListener('click', (e) => setIsFilterTimeUnitsActive((prev: any) => prev = false))

    return (
        <>
            <section className={style.sectionTimeUnits}>
                <img className={style.sectionTimeUnits__iconCalendar} src={calendarIcon} alt="calendar" />
                <h3 className={style.sectionTimeUnits__title}>
                    {currentTimeUnit}
                </h3>
                <img
                    onClick={(e) => {
                        setIsFilterTimeUnitsActive(prev => !prev)
                        e.stopPropagation()
                    }}
                    className={style.sectionTimeUnits__iconOpenTimeUnits}
                    src={openTimeUnitsIcon}
                    alt="openTimeUnits"
                />
            </section>
            <TimeUnitsFilter
                setCurrentTimeUnit={setCurrentTimeUnit}
                isFilterTimeUnitsActive={isFilterTimeUnitsActive}
            />
        </>
    )
}