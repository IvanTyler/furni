import {
    getDataFetchingSuccessToken,
    getDataLoadingErrorLeadId,
    getDataLoadingLoadingLeadId,
    getDataLoadingSuccessLeadId,
    getDataFetchingReferalCode,
    getDataFetchingYouEarned
} from "../Reducers/SliceReducers";
import $api from "../http/http";
import { AppDispatch } from "../Store/Store";
import { IOverviewResponse } from "../../Interfaces/Overview";

export const dataActionOverviewRefresh = () => (dispath: AppDispatch) => {
    dispath(getDataLoadingLoadingLeadId())

    $api.get<IOverviewResponse>(
        `api/user/overview`
    )
        .then(response => {
            if (response.data.lead_id && response.data.lead_id !== 0) {
                dispath(getDataFetchingReferalCode(response.data.lead_id))
                dispath(getDataLoadingSuccessLeadId())

                localStorage.setItem('lead_id', String(response.data.lead_id))
            } else {
                console.log('error lead_id');
                dispath(getDataLoadingErrorLeadId())
            }
            dispath(getDataFetchingYouEarned(response.data.earning_total))
            localStorage.setItem('youHaveEarned', String(response.data.earning_total))

        })
        .catch(error => dispath(getDataFetchingSuccessToken()))
}
