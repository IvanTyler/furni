import axios from "axios";
import { getData } from "../../MockData/MockData";
import {
    getDataFetchContacts,
    getDataFetchError,
    getDataFetchEvents,
    getDataFetchingSuccessToken,
    getDataFetchingToken,
    getDataLoadingContacts,
    getDataLoadingContactsError,
    getDataLoadingEvents,
    getDataLoadingEventsError,
    getReferalCode,
    getYouHaveEarned
} from "../Reducers/SliceReducers";
import { AppDispatch } from "../Store/Store";


export const dataAction = (email: string, password: string) => async (dispath: AppDispatch) => {
    try {
        dispath(getDataFetchingToken())

        await axios.post<any>(
            'api/auth',
            { email, password })
            .then(async response => {

                if (response.status !== 200) {
                    dispath(getDataFetchError('Ошибка, данных нет'))
                    return
                }
                localStorage.setItem('token', JSON.stringify({
                    token: response.data.token
                }))
                localStorage.setItem('refresh_token', JSON.stringify({
                    refresh_token: response.data.refresh_token,
                }))

                const getTokenLocalStorage = localStorage.getItem('token')
                if (getTokenLocalStorage !== null) {
                    const getTokenSessionStorageParse = JSON.parse(getTokenLocalStorage)
                    await axios.get<any>(
                        `api/user/overview`,
                        {
                            headers: {
                                'Authorization': `Bearer ${getTokenSessionStorageParse.token}`
                            }
                        }
                    )
                        .then(response => {
                            if (response.data.lead_id) {
                                dispath(getReferalCode(response.data.lead_id))
                                localStorage.setItem('lead_id', JSON.stringify(response.data.lead_id))
                            }
                            dispath(getYouHaveEarned(response.data.earning_total))
                            localStorage.setItem('youHaveEarned', JSON.stringify(response.data.earning_total))

                        })
                        .catch(error => console.log(error))
                }

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
        const getTokenLocalStorage = localStorage.getItem('token')

        if (getTokenLocalStorage !== null) {
            const getTokenLocalStorageParse = JSON.parse(getTokenLocalStorage)
            dispath(getDataLoadingContacts())

            await axios.get<any>(
                `api/user/contacts`,
                {
                    headers: {
                        'Authorization': `Bearer ${getTokenLocalStorageParse.token}`
                    }
                }
            )
                .then(response => {

                    if (!response.data) {
                        dispath(getDataLoadingContactsError())
                        return
                    }

                    dispath(getDataFetchContacts(response.data))

                })
                .catch(async error => {
                    console.log(error)
                    dispath(getDataFetchError('Ошибка, данных нет'))
                    localStorage.removeItem('lead_id')

                    const getRefreshTokenLocalStorage = localStorage.getItem('refresh_token')
                    const getTokenLocalStorage = localStorage.getItem('token')

                    // if (getRefreshTokenLocalStorage !== null && getTokenLocalStorage !== null) {

                    //     const getRefreshTokenLocalStorageParse = JSON.parse(getRefreshTokenLocalStorage)
                    //     const getTokenLocalStorageParse = JSON.parse(getTokenLocalStorage)

                    //     await axios.post<any>(
                    //         'api/refresh',
                    //         {
                    //             refresh_token: getRefreshTokenLocalStorageParse.refresh_token,
                    //             token: getTokenLocalStorageParse.token
                    //         })
                    //         .then(async response => {

                    //             console.log(response);


                    //             if (response.status !== 200) {
                    //                 dispath(getDataFetchError('Ошибка, данных нет'))
                    //                 return
                    //             }
                    //             // localStorage.setItem('token', JSON.stringify({
                    //             //     token: response.data.token
                    //             // }))
                    //             // localStorage.setItem('refresh_token', JSON.stringify({
                    //             //     refresh_token: response.data.refresh_token,
                    //             // }))

                    //             // const getTokenLocalStorage = localStorage.getItem('token')

                    //             dispath(getDataFetchContacts(response.data))


                    //         })
                    //         .catch(error => {
                    //             dispath(getDataFetchError('Ошибка, данных нет'))
                    //         })
                    // }
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
            await axios.get<any>(
                `api/user/events`,
                {
                    headers: {
                        'Authorization': `Bearer ${getTokenSessionStorageParse.token}`
                    }
                }
            )
                .then(response => {
                    if (!response.data) {
                        dispath(getDataLoadingEventsError())
                        return
                    }

                    dispath(getDataFetchEvents(response.data))
                })
                .catch(error => {
                    console.log(error)
                    dispath(getDataFetchError('Ошибка, данных нет'))
                    localStorage.removeItem('token')
                    localStorage.removeItem('lead_id')
                })
        }

    } catch (error) {
        dispath(getDataFetchError('Ошибка, данных нет'))
    }
}

// export const getDataReferalCode = () => async (dispath: AppDispatch) => {
//     try {
//         const getTokenLocalStorage = localStorage.getItem('token')
//         if (getTokenLocalStorage !== null) {
//             const getTokenSessionStorageParse = JSON.parse(getTokenLocalStorage)
//             await axios.get<any>(
//                 `api/user/overview`,
//                 {
//                     headers: {
//                         'Authorization': `Bearer ${getTokenSessionStorageParse.token}`
//                     }
//                 }
//             )
//                 .then(response => {
//                     if (response.data.lead_id) {
//                         dispath(getReferalCode(response.data.lead_id))
//                         localStorage.setItem('lead_id', JSON.stringify(response.data.lead_id))
//                     }
//                     dispath(getYouHaveEarned(response.data.earning_total))
//                 })
//                 .catch(error => console.log(error))
//         }

//     } catch (error) {
//         dispath(getDataFetchError('Ошибка, данных нет'))
//     }
// }
