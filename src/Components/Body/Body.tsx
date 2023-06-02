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
import cx from 'classnames'
import { ProtectedRoute } from '../ProtectedRoute/ProtectedRoute'

export const Body: React.FC = () => {

    const { isLoadingContent } = useTypeSelector(state => state.data)

    if (isLoadingContent === 'loading')
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