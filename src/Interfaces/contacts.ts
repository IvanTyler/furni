import { IDetailContacts } from "./Detail";

export interface IGetDataContacts {
    id: number;
    name: string;
    titleTotal: number;
    detail: IDetailContacts
}