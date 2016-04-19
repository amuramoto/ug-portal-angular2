import { Component } from 'angular2/core';
import { Router } from 'angular2/router';
import { AuthService } from 'app/global/services/auth.service';

@Component({
  selector: 'ug-login',
  templateUrl: 'app/login/login.component.html',
  styleUrls: [ 'app/login/login.component.css' ]
})

export class LoginComponent { 

  constructor (private _authService: AuthService, private _router: Router) {
    this.username;
    this.password;
  }

  login () {
    this._authService.login(this.username, this.password)
      .subscribe (
        res => this._router.navigate(['Dashboard']),
        err => console.log(err)
      )
  }

}
