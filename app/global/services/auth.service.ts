import { Injectable, Inject } from 'angular2/core';
import { Response } from 'angular2/http';
import { UGHttpService } from './ug-http.service';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthService {
  
  access_token: string;
  maxTokenAge: number;

  constructor (private _http: UGHttpService) {    
    this.access_token = localStorage.getItem('token');    
  }

  login(username, password) {
    let credentials = {
      "grant_type": "password",
      "username": username,
      "password": password
    };

    let observable: Observable<Object> = this._http.post('/token', credentials)
      .map(
        (res: Response) => {
          this.setToken(res.json().access_token);
          return res.json().access_token;
        },
        (err: string) => 'Invalid username or password'
      );

    return observable;       
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('lastLogin');
    delete this.access_token;
    this._http.delete('Authorization');
  }

  getToken() {
    return this.access_token;
  }

  private setToken (token: string) {
    localStorage.setItem('token', token);
    localStorage.setItem('lastLogin', Date.now().toString());
    this.access_token = token;
    this._http.setToken(token);

    this._http.get('/users')
    .subscribe(res=>console.log(res));
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

  setMaxTokenAge (maxTokenAge: number) {
    this.maxTokenAge = maxTokenAge;
  }

}