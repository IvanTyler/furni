import { IDetailEvents } from "./Detail";

export interface IGetaDataEvents {
    id: number;
    name: string;
    detail: IDetailEvents
}

export interface IMyDataEvents {
    id: number;
    active: boolean;
    name: string;
    event_type: string;
    event: string;
    detail: IDetailEvents
}