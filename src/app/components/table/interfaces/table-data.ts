export interface TableData {
    id?: number;
    icon: string;
    country: string;
    name: string;
    readings: number;
    mediumAlerts: number;
    redAlerts: number;
    iconActions?: string;
}
