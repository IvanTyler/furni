import style from './Header.module.scss'
import logoFurni from '../../assets/icon/logo.svg'

interface IHeaderProps {
    setAuthorization(item: any): void
}

export const Header: React.FC<IHeaderProps> = ({ setAuthorization }) => {


    return (
        <header className={style.header}>
            <img src={logoFurni} alt="logo" className={style.header__icon} />
            <span onClick={() => setAuthorization((prev: boolean) => prev = true)} className={style.header__logOut}>
                Log out
            </span>
        </header>
    )
}