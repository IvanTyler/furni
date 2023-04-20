export interface IDataApi {
    error_message: string;
    stats_clients: IStatsClients;
    stats_partners: IStatsPartners;
    status: boolean;
}

export interface IStatsClients {
    [x: string]: any;
    id: number;
    name: string;
    amount: number;
    earnings: number;
}

export interface IStatsPartners {
    id: number;
    name: string;
    clients: number;
    amount: number;
    earnings: number;
    clients_network: number;
    earnings_network: number;
}