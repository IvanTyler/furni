import { useEffect, useState } from 'react'
import { IDataApi } from '../../Interfaces/DataApi'
import { FormUserLogin } from '../FormUserLogin/FormUserLogin'
import { Header } from '../Header/Header'
import { Preloader } from '../Preloader/Preloader'
import { YourFurniActivity } from '../YourFurniActivity/YourFurniActivity'
import style from './Body.module.scss'

export const Body: React.FC = () => {

    const [isLoading, setIsLoading] = useState(false)

    const [isLogin, setIsLogin] = useState(false)
    const [getData, setGetData] = useState<IDataApi | any>()

    useEffect(() => {
        if (getData?.status) setIsLogin(true)
    }, [getData])

    if (isLoading)
        return (
            <div className={style.preloaderWrapper} >
                <Preloader />
            </div >
        )

    return (
        <div className={!isLogin ? style.containerBody : ''}>
            {isLogin ?
                <>
                    <Header setIsLogin={setIsLogin} />
                    <YourFurniActivity
                        getData={getData}
                    />
                </>
                :
                <FormUserLogin
                    setGetData={setGetData}
                    setIsLoading={setIsLoading}
                />
            }
        </div>
    )
}