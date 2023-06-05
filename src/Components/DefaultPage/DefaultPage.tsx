import style from './DefaultPage.module.scss'

import iconArrowRight from '../../assets/icon/common/arrow-right.svg'
import imgOverview from '../../assets/images/overview.png'
import { ReferalCode } from '../ReferalCode/ReferalCode';
import { useDispatch } from 'react-redux';
import { codeCopiedAction } from '../../Redux/Actions/ActionCodeCopied';
import { useEffect, useState } from 'react';
import { copyReferalCodeMobile } from '../../assets/Functions/copyReferalCodeMobile';
import { useTypeSelector } from '../../Hooks/useTypeSelector';

interface IDefaultPageProps {
    img: string;
}

export const DefaultPage: React.FC<IDefaultPageProps> = ({ img }) => {
    const { referal_code } = useTypeSelector(state => state.data)

    const getReferalCodeLocalStorage = localStorage.getItem('lead_id')

    const dispath = useDispatch<any>()

    const [dimensionWindowbrowser, setdimensionWindowbrowser] = useState<number>(window.innerWidth)

    useEffect(() => {
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    const handleResize = () => setdimensionWindowbrowser((prev: number) => prev = window.innerWidth)

    const copyReferalCode = () => {
        if (dimensionWindowbrowser > 400) {
            navigator.clipboard.writeText(referal_code.toString())
            dispath(codeCopiedAction())
        } else {
            copyReferalCodeMobile(referal_code.toString())
        }
    }

    return (
        <section className={style.sectionDefaultPage}>
            <h2 className={style.sectionDefaultPage__title}>
                Welcome to Furni!
            </h2>
            <h3 className={style.sectionDefaultPage__subTitle}>
                To start earning with us invite new clients and
                partners using your Referral code:
            </h3>
            <div className={style.sectionDefaultPage__copyCode} onClick={() => copyReferalCode()}>
                <ReferalCode
                    icon={iconArrowRight}
                    borderForCode={style.borderForCode}
                    bgColorArrow={style.bgColorArrow}
                    code={
                        getReferalCodeLocalStorage !== null ?
                            getReferalCodeLocalStorage :
                            referal_code
                    }
                />
            </div>
            <img className={style.sectionDefaultPage__contentImg}
                src={img ? img : imgOverview}
                alt=""
            />
            <div className={style.sectionDefaultPage__contactInformation}>
                Need to ask something? Text us to <a href="mailto:partners@furni.ae"
                    className={style.sectionDefaultPage__mail}>
                    partners@furni.ae
                </a> or call <a href="tel:+97143102096" className={style.sectionDefaultPage__phone}>+971-431-02096</a>
            </div>
        </section>
    )
}

