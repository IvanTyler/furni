import { IGetDataEvents } from "../Interfaces/Events";
import { IGetDataContacts } from "../Interfaces/contacts";

export interface IInitialState {
    codeCopied: boolean;
    contacts: IGetDataContacts[];
    events: IGetDataEvents[];
    isloading: boolean;
    filterBy: null | string;
    error: null | string;
    status: boolean;
}

export const initialState: IInitialState = {
    codeCopied: false,
    isloading: false,
    contacts: [],
    events: [],
    filterBy: null,
    error: '',
    status: false,
}