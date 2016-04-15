import { AppComponent } from './app.component';
import { provide } from 'angular2/core';
import { UGHttpClient } from 'app/http/ug-http.service';
import { Http, Headers, HTTP_BINDINGS } from 'angular2/http';
import { bootstrap }    from 'angular2/platform/browser';
import { ROUTER_PROVIDERS, LocationStrategy, PathLocationStrategy } from 'angular2/router';
import 'rxjs/Rx';

bootstrap(AppComponent, 
  [
    ROUTER_PROVIDERS,
    provide(LocationStrategy, {useClass: PathLocationStrategy}), 
    UGHttpClient, Http, HTTP_BINDINGS
  ])
  .catch(err => console.error(err));