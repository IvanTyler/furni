import {
    getDataFetchingSuccessToken,
    getDataLoadingOverview,
    getReferalCode,
    getYouHaveEarned
} from "../Reducers/SliceReducers";
import $api from "../http/http";
import { AppDispatch } from "../Store/Store";

export const dataActionOverview = () => (dispath: AppDispatch) => {
    dispath(getDataLoadingOverview())

    $api.get<any>(
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
        .catch(error => dispath(getDataFetchingSuccessToken()))
}