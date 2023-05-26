import { IDetailContacts } from "./Detail";

export interface IGetDataContacts {
    id: number;
    name: string;
    active: boolean;
    titleTotal: number;
    detail: IDetailContacts
}