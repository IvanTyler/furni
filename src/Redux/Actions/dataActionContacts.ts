import { IgetDataContactsDto } from "../../Interfaces/getDataDto";
import {
} from "../Reducers/SliceReducers";
import { getDataFetchContacts, getDataFetchingContacts, getDataFetchingContactsError } from "../Reducers/getDataContactsReducer";
import { AppDispatch } from "../Store/Store";
import $api from "../http/http";

export const dataActionContacts = () => (dispath: AppDispatch) => {
    dispath(getDataFetchingContacts())

    $api.get<IgetDataContactsDto[]>(
        `api/user/contacts`,
    )
        .then(response => {
            
            if (!response.data) {
                dispath(getDataFetchingContactsError())
                return
            }
            dispath(getDataFetchContacts(response.data))

        })
        .catch(error => {
            dispath(getDataFetchingContactsError())
        })
}