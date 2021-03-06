/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
/* tslint:disable */
"use strict";
var import0 = require("../../../../../../src/app/theme/directives/baSlimScroll/baSlimScroll.directive");
var import1 = require("@angular/core/src/change_detection/change_detection_util");
var import3 = require("@angular/core/src/linker/view_utils");
var Wrapper_BaSlimScroll = (function () {
    function Wrapper_BaSlimScroll(p0) {
        this._changed = false;
        this._changes = {};
        this.context = new import0.BaSlimScroll(p0);
        this._expr_0 = import1.UNINITIALIZED;
    }
    Wrapper_BaSlimScroll.prototype.ngOnDetach = function (view, componentView, el) {
    };
    Wrapper_BaSlimScroll.prototype.ngOnDestroy = function () {
    };
    Wrapper_BaSlimScroll.prototype.check_baSlimScrollOptions = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || import3.checkBinding(throwOnChange, this._expr_0, currValue))) {
            this._changed = true;
            this.context.baSlimScrollOptions = currValue;
            this._changes['baSlimScrollOptions'] = new import1.SimpleChange(this._expr_0, currValue);
            this._expr_0 = currValue;
        }
    };
    Wrapper_BaSlimScroll.prototype.ngDoCheck = function (view, el, throwOnChange) {
        var changed = this._changed;
        this._changed = false;
        if (!throwOnChange) {
            if (changed) {
                this.context.ngOnChanges(this._changes);
                this._changes = {};
            }
        }
        return changed;
    };
    Wrapper_BaSlimScroll.prototype.checkHost = function (view, componentView, el, throwOnChange) {
    };
    Wrapper_BaSlimScroll.prototype.handleEvent = function (eventName, $event) {
        var result = true;
        return result;
    };
    Wrapper_BaSlimScroll.prototype.subscribe = function (view, _eventHandler) {
        this._eventHandler = _eventHandler;
    };
    return Wrapper_BaSlimScroll;
}());
exports.Wrapper_BaSlimScroll = Wrapper_BaSlimScroll;
//# sourceMappingURL=baSlimScroll.directive.ngfactory.js.map