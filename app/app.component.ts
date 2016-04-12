import { Component } from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES } from 'angular2/router';
import { LeftNavComponent } from 'app/left-nav/left-nav.component';
import { TopNavComponent } from 'app/top-nav/top-nav.component';
import { DataComponent } from 'app/data/data.component'

@Component({
  selector: 'ug-portal',
  templateUrl: 'app/app.component.html',
  styleUrls: ['app/app.component.css'],
  directives: [ROUTER_DIRECTIVES, LeftNavComponent, TopNavComponent]  
})
@RouteConfig([
  {path:'/data', name: 'Data', component: DataComponent}
])

export class AppComponent { }