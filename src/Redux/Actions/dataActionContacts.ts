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
            dispath(getDataLoadingContactsError())
            // localStorage.removeItem('lead_id')
            // localStorage.removeItem('token')
        })
}