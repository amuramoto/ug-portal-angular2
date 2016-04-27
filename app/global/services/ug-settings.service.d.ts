import { Http } from 'angular2/http';
export declare class UGSettings {
    private _http;
    baseUrl: string;
    maxTokenAge: number;
    constructor(_http: Http);
    getBaseUrl(): string;
    getMaxTokenAge(): number;
}
