import { getData } from "../../MockData/MockData";
import { getDataFetchError, getDataFetching, getDataFetchingSuccess } from "../Reducers/SliceReducers";
import { AppDispatch } from "../Store/Store";

export const dataAction = (login: string, password: string) => (dispath: AppDispatch) => {
    try {
        dispath(getDataFetching())
        setTimeout(() => {
            const response = getData
            dispath(getDataFetchingSuccess(response))
        }, 1000)
    } catch (error) {
        dispath(getDataFetchError('Ошибка, данных нет'))
    }
}