import { AppComponent } from './app.component';
import { provide } from 'angular2/core';
import { UGHttpService } from './global/services/ug-http.service';
import { Http, Headers, HTTP_BINDINGS } from 'angular2/http';
import { bootstrap }    from 'angular2/platform/browser';
import { ROUTER_PROVIDERS, LocationStrategy, PathLocationStrategy } from 'angular2/router';
import { UGSettings } from './global/services/ug-settings.service';
import { AuthService } from './global/services/auth.service';
import 'rxjs/Rx';

bootstrap(AppComponent, 
  [
    ROUTER_PROVIDERS,
    provide(LocationStrategy, {useClass: PathLocationStrategy}), 
    UGSettings,
    UGHttpService, 
    Http, 
    HTTP_BINDINGS,
    AuthService
  ])
  .catch(err => console.error(err));