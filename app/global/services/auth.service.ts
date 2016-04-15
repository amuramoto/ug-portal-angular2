import { Injectable, Inject } from 'angular2/core';
import { UGHttpService } from 'app/global/services/ug-http.service';

@Injectable()
export class AuthService {
  
  constructor (@Inject(UGHttpService) private _http: UGHttpService) {    
    this.access_token;
  }

  login(username, password) {
    let credentials = {
      "grant_type": "password",
      "username": username,
      "password": password
    };

    return this._http.post('/token', credentials)
      .map(res => {
        this.setToken(res.json().access_token);        
        return res.json().access_token
        },
        err => 'sbsegbr')       
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
    if (!this.access_token) {    
      return false;
    }
    return true;
  }

}