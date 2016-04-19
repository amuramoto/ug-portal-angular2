import { Injectable, Inject } from 'angular2/core';
import { UGHttpService } from 'app/global/services/ug-http.service';
import { UGSettings } from 'app/global/services/ug-settings.service';

@Injectable()
export class AuthService {
  
  constructor (private _http: UGHttpService, private _ugSettings: UGSettings) {    
    this.access_token;
    this.maxTokenAge = _ugSettings.getUGSettings().maxTokenAge;
  }

  login(username, password) {
    let credentials = {
      "grant_type": "password",
      "username": username,
      "password": password
    };

    return this._http.post('/token', credentials)
      .map(
        res => {
          this.setToken(res.json().access_token);                  
          return res.json().access_token;
        },
        err => 'Invalid username or password'
      )       
  }

  logout() {
    localStorage.removeItem('token');
    delete this.access_token;
  }

  getToken() {
    return this.access_token;
  }

  private setToken (token: string) {
    localStorage.setItem('token', token);
    localStorage.setItem('lastLogin', Date.now());
    this.access_token = token;
  }

  isAuthenticated (token: string) {
    
    let lastLoginTime = localStorage.getItem('lastLogin');

    if (!this.access_token) {    
      return false;
    }

    if (lastLoginTime && this.getTokenAge() > this.maxTokenAge) {
    console.log('ok')
      return false;
    }
    
    return true;
  }

  getTokenAge (timestamp) {
    let loginAge = Date.now() - localStorage.getItem('lastLogin');
    //return age in seconds
    return loginAge/1000;
  }

}