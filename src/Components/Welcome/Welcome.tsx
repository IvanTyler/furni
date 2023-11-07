import { useEffect, useState } from 'react'
import style from './Welcome.module.scss'
import logo from '../../assets/icon/logo.svg'
import cx from 'classnames'
import { dataActionOverview } from '../../Redux/Actions/dataActionOverview'
import { useAppDispath, useTypeSelector } from '../../Hooks/useTypeSelector'
import { getDataLoadingLoadingLeadId, setAuth } from '../../Redux/Reducers/SliceReducers'
import { Preloader } from '../Preloader/Preloader'

export const Welcome: React.FC = () => {
    const dispath = useAppDispath()
    const { isloadingId } = useTypeSelector(state => state.data)

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

    // console.log(attempt);


    if (attempt >= 5) {
        localStorage.removeItem('token')
        localStorage.removeItem('refresh_token')
        localStorage.removeItem('lead_id')
        localStorage.removeItem('youHaveEarned')
        dispath(setAuth(false))
    }


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
                        <div className={style.welcome__cat}></div>
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
