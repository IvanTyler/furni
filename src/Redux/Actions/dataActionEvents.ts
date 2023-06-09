import axios from "axios";
import { getData } from "../../MockData/MockData";
import {
    getDataFetchError,
    getDataFetchEvents,
    getDataLoadingEvents,
    getDataLoadingEventsError,
} from "../Reducers/SliceReducers";
import { AppDispatch } from "../Store/Store";
import $api from "../http/http";

export const dataActionEvents = () => async (dispath: AppDispatch) => {


    dispath(getDataLoadingEvents())
    await $api.get<any>(
        `api/user/events`
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

    // dispath(getDataFetchError('Ошибка, данных нет'))
}