import { IDetail } from "./Detail";

export interface IGetaDataContacts {
    id: number;
    name: string;
    detail: IDetail
}

export interface IMyDataContacts {
    id: number;
    name: string;
    active: boolean;
    detail: IDetail
}