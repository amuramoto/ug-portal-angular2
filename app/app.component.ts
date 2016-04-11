import {Component} from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';
import { LeftNavComponent } from 'app/left-nav/left-nav.component';
import { TopNavComponent } from 'app/top-nav/top-nav.component';

@Component({
  directives: [ROUTER_DIRECTIVES, LeftNavComponent, TopNavComponent],
  providers: [
    ROUTER_PROVIDERS
  ]
  selector: 'ug-portal',
  templateUrl: 'app/app.component.html',
  styleUrls: ['app/app.component.css']
})
export class AppComponent { }