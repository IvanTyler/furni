import style from './MainPage.module.scss'
import logoFurni from '../../assets/icon/logo.svg'

import incomeIcon from '../../assets/icon/income.png'
import saveTimeEnergyIcon from '../../assets/icon/saveTimeEnergy.png'
import takeCareClientIcon from '../../assets/icon/flag.png'
import cx from 'classnames'
import { Link } from 'react-router-dom'

export const MainPage: React.FC = () => {
    return (
        <section className={style.sectionMainPage}>
            <ul className={style.listDescriptionWorksFurni}>
                <li className={style.listDescriptionWorksFurni__item}>
                    <img src={logoFurni} alt="logo" className={style.listDescriptionWorksFurni__logo} />
                    <h2 className={style.listDescriptionWorksFurni__title}>
                        Partner with Furni for mutual benefit
                    </h2>
                    <ul className={style.listFurniServices}>
                        <li className={style.listFurniServices__item}>
                            <img src={incomeIcon} alt="Get extra income" className={style.listFurniServices__icon} />
                            <span className={style.listFurniServices__text}>Get extra income</span>
                        </li>
                        <li className={style.listFurniServices__item}>
                            <img src={saveTimeEnergyIcon} alt="Save time and energy" className={style.listFurniServices__icon} />
                            <span className={style.listFurniServices__text}>Save time and energy</span>
                        </li>
                        <li className={style.listFurniServices__item}>
                            <img src={takeCareClientIcon} alt="We will take care of your client" className={style.listFurniServices__icon} />
                            <span className={style.listFurniServices__text}>We will take care of your client</span>
                        </li>
                    </ul>
                    <nav className={style.sectionMainPageNavigation}>
                        {/* <Link className={style.sectionMainPageNavigation__link} to='/registr'>Registr</Link> */}
                        <Link className={style.sectionMainPageNavigation__link} to='/login'>LogIn</Link>
                    </nav>
                </li>
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
            
        </section>
    )
}