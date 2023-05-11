export interface IContacts {
    id: number;
    active: boolean,
    name: string;
    detail: IDetailContacts
}

export interface IDetailContacts {
    direct_sales: number;
    via_partners: number;
    via_subpartners: number;
}