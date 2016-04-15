import { Component } from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, Location } from 'angular2/router';
import { LeftNavComponent } from 'app/left-nav/left-nav.component';
import { TopNavComponent } from 'app/top-nav/top-nav.component';
import { LoginComponent } from 'app/login/login.component';
import { DataComponent } from 'app/data/data.component';
import { DashboardComponent } from 'app/dashboard/dashboard.component'

@Component({
  selector: 'ug-portal',
  templateUrl: 'app/app.component.html',
  styleUrls: ['app/app.component.css'],
  directives: [ROUTER_DIRECTIVES, LeftNavComponent, TopNavComponent]  
})
@RouteConfig([
  {path:'/', name: 'Test', component: DashboardComponent, useAsDefault: true},
  {path:'/login', name: 'Login', component: LoginComponent}
  {path:'/data', name: 'Data', component: DataComponent}
])

export class AppComponent { 

  constructor (private _location: Location) { 
    this.loginComponentEnabled;
    let currentPath = _location.path());
    if (currentPath == '/login') {
      this.loginComponentEnabled = true;
    } else {
      !this.loginComponentEnabled
    }
  } 

}