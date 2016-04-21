import { Injectable, Inject } from 'angular2/core';
import { Http, Headers } from 'angular2/http';
import { UGSettings } from 'app/global/services/ug-settings.service';
import { Observable } from 'node_modules/rxjs/Observable'

@Injectable()
export class UGHttpService {
  constructor(private _http: Http, private _ugSettings: UGSettings) {
    this.baseUrl = _ugSettings.getUGSettings().apiUrl;
  }

  get(url: string) {
    return this._http.get(this.baseUrl + url);
  };

  post(url: string, body: object, options: object) {  
    return this._http.post(this.baseUrl + url, JSON.stringify(body));
  };

  put(url: string, body: object, options: object) {
    return this._http.put(this.baseUrl + url, JSON.stringify(body));
  };

  delete(url: string) {
    return this._http.delete(this.baseUrl + url);
  };
}