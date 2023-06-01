import { FormUserLogin } from '../FormUserLogin/FormUserLogin'
import { Preloader } from '../Preloader/Preloader'
import style from './Body.module.scss'
import { MainPage } from '../MainPage/MainPage'
import { Navigate, Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import { Registration } from '../Registration/Registration'
import { useGetData } from '../../Hooks/useGetData'
import { Content } from '../Content/Content'
import { useTypeSelector } from '../../Hooks/useTypeSelector'
import { useEffect } from 'react'

export const Body: React.FC = () => {

    let location = useLocation();
    const { isloading } = useGetData()
    const history = useNavigate()
    const { status } = useTypeSelector(state => state.data)

    useEffect(() => {

    }, [status])


    if (status)
        return (
            <div className={style.preloaderWrapper} >
                <Preloader />
            </div >
        )

    return (
        <div className={style.containerBody}>
            <>
                <Routes>
                    <Route path='/' element={<MainPage />} />
                    <Route path='/logIn' element={<FormUserLogin
                        isShowElement={false}
                    />} />
                    <Route path='/registr' element={<Registration
                    />} />
                    <Route path='/content' element={<Content />} />

                </Routes>
            </>
        </div>
    )
}