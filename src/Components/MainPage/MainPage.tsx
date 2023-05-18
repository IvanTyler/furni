import style from './MainPage.module.scss'
import logoFurni from '../../assets/icon/logo.svg'

import incomeIcon from '../../assets/icon/income.png'
import saveTimeEnergyIcon from '../../assets/icon/saveTimeEnergy.png'
import takeCareClientIcon from '../../assets/icon/flag.png'

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
                            <img src={incomeIcon} alt="" className={style.listFurniServices__icon} />
                            <span className={style.listFurniServices__text}></span>
                        </li>
                        <li className={style.listFurniServices__item}>
                            <img src={saveTimeEnergyIcon} alt="" className={style.listFurniServices__icon} />
                            <span className={style.listFurniServices__text}></span>
                        </li>
                        <li className={style.listFurniServices__item}>
                            <img src={takeCareClientIcon} alt="" className={style.listFurniServices__icon} />
                            <span className={style.listFurniServices__text}></span>
                        </li>
                    </ul>
                </li>
                <li className={style.listDescriptionWorksFurni__item}></li>
            </ul>
        </section>
    )
}