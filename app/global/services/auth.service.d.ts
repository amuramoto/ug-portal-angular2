import { UGHttpService } from './ug-http.service';
import { UGSettings } from './ug-settings.service';
export declare class AuthService {
    private _http;
    private _ugSettings;
    access_token: string;
    maxTokenAge: number;
    constructor(_http: UGHttpService, _ugSettings: UGSettings);
    login(username: any, password: any): any;
    logout(): void;
    getToken(): boolean | string;
    private setToken(token);
    isAuthenticated(): boolean;
    getTokenAge(): number;
}
