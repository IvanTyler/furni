import { useEffect, useState } from 'react'
import { IDataApi } from '../../Interfaces/DataApi'
import { FormUserLogin } from '../FormUserLogin/FormUserLogin'
import { Header } from '../Header/Header'
import { Preloader } from '../Preloader/Preloader'
import { YourFurniActivity } from '../YourFurniActivity/YourFurniActivity'
import style from './Body.module.scss'
import { MainPage } from '../MainPage/MainPage'
import { Route, Routes } from 'react-router-dom'
import { Registration } from '../Registration/Registration'
import { useGetData } from '../../Hooks/useGetData'
import { Content } from '../Content/Content'

export const Body: React.FC = () => {

    const { isloading, error } = useGetData()

    const [isLoading, setIsLoading] = useState(false)

    const [isLogin, setIsLogin] = useState(false)
    const [getData, setGetData] = useState<IDataApi | any>()

    useEffect(() => {
        if (getData?.status) setIsLogin(true)
    }, [getData])

    if (isloading)
        return (
            <div className={style.preloaderWrapper} >
                <Preloader />
            </div >
        )

    return (
        <div className={isLogin ? '' : style.containerBody}>
            <>
                <Routes>
                    <Route path='/' element={<MainPage />} />
                    <Route path='/logIn' element={<FormUserLogin
                        setGetData={setGetData}
                        setIsLoading={setIsLoading}
                        isShowElement={false}
                    />} />
                    <Route path='/registr' element={<Registration
                        setGetData={setGetData}
                        setIsLoading={setIsLoading}
                    />} />
                    <Route path='/content' element={<Content />} />
                </Routes>
            </>
        </div>
    )
}