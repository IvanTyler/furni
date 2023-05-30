import axios from "axios";
import { getData } from "../../MockData/MockData";
import { getDataFetchContacts, getDataFetchError, getDataFetching, getDataFetchingSuccess, getDataToken } from "../Reducers/SliceReducers";
import { AppDispatch } from "../Store/Store";


export const dataAction = (email: string, password: string) => async (dispath: AppDispatch) => {
    try {
        dispath(getDataFetching())

        let token = ''
        const response = await axios.post<any>(
            'http://143.198.202.90:10000/api/auth',
            { email, password })
            .then(response => {
                token = response.data.token
                localStorage.setItem('token', JSON.stringify({
                    refresh_token: response.data.refresh_token,
                    token: response.data.token
                }))
            })
            .catch(error => console.log(error))

        dispath(getDataToken())
        // if (getTokenSessionStorage !== null) {
        //     if (!token) {
        //         const getTokenSessionStorageParse = JSON.parse(getTokenSessionStorage)

        //         await axios.post<any>(
        //             'http://143.198.202.90:10000/api/refresh',
        //             {
        //                 refresh_token: getTokenSessionStorageParse.refresh_token,
        //                 token: getTokenSessionStorageParse.token
        //             })
        //             .then(response => {
        //                 console.log(response)
        //                 sessionStorage.setItem('token', JSON.stringify({
        //                     refresh_token: response.data.refresh_token,
        //                     token: response.data.token
        //                 }))
        //             })
        //             .catch(error => console.log(error))
        //     }
        // }


        // setTimeout(() => {
        //     const response = getData
        //     dispath(getDataFetchingSuccess(response))
        // }, 1000)
    } catch (error) {
        dispath(getDataFetchError('Ошибка, данных нет'))
    }
}

export const dataActionContacts = () => async (dispath: AppDispatch) => {
    try {

        const getTokenSessionStorage = localStorage.getItem('token')
        if (getTokenSessionStorage !== null) {

            // dispath(getDataFetching())

            const getTokenSessionStorageParse = JSON.parse(getTokenSessionStorage)
            const response = await axios.get<any>(
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

                    dispath(getDataFetchContacts(res))

                })
                .catch(error => console.log(error))
        }

    } catch (error) {
        dispath(getDataFetchError('Ошибка, данных нет'))
    }
}