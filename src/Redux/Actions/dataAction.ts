import axios from "axios";
import { getData } from "../../MockData/MockData";
import { getDataFetchContacts, getDataFetchError, getDataFetchEvents, getDataFetching, getDataToken } from "../Reducers/SliceReducers";
import { AppDispatch } from "../Store/Store";


export const dataAction = (email: string, password: string) => async (dispath: AppDispatch) => {
    try {
        dispath(getDataFetching())

        let token = ''
        await axios.post<any>(
            'http://143.198.202.90:10000/api/auth',
            { email, password })
            .then(response => {
                console.log(response);
                
                token = response.data.token
                localStorage.setItem('token', JSON.stringify({
                    refresh_token: response.data.refresh_token,
                    token: response.data.token
                }))
            })
            .catch(error => console.log(error))

        dispath(getDataToken())
    } catch (error) {
        dispath(getDataFetchError('Ошибка, данных нет'))
    }
}

export const dataActionContacts = () => async (dispath: AppDispatch) => {
    try {
        const getTokenSessionStorage = localStorage.getItem('token')
        if (getTokenSessionStorage !== null) {
            const getTokenSessionStorageParse = JSON.parse(getTokenSessionStorage)
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

                    dispath(getDataFetchContacts(res))

                })
                .catch(error => console.log(error))
        }

    } catch (error) {
        dispath(getDataFetchError('Ошибка, данных нет'))
    }
}

export const dataActionEvents = () => async (dispath: AppDispatch) => {
    try {
        const getTokenSessionStorage = localStorage.getItem('token')
        if (getTokenSessionStorage !== null) {
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

                    dispath(getDataFetchEvents(res))

                })
                .catch(error => console.log(error))
        }

    } catch (error) {
        dispath(getDataFetchError('Ошибка, данных нет'))
    }
}