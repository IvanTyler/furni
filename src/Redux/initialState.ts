import { IGetDataEventsDto, IgetDataContactsDto, IgetDataDto } from "../Interfaces/getData";


export interface IInitialState {
    codeCopied: boolean;
    data: IgetDataDto;
    isloading: boolean;
}


export const initialState: IInitialState = {
    codeCopied: false,
    data: {
        contacts: [],
        events: [],
        status: false,
    },
    isloading: false,
}