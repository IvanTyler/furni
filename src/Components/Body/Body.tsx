import { Preloader } from '../Preloader/Preloader'
import style from './Body.module.scss'
import { MainPage } from '../MainPage/MainPage'
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import { Registration } from '../Registration/Registration'
import { Content } from '../Content/Content'
import { useTypeSelector } from '../../Hooks/useTypeSelector'
import { ProtectedRoute } from '../ProtectedRoute/ProtectedRoute'
import FormUserLogin from '../FormUserLogin/FormUserLogin'
import { useEffect, useRef, useState } from 'react'
import { getDataUser } from '../../Redux/Reducers/SliceReducers'
import { useAppDispatch } from '../../Redux/Store/Store'

export const Body: React.FC = () => {
    const location = useLocation();
    const navigate = useNavigate()
    const dispath = useAppDispatch()

    const { isLoadingContent, isBackToRegistration, inputEmail, inputPassword } = useTypeSelector(state => state.data)

    const getCurrentUrl = localStorage.getItem('location')

    useEffect(() => {
        if (isBackToRegistration) {
            if (window.location.href && getCurrentUrl !== window.location.href) {
                navigate("/registration")
                dispath(getDataUser({ email: inputEmail, password: inputPassword }))
            }
        } else {
            dispath(getDataUser({ email: '', password: '' }))
        }

    }, [location, isBackToRegistration])

    if (isBackToRegistration) {
        return (
            <div className={style.containerBody}>
                <Registration />
            </div>
        )
    }

    if (isLoadingContent)
        return (
            <div className={style.preloaderWrapper}>
                <Preloader />
            </div >
        )

    return (
        <div className={style.containerBody}>
            <>
                <Routes>
                    <Route path='/' element={<MainPage />} />

                    <Route path='/login' element={
                        <FormUserLogin
                            alreadyHaveAnAccount={false}
                            isShowElement={false}
                            isShowInputPartnerID={true}
                            isShowInputPassword={true}
                        />} />
                    <Route path='/registration' element={<Registration
                    />} />
                    <Route path='/content'
                        element={
                            <ProtectedRoute>
                                <Content />
                            </ProtectedRoute>
                        }
                    />
                </Routes>
            </>
        </div>
    )
}