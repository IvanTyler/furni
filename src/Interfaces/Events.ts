import { IDetail } from "./Detail";

export interface IGetaDataEvents {
    id: number;
    name: string;
    detail: IDetail
}

export interface IMyDataEvents {
    id: number;
    active: boolean;
    name: string;
    event_type: string;
    event: string;
    detail: IDetail
}