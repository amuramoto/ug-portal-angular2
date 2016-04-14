System.register(['angular2/core', 'angular2/router', 'app/left-nav/left-nav.component', 'app/top-nav/top-nav.component', 'app/login/login.component', 'app/data/data.component', 'app/dashboard/dashboard.component'], function(exports_1, context_1) {
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
    var core_1, router_1, left_nav_component_1, top_nav_component_1, login_component_1, data_component_1, dashboard_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (left_nav_component_1_1) {
                left_nav_component_1 = left_nav_component_1_1;
            },
            function (top_nav_component_1_1) {
                top_nav_component_1 = top_nav_component_1_1;
            },
            function (login_component_1_1) {
                login_component_1 = login_component_1_1;
            },
            function (data_component_1_1) {
                data_component_1 = data_component_1_1;
            },
            function (dashboard_component_1_1) {
                dashboard_component_1 = dashboard_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(_location) {
                    this._location = _location;
                    this.currentPath = _location.path();
                    ;
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'ug-portal',
                        templateUrl: 'app/app.component.html',
                        styleUrls: ['app/app.component.css'],
                        directives: [router_1.ROUTER_DIRECTIVES, left_nav_component_1.LeftNavComponent, top_nav_component_1.TopNavComponent]
                    }),
                    router_1.RouteConfig([
                        { path: '/', name: 'Test', component: dashboard_component_1.DashboardComponent, useAsDefault: true },
                        { path: '/login', name: 'Login', component: login_component_1.LoginComponent },
                        { path: '/data', name: 'Data', component: data_component_1.DataComponent }
                    ]), 
                    __metadata('design:paramtypes', [router_1.Location])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map