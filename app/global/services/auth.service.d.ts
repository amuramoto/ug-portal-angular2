import { UGSettings } from './ug-settings.service';
import { UGHttpService } from './ug-http.service';
import { Observable } from 'rxjs/Observable';
export declare class AuthService {
    private _ugSettings;
    private _http;
    access_token: string;
    maxTokenAge: number;
    constructor(_ugSettings: UGSettings, _http: UGHttpService);
    login(username: any, password: any): Observable<Object>;
    logout(): void;
    getToken(): string;
    private setToken(token);
    isAuthenticated(): boolean;
    getTokenAge(): number;
}
