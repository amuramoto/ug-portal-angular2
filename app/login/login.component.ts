import { Component } from 'angular2/core';
import { Router } from 'angular2/router';
import { LoginService } from 'app/login/login.service';

@Component({
  selector: 'ug-login',
  providers: [LoginService],
  templateUrl: 'app/login/login.component.html',
  styleUrls: [ 'app/login/login.component.css' ]
})

export class LoginComponent { 

  constructor (private _loginService: LoginService, private _router: Router) {
    this.username;
    this.password;
  }

  login () {
    this._loginService.login(this.username, this.password)
      .subscribe (
        res => this._router.navigate(['/Dashboard']),
        err => console.log(err)
      )
  }

}
