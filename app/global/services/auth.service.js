System.register(['angular2/core', './ug-http.service'], function(exports_1, context_1) {
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
    var core_1, ug_http_service_1;
    var AuthService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (ug_http_service_1_1) {
                ug_http_service_1 = ug_http_service_1_1;
            }],
        execute: function() {
            AuthService = (function () {
                function AuthService(_http) {
                    this._http = _http;
                    this.access_token = localStorage.getItem('token');
                }
                AuthService.prototype.login = function (username, password) {
                    var _this = this;
                    var credentials = {
                        "grant_type": "password",
                        "username": username,
                        "password": password
                    };
                    var observable = this._http.post('/token', credentials)
                        .map(function (res) {
                        _this.setToken(res.json().access_token);
                        return res.json().access_token;
                    }, function (err) { return 'Invalid username or password'; });
                    return observable;
                };
                AuthService.prototype.logout = function () {
                    localStorage.removeItem('token');
                    localStorage.removeItem('lastLogin');
                    delete this.access_token;
                    this._http.delete('Authorization');
                };
                AuthService.prototype.getToken = function () {
                    return this.access_token;
                };
                AuthService.prototype.setToken = function (token) {
                    localStorage.setItem('token', token);
                    localStorage.setItem('lastLogin', Date.now().toString());
                    this.access_token = token;
                    this._http.setToken(token);
                    this._http.get('/users')
                        .subscribe(function (res) { return console.log(res); });
                };
                AuthService.prototype.isAuthenticated = function () {
                    var lastLoginTime = localStorage.getItem('lastLogin');
                    if (!this.access_token) {
                        return false;
                    }
                    if (lastLoginTime && this.getTokenAge() > this.maxTokenAge) {
                        this.logout();
                        return false;
                    }
                    return true;
                };
                AuthService.prototype.getTokenAge = function () {
                    var loginAge = Date.now() - localStorage.getItem('lastLogin');
                    return loginAge / 1000;
                };
                AuthService.prototype.setMaxTokenAge = function (maxTokenAge) {
                    this.maxTokenAge = maxTokenAge;
                };
                AuthService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [ug_http_service_1.UGHttpService])
                ], AuthService);
                return AuthService;
            }());
            exports_1("AuthService", AuthService);
        }
    }
});
//# sourceMappingURL=auth.service.js.map