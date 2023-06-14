import { FormUserLogin } from "../FormUserLogin/FormUserLogin"
import arrowBackIcon from '../../assets/icon/common/arrow-back.svg'
import style from './YourDetailsForm.module.scss'
import { Link } from "react-router-dom"
import { useState } from "react"

export const YourDetailsForm: React.FC = () => {

    return (
        <div>
            <Link className={style.yourDetailsForm__link} to='/letsGetStartedRegistr'>
                <img className={style.yourDetailsForm__backIcon} src={arrowBackIcon} alt="" />
            </Link>
            <FormUserLogin
                title={'Your details'}
                isShowElement={false}
                isShowInputFullName={true}
                isShowInputPhoneNumber={true}
                textButton={'Create account'}
                isShowTextHaveReferralCode={true}
                isShowInputReferalCode={false}
            />
        </div>
    )
}