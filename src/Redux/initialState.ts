import { IGetDataEvents } from "../Interfaces/Events";
import { IGetDataContacts } from "../Interfaces/contacts";

export interface IInitialState {
    codeCopied: boolean;
    contacts: IGetDataContacts[];
    events: IGetDataEvents[];
    isloading: string;
    isLoadingContent: string;
    isLoadingAuth: boolean;
    filterBy: null | string;
    error: null | string;
    status: boolean;
}

export const initialState: IInitialState = {
    codeCopied: false,
    isloading: '',
    isLoadingContent: '',
    isLoadingAuth: false,
    contacts: [],
    events: [],
    filterBy: null,
    error: '',
    status: false,
}