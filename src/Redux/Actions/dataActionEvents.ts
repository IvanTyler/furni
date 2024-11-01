import { IGetDataEvents } from "../../Interfaces/Events";
import { getDataFetchEvents, getDataLoadingEvents, getDataLoadingEventsError } from "../Reducers/getDataEventsReducer";

import { AppDispatch } from "../Store/Store";
import $api from "../http/http";

export const dataActionEvents = () => async (dispath: AppDispatch) => {

    dispath(getDataLoadingEvents())

    await $api.get<IGetDataEvents[]>(
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
            dispath(getDataLoadingEventsError())
        })
}