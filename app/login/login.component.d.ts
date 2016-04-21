import { Router } from 'angular2/router';
import { AuthService } from 'app/global/services/auth.service';
export declare class LoginComponent {
    private _authService;
    private _router;
    constructor(_authService: AuthService, _router: Router);
    ngOnInit(): void;
    login(): void;
    onKey(event: any): void;
}
