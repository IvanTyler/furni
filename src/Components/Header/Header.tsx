import style from './Header.module.scss'
import logoFurni from '../../assets/icon/logo.svg'
import { ReferalCode } from '../ReferalCode/ReferalCode'

import iconArrowRight from '../../assets/icon/common/arrow-right-gray.svg'


interface IHeaderProps {
    setIsLogin(item: any): void
}

export const Header: React.FC<IHeaderProps> = ({ setIsLogin }) => {

    return (
        <header className={style.header}>
            {/* <a href="/" className={style.header__link}> */}
            <img src={logoFurni} alt="logo" className={style.header__icon} />
            {/* </a> */}
            <ReferalCode
                icon={iconArrowRight}
                borderForCode={style.borderForCode}
                bgColorArrow={style.bgColorArrow}
                titleReferalCode={'your referral code'}
                marginTop={style.marginTop}
                sizeCode={style.sizeCode}
                alignItems={style.alignItems}
            />
            <span onClick={() => setIsLogin((prev: boolean) => prev = false)} className={style.header__logOut}>
                Log out
            </span>
        </header>
    )
}