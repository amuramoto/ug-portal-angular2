System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var UGSettings;
    return {
        setters:[],
        execute: function() {
            UGSettings = (function () {
                function UGSettings() {
                    var org = 'amuramoto';
                    var app = 'sandbox';
                    var baseurl = 'http://api.usergrid.com';
                    this.apiUrl = baseurl + "/" + org + "/" + app + "/";
                }
                return UGSettings;
            }());
            exports_1("UGSettings", UGSettings);
        }
    }
});
//# sourceMappingURL=ug-settings.service.js.map