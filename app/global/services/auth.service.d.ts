import { UGHttpService } from './ug-http.service';
import { Observable } from 'rxjs/Observable';
export declare class AuthService {
    private _http;
    access_token: string;
    maxTokenAge: number;
    constructor(_http: UGHttpService);
    login(username: any, password: any): Observable<Object>;
    logout(): void;
    getToken(): string;
    private setToken(token);
    isAuthenticated(): boolean;
    getTokenAge(): number;
    setMaxTokenAge(maxTokenAge: number): void;
}
