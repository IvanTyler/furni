import axios from "axios";
import { getData } from "../../MockData/MockData";
import {
    getDataFetchContacts,
    getDataFetchError,
    getDataFetchEvents,
    getDataFetchingSuccessToken,
    getDataFetchingToken,
    getDataLoadingContacts,
    getDataLoadingEvents,
    getReferalCode
} from "../Reducers/SliceReducers";
import { AppDispatch } from "../Store/Store";


export const dataAction = (email: string, password: string) => async (dispath: AppDispatch) => {
    try {
        dispath(getDataFetchingToken())

        let token = ''
        await axios.post<any>(
            'api/auth',
            { email, password })
            .then(response => {
                if (response.status !== 200) {
                    dispath(getDataFetchError('Ошибка, данных нет'))
                    return
                }
                token = response.data.token
                localStorage.setItem('token', JSON.stringify({
                    token: response.data.token
                }))
                localStorage.setItem('refresh_token', JSON.stringify({
                    refresh_token: response.data.refresh_token,
                }))
                dispath(getDataFetchingSuccessToken())

            })
            .catch(error => {
                dispath(getDataFetchError('Ошибка, данных нет'))
            })

    } catch (error) {
        dispath(getDataFetchError('Ошибка, данных нет'))
    }
}

export const dataActionContacts = () => async (dispath: AppDispatch) => {
    try {
        const getTokenSessionStorage = localStorage.getItem('token')
        if (getTokenSessionStorage !== null) {
            const getTokenSessionStorageParse = JSON.parse(getTokenSessionStorage)
            dispath(getDataLoadingContacts())

            await axios.get<any>(
                `api/user/contacts`,
                {
                    headers: {
                        'Authorization': `Bearer ${getTokenSessionStorageParse.token}`
                    }
                }
            )
                .then(response => {

                    const res = getData

                    dispath(getDataFetchContacts(response.data))

                })
                .catch(error => {
                    console.log(error)
                    dispath(getDataFetchError('Ошибка, данных нет'))

                })
        }

    } catch (error) {
        dispath(getDataFetchError('Ошибка, данных нет'))
    }
}

export const dataActionEvents = () => async (dispath: AppDispatch) => {
    try {
        const getTokenSessionStorage = localStorage.getItem('token')
        if (getTokenSessionStorage !== null) {

            dispath(getDataLoadingEvents())
            const getTokenSessionStorageParse = JSON.parse(getTokenSessionStorage)
            const response = await axios.get<any>(
                `api/user/events`,
                {
                    headers: {
                        'Authorization': `Bearer ${getTokenSessionStorageParse.token}`
                    }
                }
            )
                .then(response => {

                    const res = getData

                    dispath(getDataFetchEvents(response.data))

                })
                .catch(error => console.log(error))

        }

    } catch (error) {
        dispath(getDataFetchError('Ошибка, данных нет'))
    }
}

export const getDataReferalCode = () => async (dispath: AppDispatch) => {
    try {
        const getTokenSessionStorage = localStorage.getItem('token')
        if (getTokenSessionStorage !== null) {
            const getTokenSessionStorageParse = JSON.parse(getTokenSessionStorage)
            const response = await axios.get<any>(
                `api/user/overview`,
                {
                    headers: {
                        'Authorization': `Bearer ${getTokenSessionStorageParse.token}`
                    }
                }
            )
                .then(response => {

                    dispath(getReferalCode(response.data.from_lead_id))
                })
                .catch(error => console.log(error))
        }

    } catch (error) {
        dispath(getDataFetchError('Ошибка, данных нет'))
    }
}