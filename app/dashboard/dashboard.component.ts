import { Component } from 'angular2/core';
import { RouteConfig, RouterLink, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';
import { DataComponent } from 'app/data/data.component'
@Component({
  selector: 'ug-dashboard',
  directives: [ ROUTER_DIRECTIVES, RouterLink ],
  providers: [ ROUTER_PROVIDERS ],
  templateUrl: 'app/left-nav/left-nav.component.html',
  styleUrls: [ 'app/left-nav/left-nav.component.css' ]

})

export class DashboardComponent { 


}