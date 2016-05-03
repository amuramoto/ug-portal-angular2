import { Injectable } from 'angular2/core';
import { Http, Response } from 'angular2/http';
import { UGHttpService } from './ug-http.service';
import { AuthService } from './auth.service';

@Injectable()
export class UGSettings {

  baseUrl: string;
  maxTokenAge: number;

  constructor (private _http: Http, private _ugHttp: UGHttpService, private _auth: AuthService) {    
    
  }

  loadUGSettings () {
    this._http.get('app/ug-settings.json')      
      .subscribe(res => {
        res = res.json();
        let baseUrl: string = `${res.baseUrl}/${res.org}/${res.app}`;
        this._ugHttp.setBaseUrl(baseUrl);
        this._auth.setMaxTokenAge(res.maxTokenAge);
      });      
  }

}