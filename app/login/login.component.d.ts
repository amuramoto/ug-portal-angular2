import { Router } from 'angular2/router';
import { AuthService } from '../global/services/auth.service';
export declare class LoginComponent {
    private _authService;
    private _router;
    username: string;
    password: string;
    errorMsg: string;
    constructor(_authService: AuthService, _router: Router);
    ngOnInit(): void;
    login(): void;
    onKey(event: any): void;
}
