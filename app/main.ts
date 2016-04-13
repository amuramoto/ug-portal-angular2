import {AppComponent} from './app.component';
import 'rxjs/Rx';
import { UGHttpClient } from 'app/http/ug-http.service';
import { Http, Headers, HTTP_BINDINGS } from 'angular2/http';
import {bootstrap}    from 'angular2/platform/browser';
import {ROUTER_PROVIDERS} from 'angular2/router';

bootstrap(AppComponent, [ROUTER_PROVIDERS, UGHttpClient, Http, HTTP_BINDINGS]);