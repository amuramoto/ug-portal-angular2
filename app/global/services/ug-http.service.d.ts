import { Http, Headers } from 'angular2/http';
import { Observable } from 'rxjs/Observable';
export declare class UGHttpService {
    private _http;
    baseUrl: string;
    headers: Headers;
    constructor(_http: Http);
    get(url: string): Observable<Object>;
    post(url: string, body: Object): Observable<Object>;
    put(url: string, body: Object): Observable<Object>;
    delete(url: string): Observable<Object>;
    setToken(token: string): void;
    setBaseUrl(url: string): void;
}
