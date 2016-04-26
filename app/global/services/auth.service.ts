import { Injectable, Inject } from 'angular2/core';
import { UGHttpService } from './ug-http.service';
import { UGSettings } from './ug-settings.service';

@Injectable()
export class AuthService {
  
  access_token: string;
  maxTokenAge: number;

  constructor (private _http: UGHttpService, private _ugSettings: UGSettings) {    
    this.access_token = localStorage.getItem('token');
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
    localStorage.removeItem('lastLogin');
    delete this.access_token;
  }

  getToken() {
    if (!this.isAuthenticated) {
      return false;
    } 
    return this.access_token;
  }

  private setToken (token: string) {
    localStorage.setItem('token', token);
    localStorage.setItem('lastLogin', Date.now().toString());
    this.access_token = token;
  }

  isAuthenticated () {
    
    let lastLoginTime = localStorage.getItem('lastLogin');
    
    if (!this.access_token) {    
      return false;
    }

    if (lastLoginTime && this.getTokenAge() > this.maxTokenAge) {
      this.logout();
      return false;
    }
    
    return true;
  }

  getTokenAge () {
    let loginAge = Date.now() - localStorage.getItem('lastLogin');
    //return age in seconds
    return loginAge/1000;
  }

}