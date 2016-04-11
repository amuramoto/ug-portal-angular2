import {Component} from 'angular2/core';

@Component({
  selector: 'ug-left-nav',
  templateUrl: 'app/left-nav/left-nav.component.html',
  styleUrls: ['app/left-nav/left-nav.component.css']

})
export class LeftNavComponent { 

    menuItems = [
        'Data',
        'Users',
        'Push Notifications'
    ]

}