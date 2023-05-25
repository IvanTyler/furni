import { IgetDataContactsDto, IgetDataDto } from "../Interfaces/getDataDto";

export interface IInitialState {
    codeCopied: boolean;
    data: IgetDataDto;
    contactsFilter: IgetDataContactsDto[];
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
    contactsFilter: [],
    error: '',
}