System.register(['angular2/core', 'app/ug-settings'], function(exports_1, context_1) {
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
    var core_1, ug_settings_1;
    var UGSettings;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (ug_settings_1_1) {
                ug_settings_1 = ug_settings_1_1;
            }],
        execute: function() {
            UGSettings = (function () {
                function UGSettings() {
                    this.UGSettings = new ug_settings_1.UGSettings();
                }
                UGSettings.prototype.getUGSettings = function () {
                    return this.UGSettings;
                };
                UGSettings = __decorate([
                    core_1.Injectable, 
                    __metadata('design:paramtypes', [])
                ], UGSettings);
                return UGSettings;
            }());
            exports_1("UGSettings", UGSettings);
        }
    }
});
//# sourceMappingURL=ug-settings.service.js.map