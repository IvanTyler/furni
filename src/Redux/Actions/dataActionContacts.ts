import { IgetDataContactsDto } from "../../Interfaces/getDataDto";
import {
    getDataFetchContacts,
    getDataLoadingContacts,
    getDataLoadingContactsError,
} from "../Reducers/SliceReducers";
import { AppDispatch } from "../Store/Store";
import $api from "../http/http";

export const dataActionContacts = () => (dispath: AppDispatch) => {
    dispath(getDataLoadingContacts())

    $api.get<IgetDataContactsDto[]>(
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
            dispath(getDataLoadingContactsError())
        })
}