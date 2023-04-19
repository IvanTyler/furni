
import { useState } from 'react'
import { FormUserLogin } from '../FormUserLogin/FormUserLogin'
import { YourFurniActivity } from '../YourFurniActivity/YourFurniActivity'
import style from './Body.module.scss'



export const Body: React.FC = () => {

    const [dataAuthorization, setAuthorization] = useState()

    return (
        <div className={style.container}>
            <FormUserLogin />
            <YourFurniActivity />
        </div>
    )
}