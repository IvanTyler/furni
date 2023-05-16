import { IDetailContacts } from "./Detail";

export interface IGetaDataContacts {
    id: number;
    name: string;
    detail: IDetailContacts
}

export interface IMyDataContacts {
    id: number;
    name: string;
    active: boolean;
    detail: IDetailContacts
}