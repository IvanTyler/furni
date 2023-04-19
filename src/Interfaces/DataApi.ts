export interface IDataApi {
    stats_clients: IStatsClients;
    stats_partners: IStatsPartners;
}

export interface IStatsClients {
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