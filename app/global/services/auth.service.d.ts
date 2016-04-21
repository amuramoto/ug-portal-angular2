import { UGHttpService } from 'app/global/services/ug-http.service';
import { UGSettings } from 'app/global/services/ug-settings.service';
export declare class AuthService {
    private _http;
    private _ugSettings;
    constructor(_http: UGHttpService, _ugSettings: UGSettings);
    login(username: any, password: any): any;
    logout(): void;
    getToken(): any;
    private setToken(token);
    isAuthenticated(token: string): boolean;
    getTokenAge(timestamp: any): number;
}
