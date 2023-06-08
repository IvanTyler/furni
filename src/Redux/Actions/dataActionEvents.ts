import axios from "axios";
import { getData } from "../../MockData/MockData";
import {
    getDataFetchError,
    getDataFetchEvents,
    getDataLoadingEvents,
    getDataLoadingEventsError,
} from "../Reducers/SliceReducers";
import { AppDispatch } from "../Store/Store";

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
                        'Authorization': `Bearer ${getTokenSessionStorageParse}`
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