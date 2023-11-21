import {
    getDataFetchingSuccessToken,
    getDataLoadingErrorLeadId,
    getDataLoadingSuccessLeadId,
    getDataFetchingReferalCode,
    getDataFetchingYouEarned
} from "../Reducers/SliceReducers";
import $api from "../http/http";
import { AppDispatch } from "../Store/Store";
import { getDataLoadingOverview } from "../Reducers/getDataOverviewReducer";

export const dataActionOverviewTab = () => (dispath: AppDispatch) => {
    dispath(getDataLoadingOverview())

    $api.get<any>(
        `api/user/overview`
    )
        .then(response => {
            if (response.data.lead_id && response.data.lead_id !== 0) {
                dispath(getDataFetchingReferalCode(response.data.lead_id))
                dispath(getDataLoadingSuccessLeadId())

                localStorage.setItem('lead_id', response.data.lead_id)
            } else {
                console.log('error lead_id');
                dispath(getDataLoadingErrorLeadId(response.data.lead_id))
            }
            dispath(getDataFetchingYouEarned(response.data.earning_total))
            localStorage.setItem('youHaveEarned', response.data.earning_total)

        })
        .catch(error => dispath(getDataFetchingSuccessToken()))
}