import { Injectable, Inject } from 'angular2/core';
import { Http, Headers } from 'angular2/http';
import { UGSettings } from 'app/ug-settings.service';

@Injectable()
export class UGHttpClient {
  constructor(@Inject(Http) private _http: Http) {        
    console.log(new UGSettings());
    this.baseUrl = 'ss'
  }

  get(url: string) {
    return this._http.get(this.baseUrl + url);
  };

  post(url: string, body: object, options: object) {  
    return this._http.post(this.baseUrl + url, body);
  };

  put(url: string, body: object, options: object) {
    return this._http.put(this.baseUrl + url, body);
  };

  del(url: string) {
    return this._http.delete(this.baseUrl + url);
  };
}