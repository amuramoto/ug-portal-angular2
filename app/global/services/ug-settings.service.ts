import { Injectable } from 'angular2/core';
import { Http, Response } from 'angular2/http';

@Injectable()
export class UGSettings {

  baseUrl: string;
  maxTokenAge: number;

  constructor (private _http: Http) {
    this._http.get('/app/ug-settings.json')
      .map((res: Response) => {
        let ugSettings = res.json();
        this.baseUrl = `${ugSettings.baseUrl}/${ugSettings.org}/${ugSettings.app}`;  
        this.maxTokenAge = ugSettings.maxTokenAge;
      });
  }

  getBaseUrl () {
    return this.baseUrl;
  }

  getMaxTokenAge () {
    return this.maxTokenAge;
  }
}