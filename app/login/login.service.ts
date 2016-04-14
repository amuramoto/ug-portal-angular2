import { Injectable, Inject } from 'angular2/core';
import { UGHttpClient } from 'app/http/ug-http.service';

@Injectable()
export class LoginService {
  
  constructor (@Inject(UGHttpClient) private _http: UGHttpClient) {
    this.access_token;
  }

  login(username, password) {
    let credentials = {
      "grant_type": "password",
      "username": username,
      "password": password
    };

    return this._http.post('/token', credentials)
      .map(res => res.json().access_token)       
  }

  logout() {

  }

  getToken() {
    return this.access_token;
  }

  private setToken (token: string) {
    this.access_token = token;
  }

  isAuthenticated (token: string) {
    return this._authenticated;
  }

}