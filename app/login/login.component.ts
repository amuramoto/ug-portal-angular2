import { Component } from 'angular2/core';
import { LoginService } from 'app/login/login.service';

@Component({
  selector: 'ug-login',
  providers: [LoginService],
  templateUrl: 'app/login/login.component.html',
  styleUrls: [ 'app/login/login.component.css' ]
})

export class LoginComponent { 

  constructor (private _loginService: LoginService) {
    this.username;
    this.password;
  }

  login () {
    this._loginService.login(this.username, this.password)
      .subscribe (
        res => console.log(res),
        err => console.log(err)
      )
  }

}
