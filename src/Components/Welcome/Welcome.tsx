import { useEffect } from 'react'
import style from '../MainPage/MainPage.module.scss'
import cx from 'classnames'
import { dataActionOverview } from '../../Redux/Actions/dataActionOverview'
import { useAppDispath } from '../../Hooks/useTypeSelector'
import { setAuth } from '../../Redux/Reducers/SliceReducers'
import { useNavigate } from 'react-router-dom'

export const Welcome: React.FC = () => {
    const dispath = useAppDispath()

    useEffect(() => {
        setTimeout(() => dispath(dataActionOverview()), 5000)
    }, [])

    return (
        <ul className={style.listDescriptionWorksFurni}>

            <li className={style.listDescriptionWorksFurni__item}>
                <h2 className={cx(style.listDescriptionWorksFurni__title, style.howItworks)}>
                    How it works?
                </h2>

                <h3 className={style.listDescriptionWorksFurni__subTitle}>
                    Our bonus program:
                </h3>
                <ul className={style.listDescriptionProgram}>
                    <li className={style.listDescriptionProgram__item}>
                        5% of the deal with the customer you referred
                    </li>
                    <li className={style.listDescriptionProgram__item}>
                        1% of the deal with the agent customer you referred
                    </li>
                    <li className={style.listDescriptionProgram__item}>
                        0.25% of any purchases made by customers of your sub-partners
                    </li>
                </ul>

                <h3 className={style.listDescriptionWorksFurni__subTitle}>
                    How to get the bonus?
                </h3>
                <ul className={style.listDescriptionProgram}>
                    <li className={style.listDescriptionProgram__item}>
                        Payment to partners under the referral program is made after the
                        client's order is paid
                    </li>
                    <li className={style.listDescriptionProgram__item}>
                        The manager will arrange a meeting with you and
                        give you your percentage of the deal
                    </li>
                </ul>

                <h3 className={style.listDescriptionWorksFurni__subTitle}>
                    Any questions?
                </h3>
                <ul className={style.listDescriptionProgram}>
                    <li className={style.listDescriptionProgram__item}>
                        Text us to &nbsp;<a className={style.email} href="mailto:partners@furni.ae">partners@furni.ae</a>&nbsp;
                        or call&nbsp;
                        <a href="tel:+97143102096">+971-431-02096</a>
                    </li>
                </ul>
            </li>
        </ul>
    )
}
