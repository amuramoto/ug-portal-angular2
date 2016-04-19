System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var UGSettings;
    return {
        setters:[],
        execute: function() {
            UGSettings = (function () {
                function UGSettings() {
                    this.org = 'amuramoto';
                    this.app = 'sandbox';
                    this.baseUrl = 'http://api.usergrid.com';
                    this.apiUrl = this.baseUrl + "/" + this.org + "/" + this.app;
                    //default max token age - 3 days
                    this.maxTokenAge = 259200;
                }
                return UGSettings;
            }());
            exports_1("UGSettings", UGSettings);
        }
    }
});
//# sourceMappingURL=ug-settings.js.map