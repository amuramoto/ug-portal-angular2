import { Injectable, Inject } from 'angular2/core';
import { UGHttpClient } from 'app/http/ug-http.service';

@Injectable()
export class LoginService {
  
  constructor (@Inject(UGHttpClient) private _http: UGHttpClient) {
    this.access_token;
  }

  login(username, password) {

    let body = {
      "grant_type": "password",
      "username": username,
      "password": password
    };

    return this._http.post('/token', body)
      .map(
        res => this.setToken(res.json().access_token),
        err => console.log(err),
        () => console.log('login successful')
      )
  }

  logout() {

  }

  getToken() {
    return this.access_token;
  }

  setToken (token: string) {
  console.log(token);
    this.access_token = token;
  }

  isAuthenticated (token: string) {
    return this._authenticated;
  }

}