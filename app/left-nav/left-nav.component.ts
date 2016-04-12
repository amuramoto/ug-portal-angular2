import { Component } from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';
import { DataComponent } from '../data/data.component'

@Component({
  selector: 'ug-left-nav',
  directives: [ ROUTER_DIRECTIVES ],
  providers: [ ROUTER_PROVIDERS ],
  templateUrl: 'app/left-nav/left-nav.component.html',
  styleUrls: [ 'app/left-nav/left-nav.component.css' ]

})



export class LeftNavComponent { 

    menuItems = [
        'Dashboard',
        'Data',
        'Users',
        'Push Notifications',
        'Activities'
    ]

}