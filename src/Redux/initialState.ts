import { IGetDataEvents } from "../Interfaces/Events";
import { IGetDataContacts } from "../Interfaces/contacts";

export interface IInitialState {
    codeCopied: boolean;
    contacts: IGetDataContacts[];
    events: IGetDataEvents[];
    isBackToRegistration: boolean;
    isloading: string;
    isloadingId: string;
    isLoadingContent: boolean;
    isLoadingContacts: boolean;
    isLoadingAuth: boolean;
    filterBy: null | string;
    inputEmail: string;
    inputPassword: string;
    referal_code: number;
    you_have_earned: number;
    error: null | string;
}

export const initialState: IInitialState = {
    codeCopied: false,
    isloading: '',
    isloadingId: '',
    isLoadingContent: false,
    isLoadingContacts: false,
    isLoadingAuth: false,
    inputEmail: '',
    inputPassword: '',
    contacts: [],
    events: [],
    isBackToRegistration: false,
    filterBy: null,
    referal_code: 0,
    you_have_earned: 0,
    error: '',
}
