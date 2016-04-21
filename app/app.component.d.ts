import { Router, Location } from 'angular2/router';
import { AuthService } from 'app/global/services/auth.service';
export declare class AppComponent {
    private _location;
    private _authService;
    private _router;
    constructor(_location: Location, _authService: AuthService, _router: Router);
    ngOnInit(): void;
    authenticationCheck(): any;
}
