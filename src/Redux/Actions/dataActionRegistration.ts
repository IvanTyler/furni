import { useTypeSelector } from "../../Hooks/useTypeSelector";
import { IgetDataContactsDto } from "../../Interfaces/getDataDto";
import {
    getDataFetchContacts,
    getDataLoadingContacts,
    getDataLoadingContactsError,
} from "../Reducers/SliceReducers";
import { clearDataUser, getDataLetsStarted, getDataYourDetails } from "../Reducers/registrationReducer";
import { AppDispatch } from "../Store/Store";
import $api from "../http/http";

export const dataActionUsers = (
    email: string,
    password: string,
    fullName: string,
    phone: string,
    referalCode?: number
) => (dispath: AppDispatch) => {

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

            // if (!response.data) {
            //     dispath(getDataLoadingContactsError())
            //     return
            // }
            // dispath(getDataFetchContacts(response.data))
            dispath(clearDataUser())
        })
        .catch(error => {
            console.log(error);

            dispath(clearDataUser())
        })
}

export const dataActionFormLetsGetStarted = (
    email: string,
    password: string
) => (dispath: AppDispatch) => {
    dispath(getDataLetsStarted({ email, password }))
}

export const dataActionFormYourDetails = (
    fullName: string,
    phoneNumber: string,
    referalCode: string,
) => (dispath: AppDispatch) => {
    dispath(getDataYourDetails({ fullName, phoneNumber, referalCode }))
}