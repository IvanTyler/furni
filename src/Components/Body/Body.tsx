
import { useState } from 'react'
import { FormUserLogin } from '../FormUserLogin/FormUserLogin'
import { Header } from '../Header/Header'
import { YourFurniActivity } from '../YourFurniActivity/YourFurniActivity'
import style from './Body.module.scss'

export const Body: React.FC = () => {

    const [dataAuthorization, setAuthorization] = useState(true)
    
    return (
        <div className={style.container}>
            {dataAuthorization ?
                <FormUserLogin setAuthorization={setAuthorization} /> :
                <>
                    <Header setAuthorization={setAuthorization} />
                    <YourFurniActivity />
                </>
            }
        </div>
    )
}