import arrowBackIcon from '../../assets/icon/common/arrow-back.svg'
import style from './FormUserLogin.module.scss'
import logoFurni from '../../assets/icon/logo.svg'
import { Input } from '../Input/Input'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import cx from 'classnames'
import { useDispatch } from 'react-redux'
import { dataAction } from '../../Redux/Actions/dataAction'
import { useTypeSelector } from '../../Hooks/useTypeSelector'
import { dataActionUsers } from '../../Redux/Actions/dataActionRegistration'

interface IFormUserLoginProps {
    isShowElement: boolean;
    isShowInput?: boolean;
    isShowInputPartnerID?: boolean;
    isShowInputPassword?: boolean;
    isShowInputEmail?: boolean;
    isShowTextHaveReferralCode?: boolean;
    isShowInputReferalCode?: boolean;
}

function FormUserLogin(
    {
        isShowElement,
        isShowInputPartnerID,
        isShowInputPassword,
        isShowInputEmail,
        isShowTextHaveReferralCode,
        isShowInputReferalCode,
    }: IFormUserLoginProps
) {

    const dispath = useDispatch<any>()

    const navigate = useNavigate()

    const { isLoadingAuth } = useTypeSelector(state => state.data)


    useEffect(() => {
        if (isLoadingAuth) navigate("/content");
    }, [isLoadingAuth])


    const [isShowTextHaveReferralCodeState, setIsShowTexthaveReferralCodeState] = useState(isShowTextHaveReferralCode)
    const [isShowInputReferalCodeState, setIsShowInputReferalState] = useState(isShowInputReferalCode)

    const [isShowRegistrationElements, setIsShowRegistrationElements] = useState(false)
    const [isShowReferalCode, setIsShowReferalCode] = useState(false)
    const [isShowReferalCodeText, setIsShowReferalCodeText] = useState(false)


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


    const fetchDataAuth = async () => {
        await dispath(dataAction(inputValuePartnerId, inputValuePassword))
    }

    const fetchDataRegistration = async () => {
        await dispath(
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
        if (event.target.value.length > 30) event.target.value = event.target.value.slice(0, 30);
        setInputValueLogin(event.target.value)
    }

    const inputChangePasswordValue = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.value.length > 30) event.target.value = event.target.value.slice(0, 30);
        setInputValuePassword(event.target.value)
    }

    const inputChangeFullName = (event: React.ChangeEvent<HTMLInputElement>) => {
        sliceInputText(event)
        setInputValueFullName(event.target.value)
    }

    const inputChangeLastName = (event: React.ChangeEvent<HTMLInputElement>) => {
        sliceInputText(event)
        setInputValueLastName(event.target.value)
    }

    const inputChangePhone = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.value.length > 12) event.target.value = event.target.value.slice(0, 12);
        setInputValuePhone(event.target.value)
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

    const submitHandlerYourDetailsFormRegistrForm = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        inputValueFullName.trim().length === 0 ?
            setErrorInputFullName(prev => prev = true) :
            setErrorInputFullName(prev => prev = false)

        inputValuePhone.trim().length < 12 ?
            setErrorInputPhone(prev => prev = true) :
            setErrorInputPhone(prev => prev = false)

        if (inputValueFullName.trim().length >= 1
            && inputValuePhone.trim().length >= 12
        ) {
            setErrorInputFullName(prev => prev = false)
            setErrorInputPasswordValue(prev => prev = false)
            setInputValueFullName('')
            setInputValuePhone('')
            setInputValueReferalCode('')
            setInputValuePassword('')
            setInputValueEmail('')
            fetchDataRegistration()
        }
    }

    const submitHandlerLetsGetStartedForm = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        inputValueEmail.trim().length === 0 ?
            setErrorInputEmail(prev => prev = true) :
            setErrorInputEmail(prev => prev = false)

        inputValuePassword.trim().length < 8 ?
            setErrorInputPasswordValue(prev => prev = true) :
            setErrorInputPasswordValue(prev => prev = false)

        if (inputValueEmail.trim().length >= 1
            && inputValuePassword.trim().length >= 8
        ) {
            setErrorInputEmail(prev => prev = false)
            setErrorInputPasswordValue(prev => prev = false)
            setIsShowRegistrationElements(true)
            setIsShowReferalCodeText(true)
        }
    }

    const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        inputValuePartnerId.trim().length === 0 ?
            setErrorInputPartnerId(prev => prev = true) :
            setErrorInputPartnerId(prev => prev = false)

        inputValuePassword.trim().length < 8 ?
            setErrorInputPasswordValue(prev => prev = true) :
            setErrorInputPasswordValue(prev => prev = false)

        if (inputValuePartnerId.trim().length >= 1
            && inputValuePassword.trim().length >= 8
        ) {
            setErrorInputPartnerId(prev => prev = false)
            setErrorInputPasswordValue(prev => prev = false)
            fetchDataAuth()
            setInputValuePartnerId('')
            setInputValuePassword('')
        }
    }

    return (
        <>
            {
                isShowRegistrationElements &&
                <img onClick={() => {
                    setIsShowRegistrationElements(false)
                    setIsShowReferalCode(false)
                }}
                    className={style.backIcon} src={arrowBackIcon} alt="back" />
            }
            <form onSubmit={
                isShowRegistrationElements ? submitHandlerYourDetailsFormRegistrForm :
                    !isShowRegistrationElements ? submitHandlerLetsGetStartedForm :
                        submitHandler
            } action="" className={style.formUserLogin}>
                <img src={logoFurni} alt="logo furni" />
                <h1 className={style.formUserLogin__title}>
                    {
                        isShowRegistrationElements ? 'Your details' :
                            !isShowRegistrationElements ? 'Let’s get started' :
                                'Login to your partner’s account'
                    }
                </h1>
                {isShowInputPartnerID && <div className={style.formUserLogin__inputWrapper}>
                    <Input
                        type='text'
                        name='PartnerID'
                        placeholder='Partner ID'
                        valueInput={inputValuePartnerId}
                        error={errorInputPartnerId}
                        onChangeInput={inputChangePartnerId}
                    />
                </div>}
                {isShowInputEmail && !isShowRegistrationElements && <div className={style.formUserLogin__inputWrapper}>
                    <Input
                        type='email'
                        name='email'
                        placeholder='Email'
                        valueInput={inputValueEmail}
                        error={errorInputEmail}
                        onChangeInput={inputChangeEmail}
                    />
                </div>}
                {isShowInputPassword && !isShowRegistrationElements && <div className={style.formUserLogin__inputWrapper}>
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
                {isShowRegistrationElements && <div className={style.formUserLogin__inputWrapper}>
                    <Input
                        type='text'
                        name='fullName'
                        placeholder='Full name'
                        valueInput={inputValueFullName}
                        error={errorInputFullName}
                        onChangeInput={inputChangeFullName}
                    />
                </div>}
                {isShowRegistrationElements && <div className={style.formUserLogin__inputWrapper}>
                    <Input
                        type='tel'
                        name='phoneNumber'
                        placeholder='Phone number'
                        valueInput={inputValuePhone}
                        error={errorInputPhone}
                        onChangeInput={inputChangePhone}
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
                        placeholder='Referral code'
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

                {isShowReferalCodeText &&
                    <span
                        onClick={() => {
                            setIsShowReferalCode(true)
                            setIsShowReferalCodeText(false)
                        }}
                        className={style.formUserLogin__haveReferralCode}
                    >
                        I have referral code
                    </span>}
                <button className={style.formUserLogin__submit}>
                    {
                        isShowRegistrationElements ? 'Create account' :
                            !isShowRegistrationElements ? 'Continue' :
                                'Login'
                    }
                </button>

                <div className={isShowElement ?
                    cx(style.formUserLogin__signature, style.alreadyAccount) :
                    style.formUserLogin__signature
                }>
                    {isShowElement ?
                        <span>
                            Already have an account?&nbsp;
                            <Link className={style.formUserLogin__link} to='/logIn'>LogIn</Link>
                        </span>
                        :
                        <span> Forgot password? Call us <a href="tel:+97143102096">+971-431-02096</a>
                            {/* &nbsp; Don’t have an account? <span className={style.formUserLogin__registr}></span> Register */}
                        </span>
                    }
                </div>

                {
                    errorInputLoginValue || errorInputPasswordValue ?
                        <span className={style.formUserLogin__messageErrorEnterRequiredFields}>
                            Enter required fields
                        </span>
                        : null
                }
            </form>
        </>

    )
}

export default React.memo(FormUserLogin)