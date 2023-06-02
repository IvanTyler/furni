import { useRef } from 'react';
import style from './ReferalCode.module.scss'
import cx from 'classnames'

interface IReferalCodeProps {
    icon: string;
    borderForCode: string;
    bgColorArrow: string;
    titleReferalCode?: string;
    sizeCode?: string;
    alignItems?: string;
    referalCode?: string;
    code?: number;
}

export const ReferalCode: React.FC<IReferalCodeProps> = (
    {
        icon,
        borderForCode,
        bgColorArrow,
        titleReferalCode,
        sizeCode,
        alignItems,
        referalCode,
        code
    }
) => {


    return (
        <div
            className={referalCode ? cx(style.referalCode, referalCode) : style.referalCode}
        >
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
                <span
                    className={
                        sizeCode ?
                            cx(style.referalCode__code, sizeCode) :
                            style.referalCode__code
                    }>
                    {code}
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