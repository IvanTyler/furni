import style from './ReferalCode.module.scss'
import cx from 'classnames'

interface IReferalCode {
    icon: string;
    borderForCode: string;
    bgColorArrow: string;
    titleReferalCode?: string;
    sizeCode?: string;
    marginTop?: string;
    alignItems?: string;
}

export const ReferalCode: React.FC<IReferalCode> = (
    {
        icon,
        borderForCode,
        bgColorArrow,
        titleReferalCode,
        sizeCode,
        marginTop,
        alignItems,
    }
) => {
    return (
        <div className={marginTop ? cx(style.referalCode, marginTop) : style.referalCode}>
            <div className={
                borderForCode || alignItems ?
                    cx(style.referalCode__codeWrapper, borderForCode, alignItems) :
                    style.referalCode__codeWrapper
            }>
                {
                    titleReferalCode ?
                        <span className={style.referalCode__title}>
                            {titleReferalCode}
                        </span> :
                        null
                }
                <span className={
                    sizeCode ?
                        cx(style.referalCode__code, sizeCode) :
                        style.referalCode__code
                }>
                    9462865
                </span>
            </div>
            <div className={
                bgColorArrow ?
                    cx(style.referalCode__arrow, bgColorArrow) :
                    style.referalCode__arrow
            }>
                <img className={icon} src={icon} alt="" />
            </div>
        </div>
    )
}