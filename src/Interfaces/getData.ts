import { IDetailContacts, IDetailEvents } from "./Detail";

export interface IgetDataDto {
    contacts: IgetDataContactsDto[];
    events: IGetDataEventsDto[];
    status: boolean;
}

export interface IgetDataContactsDto {
    id: number;
    name: string;
    detail: IDetailContacts
}

export interface IGetDataEventsDto {
    id: number;
    name: string;
    event_type: string;
    event: string;
    detail: IDetailEvents
}



