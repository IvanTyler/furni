import axios from "axios";
import { getData } from "../../MockData/MockData";
import {
    getDataFetchError,
    getDataFetchingSuccessToken,
    getDataFetchingToken,
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
                console.log('auth', response);

                if (response.status !== 200) {
                    dispath(getDataFetchError('Ошибка, данных нет'))
                    return
                }
                localStorage.setItem('token', JSON.stringify(response.data.token))
                localStorage.setItem('refresh_token', JSON.stringify(response.data.refresh_token))

                const getTokenLocalStorage = localStorage.getItem('token')
                if (getTokenLocalStorage !== null) {
                    const getTokenSessionStorageParse = JSON.parse(getTokenLocalStorage)
                    await axios.get<any>(
                        `api/user/overview`,
                        {
                            headers: {
                                'Authorization': `Bearer ${getTokenSessionStorageParse}`
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

