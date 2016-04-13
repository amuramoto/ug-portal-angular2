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
                }
                LoginService.prototype.login = function (username, password) {
                    var body = {
                        "grant_type": "password",
                        "username": "username",
                        "password": password
                    };
                    this._http.post('/token', body)
                        .map(function (res) { return console.log(res.json()); }, function (err) { return console.log(err); }, function () { return console.log('login successful'); });
                };
                LoginService.prototype.logout = function () {
                };
                LoginService.prototype.getToken = function () {
                    return this._token;
                };
                LoginService.prototype.setToken = function (token) {
                    this._token = token;
                };
                LoginService.prototype.isAuthenticated = function (token) {
                    return this._authenticated;
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