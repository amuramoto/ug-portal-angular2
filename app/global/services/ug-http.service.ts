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
    let observable: Observable = this._http.get(this.baseUrl + url);
    return observable;
  };

  post(url: string, body: Object, options: Object) {  
    let observable: Observable = this._http.post(this.baseUrl + url, JSON.stringify(body));
    return observable;
  };

  put(url: string, body: Object, options: Object) {
    let observable: Observable = this._http.put(this.baseUrl + url, JSON.stringify(body))
    return observable;
  };

  delete(url: string) {
    let observable: Observable = this._http.delete(this.baseUrl + url);
    return observable;
  };
}