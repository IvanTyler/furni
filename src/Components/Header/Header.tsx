import style from './Header.module.scss'
import logoFurni from '../../assets/icon/logo.svg'
import { ReferalCode } from '../ReferalCode/ReferalCode'

import iconArrowRight from '../../assets/icon/common/arrow-right-gray.svg'
import { SocialMedia } from '../SocialMedia/SocialMedia'
import { useState } from 'react'

interface IHeaderProps {
    setIsLogin(item: any): void
}

export const Header: React.FC<IHeaderProps> = ({ setIsLogin }) => {

    const [isShowSocialMedia, setIsSocialMedia] = useState(false)
    const code = '9462865'

    return (
        <header className={style.header}>
            {/* <a href="/" className={style.header__link}> */}
            <img src={logoFurni} alt="logo" className={style.header__icon} />
            {/* </a> */}
            <div className={style.contentReferalCode}>
                <div className={style.wrapperReferalCode}
                    onClick={() => setIsSocialMedia((prev: any) => prev = !prev)}
                >
                    <ReferalCode
                        icon={iconArrowRight}
                        borderForCode={style.borderForCode}
                        bgColorArrow={style.bgColorArrow}
                        titleReferalCode={'your referral code'}
                        sizeCode={style.sizeCode}
                        alignItems={style.alignItems}
                        referalCode={style.referalCode}
                        code={code}
                    />
                </div>
                {isShowSocialMedia && <SocialMedia code={code} />}
            </div>
            <span onClick={() => setIsLogin((prev: boolean) => prev = false)} className={style.header__logOut}>
                Log out
            </span>
        </header>
    )
}