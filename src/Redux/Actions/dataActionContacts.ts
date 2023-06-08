import axios from "axios";
import {
    getDataFetchContacts,
    getDataFetchError,
    getDataLoadingContacts,
    getDataLoadingContactsError,
} from "../Reducers/SliceReducers";
import { AppDispatch } from "../Store/Store";
import $api from "../http/http";


export const dataActionContacts = () => (dispath: AppDispatch) => {
    try {
        const getTokenLocalStorage = localStorage.getItem('token')

        if (getTokenLocalStorage !== null) {
            const getTokenLocalStorageParse = JSON.parse(getTokenLocalStorage)
            dispath(getDataLoadingContacts())

             $api.get<any>(
                `api/user/contacts`,
            )
                .then(response => {

                    if (!response.data) {
                        dispath(getDataLoadingContactsError())
                        return
                    }
                    dispath(getDataFetchContacts(response.data))

                })
                .catch(error => {
                    console.log(error)
                    dispath(getDataFetchError('Ошибка, данных нет'))
                    localStorage.removeItem('lead_id')
                    localStorage.removeItem('token')
                })
        }

    } catch (error) {
        dispath(getDataFetchError('Ошибка, данных нет'))
    }
}