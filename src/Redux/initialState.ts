import { IgetDataContactsDto, IgetDataDto } from "../Interfaces/getDataDto";

export interface IInitialState {
    codeCopied: boolean;
    data: IgetDataDto;
    contacts: IgetDataContactsDto[];
    isloading: boolean;
    filterBy: null | string;
    error: null | string;
}

export const initialState: IInitialState = {
    codeCopied: false,
    data: {
        contacts: [],
        events: [],
    },
    isloading: false,
    contacts: [],
    filterBy: null,
    error: '',
}