import { IGetDataEvents } from "../Interfaces/Events";
import { IgetDataContactsDto } from "../Interfaces/getDataDto";
import { FilterByType } from "../Interfaces/FilterContacts";

export interface IInitialState {
    codeCopied: boolean;
    contacts: IgetDataContactsDto[];
    events: IGetDataEvents[];
    isloading: string;
    isloadingId: string;
    isLoadingContent: boolean;
    isLoadingContacts: boolean;
    isLoadingAuth: boolean;
    filterBy: FilterByType | null;
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
