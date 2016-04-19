System.register(['./app.component', 'angular2/core', 'app/global/services/ug-settings.service', 'app/global/services/ug-http.service', 'angular2/http', 'angular2/platform/browser', 'angular2/router', 'app/global/services/auth.service', 'rxjs/Rx'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var app_component_1, core_1, ug_settings_service_1, ug_http_service_1, http_1, browser_1, router_1, auth_service_1;
    return {
        setters:[
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (ug_settings_service_1_1) {
                ug_settings_service_1 = ug_settings_service_1_1;
            },
            function (ug_http_service_1_1) {
                ug_http_service_1 = ug_http_service_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (auth_service_1_1) {
                auth_service_1 = auth_service_1_1;
            },
            function (_1) {}],
        execute: function() {
            browser_1.bootstrap(app_component_1.AppComponent, [
                router_1.ROUTER_PROVIDERS,
                core_1.provide(router_1.LocationStrategy, { useClass: router_1.PathLocationStrategy }),
                ug_settings_service_1.UGSettings,
                ug_http_service_1.UGHttpService,
                http_1.Http,
                http_1.HTTP_BINDINGS,
                auth_service_1.AuthService
            ])
                .catch(function (err) { return console.error(err); });
        }
    }
});
//# sourceMappingURL=main.js.map