import { IGetDataEvents } from "../Interfaces/Events";
import { IGetDataContacts } from "../Interfaces/contacts";

export interface IInitialState {
    codeCopied: boolean;
    contacts: IGetDataContacts[];
    events: IGetDataEvents[];
    isloading: string;
    isLoadingContent: string;
    isLoadingContacts: boolean;
    isRefresh_token: boolean;
    isLoadingAuth: boolean;
    filterBy: null | string;
    referal_code: number;
    you_have_earned: number;
    error: null | string;
}

export const initialState: IInitialState = {
    codeCopied: false,
    isloading: '',
    isLoadingContent: '',
    isLoadingContacts: false,
    isLoadingAuth: false,
    isRefresh_token: false,
    contacts: [],
    events: [],
    filterBy: null,
    referal_code: 0,
    you_have_earned: 0,
    error: '',
}
