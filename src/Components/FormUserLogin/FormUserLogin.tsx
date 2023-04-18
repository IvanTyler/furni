import style from './FormUserLogin.module.scss'
import logoFurni from '../../assets/icon/logo.svg'
import { Input } from '../Input/Input'


export const FormUserLogin: React.FC = () => {
    return (
        <form action="" className={style.formUserLogin}>
            <img src={logoFurni} alt="logo furni" />
            <h1 className={style.formUserLogin__title}>
                Login to your
                partnetr’s account
            </h1>
            <Input type='text' name='name' placeholder='Username' />
            <Input type='password' name='password' placeholder='Password' />
            <button className={style.formUserLogin__submit}>Login</button>
        </form>
    )
}