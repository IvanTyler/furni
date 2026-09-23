import { AxiosError } from "axios";
import { getResponseErrorMessage } from "../Reducers/registrationReducer";
import { AppDispatch } from "../Store/Store";
import $api from "../http/http";
import { dataAction } from "./dataAction";

interface IRegistrationErrorResponse {
    message: string;
}

export const dataActionUsers = (
    email: string,
    password: string,
    fullName: string,
    phone: string,
    referalCode?: number
) => (dispath: AppDispatch) => {

    $api.post<unknown>(
        `api/users`,
        {
            conditions: 'v1',
            email,
            from_lead_id: referalCode,
            name: fullName,
            password,
            phone: phone ? phone : 0,
            repeat_password: password
        }
    )
        .then(() => {
            dispath(dataAction(email, password))

        })
        .catch((error: AxiosError<IRegistrationErrorResponse>) => {
            dispath(getResponseErrorMessage(error.response?.data.message ?? 'Registration error'))
        })
}