import { Injectable, Inject } from 'angular2/core';
import { UGHttpClient } from 'app/http/ug-http.service';

@Injectable()
export class LoginService {
  
  constructor (@Inject(UGHttpClient) private _http: UGHttpClient) {}

  login(username: string, password: string) {
    
    let body = {
      "grant_type": "password",
      "username": "username",
      "password": password
    };

    this._http.post('/token', body)
      .map(
        res => console.log(res.json()),
        err => console.log(err),
        () => console.log('login successful')
      )
  }

  logout() {

  }

  getToken() {
    return this._token;
  }

  private setToken (token: string) {
    this._token = token;
  }

  isAuthenticated (token: string) {
    return this._authenticated;
  }

}