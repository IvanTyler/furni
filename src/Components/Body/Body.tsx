import { FormUserLogin } from '../FormUserLogin/FormUserLogin'
import { Preloader } from '../Preloader/Preloader'
import style from './Body.module.scss'
import { MainPage } from '../MainPage/MainPage'
import { Route, Routes } from 'react-router-dom'
import { LetsGetStartedForm } from '../LetsGetStartedForm/LetsGetStartedForm'
import { Content } from '../Content/Content'
import { useTypeSelector } from '../../Hooks/useTypeSelector'
import { ProtectedRoute } from '../ProtectedRoute/ProtectedRoute'
import { YourDetailsForm } from '../YourDetailsForm/YourDetailsForm'

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
                    <Route path='/login' element={<FormUserLogin
                        title={'Login to your partner’s account'}
                        isShowElement={false}
                        isShowInputPartnerID={true}
                        isShowInputPassword={true}
                        textButton={'Login'}
                    />} />
                    <Route path='/letsGetStartedRegistr' element={<LetsGetStartedForm
                    />} />
                    <Route path='/yourDetailsFormRegistr' element={<YourDetailsForm
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