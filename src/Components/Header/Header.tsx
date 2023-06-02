import style from './Header.module.scss'
import logoFurni from '../../assets/icon/logo.svg'
import { ReferalCode } from '../ReferalCode/ReferalCode'

import iconArrowRight from '../../assets/icon/common/arrow-right-gray.svg'
import { SocialMedia } from '../SocialMedia/SocialMedia'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppDispath } from '../../Hooks/useTypeSelector'
import { setAuth } from '../../Redux/Reducers/SliceReducers'

interface IHeaderProps {
    setIsLogin(item: any): void
}

export const Header: React.FC = () => {
    const dispath = useAppDispath()

    function logOut() {
        localStorage.removeItem('token')
        dispath(setAuth(false))
    }

    const navigate = useNavigate()

    const [isShowSocialMedia, setIsSocialMedia] = useState(false)
    const code = '9462865'

    const documentBody = document
    documentBody.addEventListener('click', (e) => setIsSocialMedia((prev: any) => prev = false))

    return (
        <header className={style.header}>
            {/* <a href="/" className={style.header__link}> */}
            <img src={logoFurni} alt="logo" className={style.header__icon} />
            {/* </a> */}
            <div className={style.contentReferalCode}>
                <div className={style.wrapperReferalCode}
                    onClick={(e) => {
                        setIsSocialMedia((prev: any) => prev = !prev)
                        e.stopPropagation()
                    }}
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
            <span className={style.header__logOut} onClick={() => logOut()}>
                Log out
            </span>
        </header>
    )
}