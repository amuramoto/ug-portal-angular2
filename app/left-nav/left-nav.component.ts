import { Component } from 'angular2/core';
import { Router, ROUTER_DIRECTIVES } from 'angular2/router';
import { DataComponent } from '../data/data.component'

@Component({
  selector: 'ug-left-nav',
  directives: [ ROUTER_DIRECTIVES ],
  templateUrl: 'app/left-nav/left-nav.component.html',
  styleUrls: [ 'app/left-nav/left-nav.component.css' ]

})

export class LeftNavComponent { 

    menuItems: Array<string>;
    selectedComponent: string;

    constructor(private _router: Router) {
      _router.subscribe((url) => {          
        _router.recognize(url).then((instruction) => {              
          console.log(instruction);
        });
      });

 
      this.menuItems = [
        'Dashboard',
        'Data',
        'Users',
        'Push Notifications',
        'Activities'
      ]
    }



    public setSelectedComponent (selectedComponent: string) {
        this.selectedComponent = selectedComponent;        
    }
}