import { IGetDataEvents } from "../Interfaces/Events";
import { IGetDataContacts } from "../Interfaces/contacts";

export interface IInitialState {
    codeCopied: boolean;
    contacts: IGetDataContacts[];
    events: IGetDataEvents[];
    isloading: string;
    isloadingId: string;
    isLoadingContent: boolean;
    isLoadingContacts: boolean;
    isLoadingAuth: boolean;
    filterBy: null | string;
    referal_code: number;
    you_earned: number;
    error: null | string;
}

export const initialState: IInitialState = {
    codeCopied: false,
    isloading: '',
    isloadingId: '',
    isLoadingContent: false,
    isLoadingContacts: false,
    isLoadingAuth: false,
    contacts: [],
    events: [],
    filterBy: null,
    referal_code: 0,
    you_earned: 0,
    error: '',
}
