import { Injectable, Inject } from 'angular2/core';
import { Http, Headers, Response } from 'angular2/http';
import { Observable } from 'rxjs/Observable';
import { UGSettings } from './ug-settings.service';

@Injectable()
export class UGHttpService {

  baseUrl: string;
  headers: Headers;

  constructor(private _http: Http) {
    this.headers = new Headers();
  }

  get (url: string) {
    let observable: Observable<Object> = this._http.get(this.baseUrl + url);
    return observable;
  };

  post (url: string, body: Object) {  
    let observable: Observable<Object> = this._http.post(this.baseUrl + url, JSON.stringify(body));
    return observable;
  };

  put (url: string, body: Object) {
    let observable: Observable<Object> = this._http.put(this.baseUrl + url, JSON.stringify(body))
    return observable;
  };

  delete (url: string) {
    let observable: Observable<Object> = this._http.delete(this.baseUrl + url);
    return observable;
  };

  setToken (token: string) {
    this.headers.append('Authorization', token);
  }

  setBaseUrl (url: string) {
    this.baseUrl = url;
  }
}