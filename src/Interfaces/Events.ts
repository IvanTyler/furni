import { IDetailEvents } from "./Detail";

export interface IGetDataEvents {
    id: number;
    active: boolean;
    name: string;
    event_type: string;
    event: string;
    detail: IDetailEvents
}