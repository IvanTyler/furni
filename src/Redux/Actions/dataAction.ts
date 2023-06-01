import axios from "axios";
import { getData } from "../../MockData/MockData";
import {
    getDataFetchContacts,
    getDataFetchError,
    getDataFetchEvents,
    getDataFetchingSuccessToken,
    getDataFetchingToken,
    getDataLoadingContacts,
    getDataLoadingEvents
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
                console.log(response);

                token = response.data.token
                localStorage.setItem('token', JSON.stringify({
                    refresh_token: response.data.refresh_token,
                    token: response.data.token
                }))

            })
            .catch(error => {
                console.log(error)
            })

        dispath(getDataFetchingSuccessToken())
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
                    console.log(response);

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
                    console.log(response);

                    const res = getData

                    dispath(getDataFetchEvents(response.data))

                })
                .catch(error => console.log(error))

        }

    } catch (error) {
        dispath(getDataFetchError('Ошибка, данных нет'))
    }
}