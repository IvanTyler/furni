import style from './FormUserLogin.module.scss'
import logoFurni from '../../assets/icon/logo.svg'
import { Input } from '../Input/Input'
import React, { useState } from 'react'
import axios from 'axios'
import { IDataApi } from '../../Interfaces/DataApi'

interface IFormUserLoginProps {
    setIsLogin(item: any): void
    setGetData(data: IDataApi): void
    setIsLoading(item: any): void
}

export const FormUserLogin: React.FC<IFormUserLoginProps> = (
    { setIsLogin, setGetData, setIsLoading }
) => {

    const [toggleTypeInput, setToggleTypeInput] = useState(false)

    const [errorInputLoginValue, setErrorInputLoginValue] = useState(false)
    const [errorInputPasswordValue, setErrorInputPasswordValue] = useState(false)

    const [inputValueLogin, setInputValueLogin] = useState('')
    const [inputValuePassword, setInputValuePassword] = useState('')

    const fetchData = async () => {
        setIsLoading(true)
        const response = await axios.post<IDataApi>(
            'https://partnerinfo.furni.ae/api/partner/stats',
            { login: inputValueLogin, password: inputValuePassword })
            .then(response => setGetData(response.data))
            .catch(error => console.log(error))
            .finally(() => setIsLoading(false))
    }

    const toggleInputTypeFunc = () => {
        if (inputValuePassword.trim().length >= 1) setToggleTypeInput(prev => !prev)
    }

    const inputChangeLoginValue = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.value.length > 20) event.target.value = event.target.value.slice(0, 20);
        setInputValueLogin(event.target.value)
    }

    const inputChangePasswordValue = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.value.length > 30) event.target.value = event.target.value.slice(0, 30);
        setInputValuePassword(event.target.value)
    }

    const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        if (inputValueLogin.trim().length === 0) {
            setErrorInputLoginValue(prev => prev = true)
        } else {
            setErrorInputLoginValue(prev => prev = false)
        }

        if (inputValuePassword.trim().length < 8) {
            setErrorInputPasswordValue(prev => prev = true)
        } else {
            setErrorInputPasswordValue(prev => prev = false)
        }



        if (inputValueLogin.trim().length >= 1 && inputValuePassword.trim().length >= 8) {
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
            <Input
                type='text'
                name='name'
                placeholder='Username'
                valueInput={inputValueLogin}
                error={errorInputLoginValue}
                onChangeInput={inputChangeLoginValue}
            />
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
            <button className={style.formUserLogin__submit}>Login</button>

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