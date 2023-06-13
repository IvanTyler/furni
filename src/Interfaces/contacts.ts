import { IDetailContacts } from "./Detail";

export interface IGetDataContacts {
    id: number;
    name: string;
    titleTotal: number;
    created_at: string;
    detail: IDetailContacts
}