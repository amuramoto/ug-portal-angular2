import { Component } from 'angular2/core';
import { Router, ROUTER_DIRECTIVES } from 'angular2/router';
import { DataComponent } from 'app/data/data.component'
import { AppComponent } from 'app/app.component'

@Component({
  selector: 'ug-left-nav',
  directives: [ ROUTER_DIRECTIVES ],
  templateUrl: 'app/left-nav/left-nav.component.html',
  styleUrls: [ 'app/left-nav/left-nav.component.css' ]

})

export class LeftNavComponent { 

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



    public setSelectedView (selectedView: string) {
        this.selectedView = selectedView;
        console.log(this.selectedView);
    }
}