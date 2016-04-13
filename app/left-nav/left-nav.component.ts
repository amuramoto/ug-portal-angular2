import { Component } from 'angular2/core';
import { Router, RouteConfig, RouterLink, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';
import { DataComponent } from 'app/data/data.component'
import { AppComponent } from 'app/app.component'
@Component({
  selector: 'ug-left-nav',
  directives: [ ROUTER_DIRECTIVES, RouterLink ],
  providers: [ ROUTER_PROVIDERS ],
  templateUrl: 'app/left-nav/left-nav.component.html',
  styleUrls: [ 'app/left-nav/left-nav.component.css' ]

})
@RouteConfig([
  {path:'/', name: 'Test', component: AppComponent, useAsDefault: true}  
])
export class LeftNavComponent { 

    constructor(private _router: Router) {}

    gotoData () {
        this._router.navigateByUrl('../Data');
    }
    menuItems = [
        'Dashboard',
        'Data',
        'Users',
        'Push Notifications',
        'Activities'
    ]

}