import { useEffect, useState } from 'react'
import style from './Welcome.module.scss'
import cat from '../../assets/images/cat.png'
import logo from '../../assets/icon/logo.svg'
import cx from 'classnames'
import { dataActionOverview } from '../../Redux/Actions/dataActionOverview'
import { useAppDispath, useTypeSelector } from '../../Hooks/useTypeSelector'
import { getDataLoadingLoadingLeadId, setAuth } from '../../Redux/Reducers/SliceReducers'
import { useNavigate } from 'react-router-dom'
import { Preloader } from '../Preloader/Preloader'
import { dataActionOverviewRefresh } from '../../Redux/Actions/dataActionOverviewRefredh'

export const Welcome: React.FC = () => {
    const dispath = useAppDispath()
    const { isloadingId, isloading, referal_code } = useTypeSelector(state => state.data)

    const [attempt, setAttempt] = useState(0)
    useEffect(() => {
        dispath(dataActionOverview())

    }, [])

    useEffect(() => {
        if (isloadingId === 'error') {
            setTimeout(() => {
                dispath(dataActionOverview())
                dispath(getDataLoadingLoadingLeadId())
                setAttempt(prev => prev + 1)
            }, 5000)
        }

    }, [isloadingId])



    return (
        <div className={style.welcome}>
            <img src={logo} alt="logo" className={style.welcome__logo} />
            {
                attempt > 1 ?
                    <>
                        <h2 className={cx(style.welcome__title, style.title_error)}>
                            Oops! <br />Something went wrong
                        </h2>
                        <h3 className={style.welcome__subTitle}>
                            Please call us <a className={style.welcome__link} href="tel:+97143102096">+971-431-02096</a> or text to&nbsp;
                            <a href="mailto:partners@furni.ae" className={style.welcome__link}>partners@furni.ae</a>
                            &nbsp;to register your account
                        </h3>
                        <img src={cat} alt="logo" className={style.welcome__icon_cat} />
                    </>
                    :
                    <>
                        <h2 className={style.welcome__title}>
                            Setting up your account
                        </h2>
                        <Preloader />
                    </>
            }
        </div>
    )
}
