import { Router } from 'angular2/router';
import { AuthService } from './global/services/auth.service';
import { UGSettings } from './global/services/ug-settings.service';
export declare class AppComponent {
    private _authService;
    private _router;
    private _ugSettings;
    authenticated: boolean;
    constructor(_authService: AuthService, _router: Router, _ugSettings: UGSettings);
    ngOnInit(): void;
    authenticationCheck(): boolean;
}
