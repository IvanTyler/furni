import style from './Header.module.scss'
import logoFurni from '../../assets/icon/logo.svg'

interface IHeaderProps {
    setIsLogin(item: any): void
}

export const Header: React.FC<IHeaderProps> = ({ setIsLogin }) => {

    return (
        <header className={style.header}>
            <img src={logoFurni} alt="logo" className={style.header__icon} />
            <span onClick={() => setIsLogin((prev: boolean) => prev = false)} className={style.header__logOut}>
                Log out
            </span>
        </header>
    )
}