System.register(['angular2/core', 'angular2/router', '../global/services/auth.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, auth_service_1;
    var LoginComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (auth_service_1_1) {
                auth_service_1 = auth_service_1_1;
            }],
        execute: function() {
            LoginComponent = (function () {
                function LoginComponent(_authService, _router) {
                    this._authService = _authService;
                    this._router = _router;
                }
                LoginComponent.prototype.ngOnInit = function () {
                    if (this._authService.isAuthenticated()) {
                        this._router.navigate(['Dashboard']);
                    }
                };
                LoginComponent.prototype.login = function () {
                    var _this = this;
                    if (!this.username || !this.password) {
                        this.errorMsg = 'Username and Password Required';
                    }
                    else {
                        !this.errorMsg;
                        this._authService.login(this.username, this.password)
                            .subscribe(function (res) { return _this._router.navigate(['Dashboard']); }, function (err) {
                            _this.errorMsg = 'Invalid Username or Password';
                            console.log(err);
                        });
                    }
                };
                LoginComponent.prototype.onKey = function (event) {
                    if (event.keyCode == 13) {
                        this.login();
                    }
                };
                LoginComponent = __decorate([
                    core_1.Component({
                        selector: 'ug-login',
                        templateUrl: 'app/login/login.component.html',
                        styleUrls: ['app/login/login.component.css']
                    }), 
                    __metadata('design:paramtypes', [auth_service_1.AuthService, router_1.Router])
                ], LoginComponent);
                return LoginComponent;
            }());
            exports_1("LoginComponent", LoginComponent);
        }
    }
});
//# sourceMappingURL=login.component.js.map