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
import $api from "../http/http";


export const dataAction = (email: string, password: string) => async (dispath: AppDispatch) => {
    try {
        dispath(getDataFetchingToken())

        await $api.post<any>(
            'api/auth',
            { email, password })
            .then(async response => {
                console.log('auth', response);

                if (response.status !== 200) {
                    dispath(getDataFetchError('Ошибка, данных нет'))
                    return
                }
                localStorage.setItem('token', response.data.token)
                localStorage.setItem('refresh_token', response.data.refresh_token)

                await $api.get<any>(
                    `api/user/overview`
                )
                    .then(response => {
                        if (response.data.lead_id) {
                            dispath(getReferalCode(response.data.lead_id))
                            localStorage.setItem('lead_id', response.data.lead_id)
                        }
                        dispath(getYouHaveEarned(response.data.earning_total))
                        localStorage.setItem('youHaveEarned', response.data.earning_total)

                    })
                    .catch(error => console.log(error))
                dispath(getDataFetchingSuccessToken())
            })
            .catch(error => {
                dispath(getDataFetchError('Ошибка, данных нет'))
            })

    } catch (error) {
        dispath(getDataFetchError('Ошибка, данных нет'))
    }
}

