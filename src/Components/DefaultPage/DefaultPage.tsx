import style from './DefaultPage.module.scss'

import iconArrowRight from '../../assets/icon/common/arrow-right.svg'
import imgOverview from '../../assets/images/overview.png'
import { ReferalCode } from '../ReferalCode/ReferalCode';

interface IDefaultPageProps {
    img: string;
}

export const DefaultPage: React.FC<IDefaultPageProps> = ({ img }) => {
    return (
        <section className={style.sectionDefaultPage}>
            <h2 className={style.sectionDefaultPage__title}>
                Welcome to Furni!
            </h2>
            <h3 className={style.sectionDefaultPage__subTitle}>
                To start earning with us invite new clients and
                partners using your Referral code:
            </h3>
            <ReferalCode
                icon={iconArrowRight}
                borderForCode={style.borderForCode}
                bgColorArrow={style.bgColorArrow}
            />
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