import { Http } from 'angular2/http';
import { UGSettings } from './ug-settings.service';
import { Observable } from 'rxjs/Observable';
export declare class UGHttpService {
    private _http;
    private _ugSettings;
    baseUrl: string;
    constructor(_http: Http, _ugSettings: UGSettings);
    get(url: string): Observable<Object>;
    post(url: string, body: Object): Observable<Object>;
    put(url: string, body: Object): Observable<Object>;
    delete(url: string): Observable<Object>;
}
