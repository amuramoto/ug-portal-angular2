import { Http } from 'angular2/http';
import { UGHttpService } from './ug-http.service';
import { AuthService } from './auth.service';
export declare class UGSettings {
    private _http;
    private _ugHttp;
    private _auth;
    baseUrl: string;
    maxTokenAge: number;
    constructor(_http: Http, _ugHttp: UGHttpService, _auth: AuthService);
    loadUGSettings(): void;
}
