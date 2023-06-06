import style from './TimeUnits.module.scss'

import calendarIcon from '../../assets/icon/common/calendar.svg'
import { useState } from 'react'


export const TimeUnits: React.FC = () => {

    const [currentTimeUnit, setCurrentTimeUnit] = useState('This week')

    return (
        <section className={style.sectionTimeUnits}>
            <img src={calendarIcon} alt="calendar" />
            <h3 className={style.sectionTimeUnits__title}>
                {currentTimeUnit}
            </h3>
            <span className={style.sectionTimeUnits__openListTimeUnits}>

            </span>
        </section>
    )
}