import { Http } from 'angular2/http';
import { Observable } from 'rxjs/Observable';
import { UGSettings } from './ug-settings.service';
export declare class UGHttpService {
    private _ugSettings;
    private _http;
    baseUrl: string;
    constructor(_ugSettings: UGSettings, _http: Http);
    get(url: string): Observable<Object>;
    post(url: string, body: Object): Observable<Object>;
    put(url: string, body: Object): Observable<Object>;
    delete(url: string): Observable<Object>;
}
