import { Preloader } from '../Preloader/Preloader'
import style from './Body.module.scss'
import { MainPage } from '../MainPage/MainPage'
import { Route, Routes } from 'react-router-dom'
import { Registration } from '../Registration/Registration'
import { Content } from '../Content/Content'
import { useTypeSelector } from '../../Hooks/useTypeSelector'
import { ProtectedRoute } from '../ProtectedRoute/ProtectedRoute'
import FormUserLogin from '../FormUserLogin/FormUserLogin'

export const Body: React.FC = () => {

    const { isLoadingContent } = useTypeSelector(state => state.data)

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