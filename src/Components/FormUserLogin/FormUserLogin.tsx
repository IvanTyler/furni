import arrowBackIcon from '../../assets/icon/common/arrow-back.svg'
import style from './FormUserLogin.module.scss'
import styleInput from '../Input/Input.module.scss'

import logoFurni from '../../assets/icon/logo.svg'
import { Input } from '../Input/Input'
import React, { useEffect, useRef, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import cx from 'classnames'
import { dataAction } from '../../Redux/Actions/dataAction'
import { useTypeSelector } from '../../Hooks/useTypeSelector'
import { dataActionUsers } from '../../Redux/Actions/dataActionRegistration'
import { useAppDispatch } from '../../Redux/Store/Store'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

interface IFormUserLoginProps {
    isShowElement: boolean;
    alreadyHaveAnAccount: boolean;
    isShowInput?: boolean;
    isShowInputPartnerID?: boolean;
    isShowInputPassword?: boolean;
    isShowInputEmail?: boolean;
    isShowInputFullName?: boolean;
    isShowInputPhoneNumber?: boolean;
    isShowTextReferalCode?: boolean
}

function FormUserLogin(
    {
        isShowElement,
        isShowInputPartnerID,
        isShowInputPassword,
        isShowInputEmail,
        alreadyHaveAnAccount,
        isShowInputFullName,
        isShowInputPhoneNumber,
        isShowTextReferalCode,
    }: IFormUserLoginProps
) {


    const dispath = useAppDispatch()
    const location = useLocation();
    const navigate = useNavigate()
    const [value, setValue] = useState<any>()

    const { isLoadingAuth, error } = useTypeSelector(state => state.data)
    const { responseMessageError } = useTypeSelector(state => state.dataUsers)


    const [isShowRegistrationElements, setIsShowRegistrationElements] = useState(false)
    const [isShowReferalCode, setIsShowReferalCode] = useState(false)
    const [isShowReferalCodeText, setIsShowReferalCodeText] = useState(false)

    const [formValidationErrorMessage, setFormValidationErrorMessage] = useState('')
    const [isFormValidationError, setIsFormValidationError] = useState(false)

    const [toggleTypeInput, setToggleTypeInput] = useState(false)

    const [errorInputLoginValue, setErrorInputLoginValue] = useState(false)
    const [errorInputPasswordValue, setErrorInputPasswordValue] = useState(false)
    const [errorInputFullName, setErrorInputFullName] = useState(false)
    const [errorInputLastName, setErrorInputLastName] = useState(false)
    const [errorInputPhone, setErrorInputPhone] = useState(false)
    const [errorInputEmail, setErrorInputEmail] = useState(false)
    const [errorInputPartnerId, setErrorInputPartnerId] = useState(false)
    const [errorInputReferalCode, setErrorInputReferalCode] = useState(false)

    const [inputValueLogin, setInputValueLogin] = useState('')
    const [inputValuePassword, setInputValuePassword] = useState('')
    const [inputValueFullName, setInputValueFullName] = useState('')
    const [inputValueLastName, setInputValueLastName] = useState('')
    const [inputValuePhone, setInputValuePhone] = useState('')
    const [inputValueEmail, setInputValueEmail] = useState('')
    const [inputValuePartnerId, setInputValuePartnerId] = useState('')
    const [inputValueReferalCode, setInputValueReferalCode] = useState('')

    useEffect(() => {

        if (isLoadingAuth) {
            navigate("/content");
        }
        if (error === 'Ошибка, данных нет') {
            setFormValidationErrorMessage('Incorrect Partner ID / email or password')
            setErrorInputPasswordValue(true)
            setErrorInputPartnerId(true)
        }

        if (responseMessageError === 'duplicate entry') {
            setFormValidationErrorMessage(`This email is already connected to an account. Login to your account`)
            setErrorInputEmail(true)
            setIsShowRegistrationElements(false)
            setIsShowReferalCode(false)
            setIsShowReferalCodeText(false)
        }
        // if (responseMessageError === 'couldn\'t find invited lead') {
        //     setFormValidationErrorMessage('This referral code doesn’t exist. Check the code and try again')
        //     setErrorInputReferalCode(true)
        // }
    }, [isLoadingAuth, responseMessageError, location])


    const fetchDataAuth = async () => {
        await dispath(dataAction(inputValuePartnerId, inputValuePassword))
    }

    const fetchDataRegistration = () => {
        dispath(
            dataActionUsers(
                inputValueEmail,
                inputValuePassword,
                inputValueFullName,
                inputValuePhone,
                +inputValueReferalCode
            ))
    }

    const toggleInputTypeFunc = () => {
        if (inputValuePassword.trim().length >= 1) setToggleTypeInput(prev => !prev)
    }

    function sliceInputText(text: React.ChangeEvent<HTMLInputElement>) {
        if (text.target.value.length > 30) text.target.value = text.target.value.slice(0, 30);
    }

    const inputChangeLoginValue = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.value.length > 50) event.target.value = event.target.value.slice(0, 50);
        setInputValueLogin(event.target.value)
    }

    const inputChangePasswordValue = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.value.length > 30) event.target.value = event.target.value.slice(0, 30);
        setInputValuePassword(event.target.value)
    }

    const inputChangeFullName = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.value.length > 50) event.target.value = event.target.value.slice(0, 50);
        if (event.target.value.length >= 50) {
            setErrorInputFullName(true)
            setFormValidationErrorMessage('Full name must be up to 50 characters')
        } else {
            setErrorInputFullName(false)
        }

        setInputValueFullName(event.target.value)
    }

    const inputChangeLastName = (event: React.ChangeEvent<HTMLInputElement>) => {
        sliceInputText(event)
        setInputValueLastName(event.target.value)
    }

    const inputChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
        sliceInputText(event)
        setInputValueEmail(event.target.value)
    }

    const inputChangePartnerId = (event: React.ChangeEvent<HTMLInputElement>) => {
        sliceInputText(event)
        setInputValuePartnerId(event.target.value)
    }

    const inputChangeReferalCode = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.value.length > 8) event.target.value = event.target.value.slice(0, 8);
        setInputValueReferalCode(event.target.value)
    }

    const submitHandlerLetsGetStartedForm = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        if (inputValueFullName.trim().length === 0) {
            setErrorInputFullName(true)
            setFormValidationErrorMessage('Enter fullName')
        } else {
            setErrorInputFullName(false)
        }

        if (inputValuePhone.trim().length < 12) {
            setErrorInputPhone(true)
            setFormValidationErrorMessage('Enter phone number')
        } else {
            setErrorInputPhone(false)
        }

        if (inputValueEmail.trim().length === 0) {
            setErrorInputEmail(true)
            setFormValidationErrorMessage('Enter email')
        } else {
            setErrorInputEmail(false)
        }

        if (inputValuePassword.trim().length < 8) {
            setErrorInputPasswordValue(true)
            setFormValidationErrorMessage('The password should contain at least 8 symbols')
        } else {
            setErrorInputPasswordValue(false)
        }

        if (inputValueFullName.trim().length === 0
            && inputValuePhone.trim().length < 12
        ) {
            setFormValidationErrorMessage('Enter required fields')
        }

        if (inputValueEmail.trim().length === 0 &&
            inputValuePassword.trim().length < 8
        ) {
            setFormValidationErrorMessage('Enter required fields')
        }

        if (inputValueEmail.trim().length >= 1
            && inputValuePassword.trim().length >= 8
            && inputValueFullName.trim().length >= 1
            && inputValuePhone.trim().length >= 12
        ) {
            setErrorInputEmail(false)
            setErrorInputPasswordValue(false)
            setErrorInputFullName(false)
            setErrorInputPasswordValue(false)

            setIsShowReferalCodeText(true)
            setIsFormValidationError(false)
            setErrorInputReferalCode(false)
            setInputValueReferalCode('')
            fetchDataRegistration()
        }
    }


    const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        if (inputValuePartnerId.trim().length === 0) {
            setErrorInputPartnerId(true)
            setFormValidationErrorMessage('Incorrect Partner ID')
        } else {
            setErrorInputPartnerId(false)
        }

        if (inputValuePassword.trim().length < 8) {
            setFormValidationErrorMessage('The password is too short')
            setErrorInputPasswordValue(true)
        } else {
            setErrorInputPasswordValue(false)
        }

        if (inputValuePartnerId.trim().length === 0 &&
            inputValuePassword.trim().length < 8
        ) {
            setFormValidationErrorMessage('Enter required fields')
        }

        if (inputValuePartnerId.trim().length >= 1
            && inputValuePassword.trim().length >= 8
        ) {
            setErrorInputPartnerId(false)
            setErrorInputPasswordValue(false)
            setIsFormValidationError(false)
            setErrorInputEmail(false)
            setErrorInputReferalCode(false)
            fetchDataAuth()
        }
    }

    return (
        <>
            <form onSubmit={
                !isShowRegistrationElements && window.location.pathname === '/registration' ? submitHandlerLetsGetStartedForm :
                    window.location.pathname === '/login' || window.location.pathname === '/logIn' ? submitHandler :
                        submitHandler
            } action="" className={style.formUserLogin}>
                {
                    errorInputEmail ||
                        errorInputPasswordValue ||
                        errorInputPartnerId ||
                        errorInputFullName ||
                        errorInputPhone ||
                        errorInputReferalCode ?
                        <span className={style.formUserLogin__messageErrorEnterRequiredFields}>
                            {formValidationErrorMessage}
                        </span>
                        : null
                }
                <img src={logoFurni} alt="logo furni" />
                <h1 className={style.formUserLogin__title}>
                    {
                        window.location.pathname === '/registration' ? 'Let’s get started' :
                            window.location.pathname === '/login' || window.location.pathname === '/logIn' ? 'Login to your partner’s account' :
                                null
                    }
                </h1>
                {isShowInputPartnerID && <div className={style.formUserLogin__inputWrapper}>
                    <Input
                        type='text'
                        name='PartnerID'
                        placeholder='Partner ID or email'
                        valueInput={inputValuePartnerId}
                        error={errorInputPartnerId}
                        onChangeInput={inputChangePartnerId}
                    />
                </div>}
                {isShowInputEmail && <div className={style.formUserLogin__inputWrapper}>
                    <Input
                        type='email'
                        name='email'
                        placeholder='Email'
                        valueInput={inputValueEmail}
                        error={errorInputEmail}
                        onChangeInput={inputChangeEmail}
                    />
                </div>}
                {isShowInputPassword && <div className={style.formUserLogin__inputWrapper}>
                    <Input
                        type={toggleTypeInput ? 'text' : 'password'}
                        name='password'
                        placeholder='Password'
                        valueInput={inputValuePassword}
                        error={errorInputPasswordValue}
                        onChangeInput={inputChangePasswordValue}
                    />
                    <span onClick={() => toggleInputTypeFunc()} className={style.formUserLogin__toggleTypeInput}>
                        {toggleTypeInput ? 'Hide' : 'Show'}
                    </span>
                </div>}
                {isShowInputFullName && <div className={style.formUserLogin__inputWrapper}>
                    <Input
                        type='text'
                        name='fullName'
                        placeholder='Full name'
                        valueInput={inputValueFullName}
                        error={errorInputFullName}
                        onChangeInput={inputChangeFullName}
                    />
                </div>}

                {isShowInputPhoneNumber && <div className={style.formUserLogin__inputWrapper}>
                    <PhoneInput
                        containerClass={
                            errorInputPhone ?
                                cx(styleInput.input, styleInput.error) :
                                styleInput.input
                        }
                        inputClass={style.customReactTelInput}
                        buttonClass={style.flagDropdown}
                        country="ae"
                        value={inputValuePhone}
                        onChange={setInputValuePhone}
                        countryCodeEditable={false}
                        enableSearch={true}
                    />
                </div>}

                {isShowElement && <div className={style.formUserLogin__inputWrapper}>
                    <Input
                        type='text'
                        name='lastName'
                        placeholder='Last name'
                        valueInput={inputValueLastName}
                        error={errorInputLastName}
                        onChangeInput={inputChangeLastName}
                    />
                </div>}

                {isShowReferalCode && <div className={style.formUserLogin__inputWrapper}>
                    <Input
                        type='number'
                        name='number'
                        placeholder='Referral code (optional)'
                        valueInput={inputValueReferalCode}
                        error={errorInputReferalCode}
                        onChangeInput={inputChangeReferalCode}
                    />
                </div>}
                {isShowElement && <div className={style.formUserLogin__inputWrapper}>
                    <Input
                        type='text'
                        name='username'
                        placeholder='Username'
                        valueInput={inputValueLogin}
                        error={errorInputLoginValue}
                        onChangeInput={inputChangeLoginValue}
                    />
                </div>}

                {!isShowReferalCode && isShowTextReferalCode &&
                    <span
                        onClick={() => {
                            setIsShowReferalCode(true)
                            setIsShowReferalCodeText(false)
                        }}
                        className={style.formUserLogin__haveReferralCode}
                    >
                        I have a referral code
                    </span>}
                <button className={style.formUserLogin__submit}>
                    {
                        window.location.pathname === '/registration' ? 'Create account' :
                            'Login'
                    }
                </button>

                <div className={isShowElement ?
                    cx(style.formUserLogin__signature, style.alreadyAccount) :
                    style.formUserLogin__signature
                }>
                    {
                        alreadyHaveAnAccount ?
                            <span>
                                Already have an account?&nbsp;
                                <Link className={style.formUserLogin__link} to='/login'>LogIn</Link>
                            </span> :
                            <span> Forgot password? Call us <a href="tel:+97143102096">+971-431-02096</a>
                                &nbsp; Don’t have an account? <Link className={style.formUserLogin__link} to='/registration'>Register</Link>
                            </span>
                    }
                </div>


            </form>
        </>

    )
}

export default React.memo(FormUserLogin)