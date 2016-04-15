System.register(['angular2/core', 'app/http/ug-http.service'], function(exports_1, context_1) {
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
    var __param = (this && this.__param) || function (paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    };
    var core_1, ug_http_service_1;
    var LoginService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (ug_http_service_1_1) {
                ug_http_service_1 = ug_http_service_1_1;
            }],
        execute: function() {
            LoginService = (function () {
                function LoginService(_http) {
                    this._http = _http;
                    this.access_token;
                }
                LoginService.prototype.login = function (username, password) {
                    var _this = this;
                    var credentials = {
                        "grant_type": "password",
                        "username": username,
                        "password": password
                    };
                    return this._http.post('/token', credentials)
                        .map(function (res) {
                        _this.setToken(res.json().access_token);
                        return res.json().access_token;
                    }, function (err) { return 'sbsegbr'; });
                };
                LoginService.prototype.logout = function () {
                };
                LoginService.prototype.getToken = function () {
                    return this.access_token;
                };
                LoginService.prototype.setToken = function (token) {
                    this.access_token = token;
                };
                LoginService.prototype.isAuthenticated = function (token) {
                    if (!this.access_token) {
                        return false;
                    }
                    return true;
                };
                LoginService = __decorate([
                    core_1.Injectable(),
                    __param(0, core_1.Inject(ug_http_service_1.UGHttpClient)), 
                    __metadata('design:paramtypes', [(typeof (_a = typeof ug_http_service_1.UGHttpClient !== 'undefined' && ug_http_service_1.UGHttpClient) === 'function' && _a) || Object])
                ], LoginService);
                return LoginService;
                var _a;
            }());
            exports_1("LoginService", LoginService);
        }
    }
});
//# sourceMappingURL=login.service.js.map