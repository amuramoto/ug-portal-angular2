System.register(['angular2/core', 'angular2/http'], function(exports_1, context_1) {
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
    var core_1, http_1;
    var UGHttpService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            UGHttpService = (function () {
                function UGHttpService(_http) {
                    this._http = _http;
                    this.headers = new http_1.Headers();
                }
                UGHttpService.prototype.get = function (url) {
                    var observable = this._http.get(this.baseUrl + url);
                    return observable;
                };
                ;
                UGHttpService.prototype.post = function (url, body) {
                    var observable = this._http.post(this.baseUrl + url, JSON.stringify(body));
                    return observable;
                };
                ;
                UGHttpService.prototype.put = function (url, body) {
                    var observable = this._http.put(this.baseUrl + url, JSON.stringify(body));
                    return observable;
                };
                ;
                UGHttpService.prototype.delete = function (url) {
                    var observable = this._http.delete(this.baseUrl + url);
                    return observable;
                };
                ;
                UGHttpService.prototype.setToken = function (token) {
                    this.headers.append('Authorization', token);
                };
                UGHttpService.prototype.setBaseUrl = function (url) {
                    this.baseUrl = url;
                };
                UGHttpService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], UGHttpService);
                return UGHttpService;
            }());
            exports_1("UGHttpService", UGHttpService);
        }
    }
});
//# sourceMappingURL=ug-http.service.js.map