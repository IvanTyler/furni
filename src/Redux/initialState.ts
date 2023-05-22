import { IGetDataEventsDto, IgetDataContactsDto, IgetDataDto } from "../Interfaces/getData";


export interface IInitialState {
    codeCopied: boolean;
    data: IgetDataDto;
    isloading: boolean;
}


export const initialState: IInitialState = {
    codeCopied: false,
    data: {
        contacts: {
            'id': 0,
            'name': '',
            'detail': {
                'direct_sales': 0,
                'via_partners': 0,
                'via_subpartners': 0,
            }
        },
        events: {
            'id': 0,
            'name': '',
            'event_type': '',
            'event': '',
            'detail': {
                'Sale_type': '',
                'Deal_amount': 0,
                'Your_commission': 0,
                'Reference_code': '',
            },
        },
        status: false,
    },
    isloading: false,
}