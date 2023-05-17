import style from './SocialMedia.module.scss'

import iconCopyCode from '../../assets/icon/common/copy-code.svg'
import iconFacebook from '../../assets/icon/social-media/facebook.svg'
import iconWhatsApp from '../../assets/icon/social-media/whatsApp.svg'
import iconTelergam from '../../assets/icon/social-media/telegram.svg'
import iconLinkedin from '../../assets/icon/social-media/Linkedin.svg'
import { useGetData } from '../../Hooks/useGetData'
import { useDispatch } from 'react-redux'
import { codeCopiedAction } from '../../Redux/Actions/ActionCodeCopied'


interface ISocialMediaProps {
    code?: any;
}

export const SocialMedia: React.FC<ISocialMediaProps> = ({ code }) => {
    const dispath = useDispatch<any>()

    const copyReferalCode = () => {
        navigator.clipboard.writeText(code)
        dispath(codeCopiedAction())

    }
    const { codeCopied } = useGetData()

    return (
        <>
            <ul className={style.socialMediaList}>
                <li className={style.socialMediaList__item}>
                    <h2 className={style.socialMediaList__title}>
                        Share your referral code
                    </h2>
                </li>
                <li onClick={() => copyReferalCode()} className={style.socialMediaList__item}>
                    <img src={iconCopyCode} alt="copy code" className={style.socialMediaList__icon} />
                    <span className={style.socialMediaList__name}>Copy code</span>
                </li>
                {/* <li className={style.socialMediaList__item}>
                    <a href="" className={style.socialMediaList__link}>
                        <img src={iconFacebook} alt="Share on Facebook" className={style.socialMediaList__icon} />
                        <span className={style.socialMediaList__name}>Share on Facebook</span>
                    </a>
                </li>
                <li className={style.socialMediaList__item}>
                    <a href="" className={style.socialMediaList__link}>
                        <img src={iconWhatsApp} alt="Share on WhatsApp" className={style.socialMediaList__icon} />
                        <span className={style.socialMediaList__name}>Share on WhatsApp</span>
                    </a>
                </li>
                <li className={style.socialMediaList__item}>
                    <a href="" className={style.socialMediaList__link}>
                        <img src={iconTelergam} alt="Share on Telegram" className={style.socialMediaList__icon} />
                        <span className={style.socialMediaList__name}>Share on Telegram</span>
                    </a>
                </li>
                <li className={style.socialMediaList__item}>
                    <a href="" className={style.socialMediaList__link}>
                        <img src={iconLinkedin} alt="Share on LinkedIn" className={style.socialMediaList__icon} />
                        <span className={style.socialMediaList__name}>Share on LinkedIn</span>
                    </a>
                </li> */}
            </ul>
        </>
    )
}