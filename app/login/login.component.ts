import { Component } from 'angular2/core';
import { Router } from 'angular2/router';
import { AuthService } from '../global/services/auth.service';

@Component({
  selector: 'ug-login',
  templateUrl: 'app/login/login.component.html',
  styleUrls: [ 'app/login/login.component.css' ]
})

export class LoginComponent { 

  username: string;
  password: string;
  error: string;

  constructor (private _authService: AuthService, private _router: Router) {
    
  }

  ngOnInit () {
    if (this._authService.isAuthenticated()) {
      this._router.navigate(['Dashboard']);
    }
  }

  login () {

    if (!this.username || !this.password) {
      this.error = 'Username and Password Required';
    } else {
      !this.error;
      console.log(this._authService.login)
      this._authService.login(this.username, this.password)
        .subscribe (
          res => this._router.navigate(['Dashboard']),
          err => {
            this.error = 'Invalid Username or Password'
            console.log(err)
          }
        )
    }
  }

  onKey(event){
    if (event.keyCode == 13) {
      this.login();      
    }
  }

}
