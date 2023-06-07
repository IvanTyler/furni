import { useState } from 'react'
import style from '../../assets/styles/filterList.module.scss'
import timeUnitsFilterStyle from './TimeUnitsFilter.module.scss'

import { List } from '../List/List'
import cx from 'classnames'
import { TimeUnitsFilterItems } from '../TimeUnitsFilterItems/TimeUnitsFilterItems'
import { IFilterTimeUnits } from '../../Interfaces/IFilterTimeUnits'

interface IsetCurrentTimeUnitProps {
    isFilterTimeUnitsActive: boolean;
    setCurrentTimeUnit: (item: string) => void;
}

export const TimeUnitsFilter: React.FC<IsetCurrentTimeUnitProps> = (
    {
        isFilterTimeUnitsActive,
        setCurrentTimeUnit,
    }
) => {

    const filterTimeUnits: IFilterTimeUnits[] = [
        {
            id: 1,
            name: 'This week',
            active: true,
        },
        {
            id: 2,
            name: 'This month',
            active: false,
        },
        {
            id: 3,
            name: 'This year',
            active: false,
        },
    ]

    const [filterTimeUnitsState, setFilterTimeUnits] = useState<IFilterTimeUnits[]>(filterTimeUnits)

    function setTimeUnitTitle(id: number, name: string) {

        setCurrentTimeUnit(name)
        setFilterTimeUnits((prev: any) => {
            return prev.map((el: any) => {
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
        <ul className={
            isFilterTimeUnitsActive ?
                cx(timeUnitsFilterStyle.timeUnitsFilter, style.FilterList) :
                cx(timeUnitsFilterStyle.timeUnitsFilter, style.FilterList, style.hide)
        }>
            <List
                items={filterTimeUnitsState}
                renderItem={(item: IFilterTimeUnits, index: number) => <TimeUnitsFilterItems
                    item={item}
                    setTimeUnitTitle={setTimeUnitTitle}
                    key={index.toString()}
                />}
            />
        </ul>
    )
}