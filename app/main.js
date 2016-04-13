System.register(['./app.component', 'rxjs/Rx', 'app/http/ug-http.service', 'angular2/http', 'angular2/platform/browser', 'angular2/router'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var app_component_1, ug_http_service_1, http_1, browser_1, router_1;
    return {
        setters:[
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            },
            function (_1) {},
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
            }],
        execute: function() {
            browser_1.bootstrap(app_component_1.AppComponent, [router_1.ROUTER_PROVIDERS, ug_http_service_1.UGHttpClient, http_1.Http, http_1.HTTP_BINDINGS]);
        }
    }
});
//# sourceMappingURL=main.js.map