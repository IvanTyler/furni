import style from './FormUserLogin.module.scss'
import logoFurni from '../../assets/icon/logo.svg'
import { Input } from '../Input/Input'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { IDataApi } from '../../Interfaces/DataApi'
import { Link } from 'react-router-dom'
import cx from 'classnames'
import { useDispatch } from 'react-redux'
import { getDataSuccess } from '../../Redux/Actions/ActionGetDataSuccess'

interface IFormUserLoginProps {
    setGetData(data: IDataApi): void;
    setIsLoading(item: any): void;
    isShowElement: boolean;
}

export const FormUserLogin: React.FC<IFormUserLoginProps> = (
    { setGetData, setIsLoading, isShowElement }
) => {

    const dispath = useDispatch<any>()

    const [toggleTypeInput, setToggleTypeInput] = useState(false)

    const [errorInputLoginValue, setErrorInputLoginValue] = useState(false)
    const [errorInputPasswordValue, setErrorInputPasswordValue] = useState(false)
    const [errorInputFirstName, setErrorInputFirstName] = useState(false)
    const [errorInputLastName, setErrorInputLastName] = useState(false)
    const [errorInputPhone, setErrorInputPhone] = useState(false)
    const [errorInputEmail, setErrorInputEmail] = useState(false)


    const [inputValueLogin, setInputValueLogin] = useState('')
    const [inputValuePassword, setInputValuePassword] = useState('')
    const [inputValueFirstName, setInputValueFirstName] = useState('')
    const [inputValueLastName, setInputValueLastName] = useState('')
    const [inputValuePhone, setInputValuePhone] = useState('')
    const [inputValueEmail, setInputValueEmail] = useState('')


    const fetchData = async () => {
        setIsLoading(true)
        const response = await axios.post<IDataApi>(
            'https://partnerinfo.furni.ae/api/partner/stats',
            { login: inputValueLogin, password: inputValuePassword })
            .then(response => setGetData(response.data))
            .catch(error => console.log(error))
            .finally(() => setIsLoading(false))
        dispath(getDataSuccess(inputValueLogin, inputValuePassword))
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

    const inputChangeFirstName = (event: React.ChangeEvent<HTMLInputElement>) => {
        sliceInputText(event)
        setInputValueFirstName(event.target.value)
    }

    const inputChangeLastName = (event: React.ChangeEvent<HTMLInputElement>) => {
        sliceInputText(event)
        setInputValueLastName(event.target.value)
    }

    const inputChangePhone = (event: React.ChangeEvent<HTMLInputElement>) => {
        sliceInputText(event)
        setInputValuePhone(event.target.value)
    }

    const inputChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
        sliceInputText(event)
        setInputValueEmail(event.target.value)
    }

    const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        // if (inputValueFirstName.trim().length === 0 ||
        //     inputValueLastName.trim().length === 0 ||
        //     inputValuePhone.trim().length === 0 ||
        //     inputValueEmail.trim().length === 0) {
        //     setErrorInputFirstName(prev => prev = true)
        //     setErrorInputLastName(prev => prev = true)
        //     setErrorInputPhone(prev => prev = true)
        //     setErrorInputEmail(prev => prev = true)
        // } else {
        //     setErrorInputFirstName(prev => prev = false)
        //     setErrorInputLastName(prev => prev = false)
        //     setErrorInputPhone(prev => prev = false)
        //     setErrorInputEmail(prev => prev = false)
        // }

        if (inputValueLogin.trim().length === 0 || inputValueLogin.toLowerCase() !== 'demo') {
            setErrorInputLoginValue(prev => prev = true)
        } else {
            setErrorInputLoginValue(prev => prev = false)
        }

        if (inputValuePassword.trim().length < 8 || inputValuePassword.toLowerCase() !== 'demodemo') {
            setErrorInputPasswordValue(prev => prev = true)
        } else {
            setErrorInputPasswordValue(prev => prev = false)
        }

        if (inputValueLogin.trim().length >= 1
            && inputValuePassword.trim().length >= 8
            && inputValueLogin.toLowerCase() === 'demo'
            && inputValuePassword.toLowerCase() === 'demodemo'
        ) {
            setErrorInputLoginValue(prev => prev = false)
            setErrorInputPasswordValue(prev => prev = false)
            fetchData()
            setInputValueLogin('')
            setInputValuePassword('')
        }
    }

    return (
        <form onSubmit={submitHandler} action="" className={style.formUserLogin}>
            <img src={logoFurni} alt="logo furni" />
            <h1 className={style.formUserLogin__title}>
                Login to your
                partner’s account
            </h1>
            {isShowElement && <Input
                type='text'
                name='Email'
                placeholder='Email'
                valueInput={inputValueEmail}
                error={errorInputEmail}
                onChangeInput={inputChangeEmail}
            />}
            {isShowElement && <div className={style.formUserLogin__inputWrapper}>
                <Input
                    type='text'
                    name='name'
                    placeholder='First name'
                    valueInput={inputValueFirstName}
                    error={errorInputFirstName}
                    onChangeInput={inputChangeFirstName}
                />
            </div>}
            {isShowElement && <div className={style.formUserLogin__inputWrapper}>
                <Input
                    type='text'
                    name='name'
                    placeholder='Last name'
                    valueInput={inputValueLastName}
                    error={errorInputLastName}
                    onChangeInput={inputChangeLastName}
                />
            </div>}
            {isShowElement && <div className={style.formUserLogin__inputWrapper}>
                <Input
                    type='phone'
                    name='name'
                    placeholder='Phone number'
                    valueInput={inputValuePhone}
                    error={errorInputPhone}
                    onChangeInput={inputChangePhone}
                />
            </div>}
            <div className={style.formUserLogin__inputWrapper}>
                <Input
                    type='text'
                    name='name'
                    placeholder='Username'
                    valueInput={inputValueLogin}
                    error={errorInputLoginValue}
                    onChangeInput={inputChangeLoginValue}
                />
            </div>
            <div className={style.formUserLogin__inputWrapper}>
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
            </div>
            <button className={style.formUserLogin__submit}>
                {isShowElement ? 'Create account' : 'Login'}
            </button>

            <div className={isShowElement ?
                cx(style.formUserLogin__signature, style.alreadyAccount) :
                style.formUserLogin__signature
            }>
                {isShowElement ?
                    <span>
                        Already have an account?&nbsp;
                        <Link className={style.formUserLogin__link} to='/logIn'>Log In</Link>
                    </span>
                    :
                    <span> Forgot password? Call us <a href="tel:+97143102096">+971-431-02096</a>
                        &nbsp; Don’t have an account? <span className={style.formUserLogin__registr}></span> Register
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
    )
}