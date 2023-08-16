import {
    getDataFetchError,
    getDataFetchingSuccessToken,
    getDataFetchingToken,
    getDataLoadingErrorLeadId,
    getDataLoadingLoadingLeadId,
    getDataLoadingSuccessLeadId,
    getReferalCode,
    getYouHaveEarned,
    setAuth
} from "../Reducers/SliceReducers";
import { AppDispatch } from "../Store/Store";
import $api from "../http/http";
import { IGetDataTokens } from "../../Interfaces/IGetDataTokens";
import { dataActionOverview } from "./dataActionOverview";

export const dataAction = (email: string, password: string) => async (dispath: AppDispatch) => {
    try {
        dispath(getDataFetchingToken())

        await $api.post<IGetDataTokens>(
            'api/auth',
            { email, password })
            .then(async response => {

                if (response.status !== 200) {

                    dispath(getDataFetchError('Ошибка, данных нет'))
                    return
                }
                localStorage.setItem('token', response.data.token)
                localStorage.setItem('refresh_token', response.data.refresh_token)
                dispath(getDataFetchingSuccessToken())

                await $api.get<any>(
                    `api/user/overview`
                )
                    .then(response => {
                        dataActionOverview()
                        dispath(getYouHaveEarned(response.data.earning_total))
                        localStorage.setItem('youHaveEarned', response.data.earning_total)
                    })
                    .catch(error => console.log(error))
            })
            .catch(error => {
                console.log(error);

                dispath(getDataFetchError('Ошибка, данных нет'))
            })

    } catch (error) {

        dispath(getDataFetchError('Ошибка, данных нет'))
    }
}

