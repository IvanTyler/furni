import { useState } from 'react';
import style from '../../assets/styles/tabsYourFurniActivityItem.module.scss'
import { IGetDataContacts } from '../../Interfaces/contacts';
import cx from 'classnames'
import { useTypeSelector } from '../../Hooks/useTypeSelector';

interface IClientsProps {
    item: IGetDataContacts;
}

export const ContactsItem: React.FC<IClientsProps> = (
    { item }
) => {

    const total = Object.values(item.detail)
        .reduce((acc: number, el: number) => acc + el, 0)

    const [openDetailList, setOpenDetailList] = useState(false)

    return (
        <>
            <li className={openDetailList ?
                cx(style.tabsYourFurniActivityItem, style.active) :
                style.tabsYourFurniActivityItem}>
                <div className={style.tabsYourFurniActivityItem__name}>
                    <div
                        onClick={() => setOpenDetailList(prev => prev = !prev)}
                        className={
                            openDetailList ?
                                cx(style.tabsYourFurniActivityItem__showDetailsContact, style.active) :
                                style.tabsYourFurniActivityItem__showDetailsContact}
                    >
                    </div>
                    {item.name}
                </div>
                <div className={style.tabsYourFurniActivityItem__item}>
                    {item.titleTotal}
                </div>
            </li>
            {
                openDetailList ?
                    <ul>
                        <li className={cx(style.tabsYourFurniActivityItem, style.detalContent)}>
                            <div className={style.tabsYourFurniActivityItem__name}>
                                Direct sales
                            </div>
                            <div className={style.tabsYourFurniActivityItem__item}>
                                {item.detail.direct_sales}
                            </div>
                        </li>
                        <li className={cx(style.tabsYourFurniActivityItem, style.detalContent)}>
                            <div className={style.tabsYourFurniActivityItem__name}>
                                Via partners
                            </div>
                            <div className={style.tabsYourFurniActivityItem__item}>
                                {item.detail.via_partners}
                            </div>
                        </li>
                        <li className={cx(style.tabsYourFurniActivityItem, style.detalContent)}>
                            <div className={style.tabsYourFurniActivityItem__name}>
                                Via subpartners
                            </div>
                            <div className={style.tabsYourFurniActivityItem__item}>
                                {item.detail.via_subpartners}
                            </div>
                        </li>
                        <li className={cx(style.tabsYourFurniActivityItem, style.detalContent)}>
                            <div className={style.tabsYourFurniActivityItem__name}>
                                Total earnings
                            </div>
                            <div className={style.tabsYourFurniActivityItem__item}>
                                {total}
                            </div>
                        </li>
                    </ul> : null
            }
        </>
    )
}