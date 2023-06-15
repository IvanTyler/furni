import { useTypeSelector } from "../../Hooks/useTypeSelector";
import { IgetDataContactsDto } from "../../Interfaces/getDataDto";
import {
    getDataFetchContacts,
    getDataLoadingContacts,
    getDataLoadingContactsError,
} from "../Reducers/SliceReducers";
import { AppDispatch } from "../Store/Store";
import $api from "../http/http";
import { dataAction } from "./dataAction";

export const dataActionUsers = (
    email: string,
    password: string,
    fullName: string,
    phone: string,
    referalCode?: number
) => (dispath: AppDispatch) => {

    console.log(
        email,
        password,
        fullName,
        phone,
        referalCode);

    $api.post<any>(
        `api/users`,
        {
            conditions: 'v1',
            email,
            from_lead_id: referalCode,
            name: fullName,
            password,
            phone,
            repeat_password: password
        }
    )
        .then(response => {
            console.log(response);
            dispath(dataAction(email, password))

            // if (!response.data) {
            //     dispath(getDataLoadingContactsError())
            //     return
            // }
            // dispath(getDataFetchContacts(response.data))
        })
        .catch(error => {
            console.log(error);

        })
}