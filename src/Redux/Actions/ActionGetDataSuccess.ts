import { getData } from "../../MockData/MockData";
import { getDataFetching, getDataFetchingSuccess } from "../Reducers/SliceReducers";
import { AppDispatch } from "../Store/Store";

export const getDataSuccess = (login: string, password: string) => (dispath: AppDispatch) => {
    console.log(login, password);
    try {
        dispath(getDataFetching())
        setTimeout(() => {
            const response = getData
            dispath(getDataFetchingSuccess(response))
        }, 1000)
    } catch {

    }

}