import { Component } from 'angular2/core';
import { Router, RouteConfig, ROUTER_DIRECTIVES } from 'angular2/router';
import { LeftNavComponent } from './left-nav/left-nav.component';
import { TopNavComponent } from './top-nav/top-nav.component';
import { DataComponent } from './data/data.component';
import { DashboardComponent } from './dashboard/dashboard.component'
import { LoginComponent } from './login/login.component'
import { AuthService } from './global/services/auth.service';

@Component({
  selector: 'ug-portal',
  templateUrl: 'app/app.component.html',
  styleUrls: ['app/app.component.css'],
  directives: [ROUTER_DIRECTIVES, LeftNavComponent, TopNavComponent]
})
@RouteConfig([
  {path:'/dashboard', name: 'Dashboard', component: DashboardComponent, useAsDefault: true},
  {path:'/login', name: 'Login', component: LoginComponent},
  {path:'/data', name: 'Data', component: DataComponent}
])

export class AppComponent { 
  authenticated:boolean;
  constructor (private _authService: AuthService, private _router: Router) { 
    this.authenticated;    
  } 

  ngOnInit(){
    // Always check if user is authenticated
    this._router.subscribe(
      next => {
        let authStatus = this.authenticationCheck();        
        if (!authStatus && !this._router.isRouteActive(this._router.generate(['Login']))) {
          this._router.navigate(['Login']);
        }
      }
    )    
  }

  authenticationCheck () {
    let authStatus = this._authService.isAuthenticated();
    this.authenticated = authStatus;    
    return authStatus;
  }

}