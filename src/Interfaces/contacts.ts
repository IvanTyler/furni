import { IDetailContacts } from "./Detail";

export interface IGetDataContacts {
    id: number;
    name: string;
    active: boolean;
    detail: IDetailContacts
}