import { Component } from 'angular2/core';
import { Router, RouteConfig, ROUTER_DIRECTIVES, Location } from 'angular2/router';
import { LeftNavComponent } from 'app/left-nav/left-nav.component';
import { TopNavComponent } from 'app/top-nav/top-nav.component';
import { LoginComponent } from 'app/login/login.component';
import { DataComponent } from 'app/data/data.component';
import { DashboardComponent } from 'app/dashboard/dashboard.component'
import { LoginService } from 'app/login/login.service';

@Component({
  selector: 'ug-portal',
  templateUrl: 'app/app.component.html',
  styleUrls: ['app/app.component.css'],
  directives: [ROUTER_DIRECTIVES, LeftNavComponent, TopNavComponent],  
  providers: [LoginService]
})
@RouteConfig([
  {path:'/', name: 'Dashboard', component: DashboardComponent, useAsDefault: true},
  {path:'/login', name: 'Login', component: LoginComponent}
  {path:'/data', name: 'Data', component: DataComponent}
])

export class AppComponent { 

  constructor (private _location: Location, private _loginService: LoginService, private _router: Router) { 
    this.authenticated;    
  } 

  ngOnInit(){
    // Always check if user is authenticated
    this._router.subscribe(
      next => {
        let authStatus = this.authenticationCheck();
        if (!authStatus && !router.isRouteActive(router.generate(['/login']))) {
          this._router.navigate(['Login']);
        }
      }
    )    
  }

  authenticationCheck () {
    let authStatus = this._loginService.isAuthenticated();
    this.authenticated = authStatus;    
    return authStatus;
  }

}