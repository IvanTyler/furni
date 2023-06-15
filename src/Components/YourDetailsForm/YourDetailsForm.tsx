import arrowBackIcon from '../../assets/icon/common/arrow-back.svg'
import style from './YourDetailsForm.module.scss'
import { Link } from "react-router-dom"
import FormUserLogin from '../FormUserLogin/FormUserLogin'

export const YourDetailsForm: React.FC = () => {

    return (
        <div>
            <Link className={style.yourDetailsForm__link} to='/letsGetStartedRegistr'>
                <img className={style.yourDetailsForm__backIcon} src={arrowBackIcon} alt="" />
            </Link>
            {/* <FormUserLogin
                title={'Your details'}
                isShowElement={false}
                textButton={'Create account'}
                isShowTextHaveReferralCode={true}
            /> */}
        </div>
    )
}