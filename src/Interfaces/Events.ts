import { IDetailEvents } from "./Detail";

export interface IGetDataEvents {
    id: number;
    name: string;
    event_type: string;
    event_text: string;
    detail: IDetailEvents
}