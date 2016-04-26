import { Router } from 'angular2/router';
import { AuthService } from './global/services/auth.service';
export declare class AppComponent {
    private _authService;
    private _router;
    authenticated: boolean;
    constructor(_authService: AuthService, _router: Router);
    ngOnInit(): void;
    authenticationCheck(): boolean;
}
