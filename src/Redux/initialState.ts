import { IgetDataDto } from "../Interfaces/getDataDto";

export interface IInitialState {
    codeCopied: boolean;
    data: IgetDataDto;
    isloading: boolean;
    error: null | string;
}

export const initialState: IInitialState = {
    codeCopied: false,
    data: {
        contacts: [],
        events: [],
        status: false,
    },
    isloading: false,
    error: '',
}