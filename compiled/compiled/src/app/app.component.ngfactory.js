/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
/* tslint:disable */
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var import0 = require("../../../src/app/app.component");
var import1 = require("@angular/core/src/linker/view");
var import3 = require("@angular/core/src/linker/view_utils");
var import4 = require("@angular/core/src/metadata/view");
var import5 = require("@angular/core/src/linker/view_container");
var import6 = require("@angular/core/src/linker/view_type");
var import7 = require("@angular/core/src/change_detection/constants");
var import8 = require("@angular/core/src/linker/component_factory");
var import9 = require("../../../src/app/global.state");
var import10 = require("../../../src/app/theme/services/baImageLoader/baImageLoader.service");
var import11 = require("../../../src/app/theme/services/baThemeSpinner/baThemeSpinner.service");
var import12 = require("../../../src/app/theme/theme.config");
var import13 = require("../../node_modules/@angular/common/src/directives/ng_class.ngfactory");
var import14 = require("./theme/directives/baThemeRun/baThemeRun.directive.ngfactory");
var import15 = require("../../node_modules/@angular/router/src/directives/router_outlet.ngfactory");
var import16 = require("@angular/core/src/change_detection/differs/iterable_differs");
var import17 = require("@angular/core/src/change_detection/differs/keyvalue_differs");
var import18 = require("@angular/core/src/linker/element_ref");
var import19 = require("../../../src/app/theme/theme.configProvider");
var import20 = require("@angular/router/src/router_outlet_map");
var import21 = require("@angular/core/src/linker/component_factory_resolver");
var import22 = require("@angular/router/src/directives/router_outlet");
var import23 = require("@angular/common/src/directives/ng_class");
var import24 = require("../../../src/app/theme/directives/baThemeRun/baThemeRun.directive");
var Wrapper_App = (function () {
    function Wrapper_App(p0, p1, p2, p3, p4) {
        this._changed = false;
        this.context = new import0.App(p0, p1, p2, p3, p4);
    }
    Wrapper_App.prototype.ngOnDetach = function (view, componentView, el) {
    };
    Wrapper_App.prototype.ngOnDestroy = function () {
    };
    Wrapper_App.prototype.ngDoCheck = function (view, el, throwOnChange) {
        var changed = this._changed;
        this._changed = false;
        return changed;
    };
    Wrapper_App.prototype.checkHost = function (view, componentView, el, throwOnChange) {
    };
    Wrapper_App.prototype.handleEvent = function (eventName, $event) {
        var result = true;
        return result;
    };
    Wrapper_App.prototype.subscribe = function (view, _eventHandler) {
        this._eventHandler = _eventHandler;
    };
    return Wrapper_App;
}());
exports.Wrapper_App = Wrapper_App;
var renderType_App_Host = import3.createRenderComponentType('', 0, import4.ViewEncapsulation.None, [], {});
var View_App_Host0 = (function (_super) {
    __extends(View_App_Host0, _super);
    function View_App_Host0(viewUtils, parentView, parentIndex, parentElement) {
        return _super.call(this, View_App_Host0, renderType_App_Host, import6.ViewType.HOST, viewUtils, parentView, parentIndex, parentElement, import7.ChangeDetectorStatus.CheckAlways) || this;
    }
    View_App_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer, 'app', import3.EMPTY_INLINE_ARRAY, rootSelector, null);
        this._vc_0 = new import5.ViewContainer(0, null, this, this._el_0);
        this.compView_0 = new View_App0(this.viewUtils, this, 0, this._el_0);
        this._App_0_5 = new Wrapper_App(this.injectorGet(import9.GlobalState, this.parentIndex), this.injectorGet(import10.BaImageLoaderService, this.parentIndex), this.injectorGet(import11.BaThemeSpinner, this.parentIndex), this._vc_0.vcRef, this.injectorGet(import12.BaThemeConfig, this.parentIndex));
        this.compView_0.create(this._App_0_5.context);
        this._el_1 = this.renderer.createTemplateAnchor(null, null);
        this.init(this._el_1, (this.renderer.directRenderer ? null : [this._el_0]), null);
        return new import8.ComponentRef_(0, this, this._el_0, this._App_0_5.context);
    };
    View_App_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import0.App) && (0 === requestNodeIndex))) {
            return this._App_0_5.context;
        }
        return notFoundResult;
    };
    View_App_Host0.prototype.detectChangesInternal = function (throwOnChange) {
        this._App_0_5.ngDoCheck(this, this._el_0, throwOnChange);
        this._vc_0.detectChangesInNestedViews(throwOnChange);
        this.compView_0.internalDetectChanges(throwOnChange);
        if (!throwOnChange) {
            if ((this.numberOfChecks === 0)) {
                this._App_0_5.context.ngAfterViewInit();
            }
        }
    };
    View_App_Host0.prototype.destroyInternal = function () {
        this._vc_0.destroyNestedViews();
        this.compView_0.destroy();
    };
    View_App_Host0.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._vc_0.nativeElement, ctx);
        this._vc_0.visitNestedViewRootNodes(cb, ctx);
        cb(this._el_1, ctx);
    };
    return View_App_Host0;
}(import1.AppView));
exports.AppNgFactory = new import8.ComponentFactory('app', View_App_Host0, import0.App);
var styles_App = [];
var renderType_App = import3.createRenderComponentType('', 0, import4.ViewEncapsulation.None, styles_App, {});
var View_App0 = (function (_super) {
    __extends(View_App0, _super);
    function View_App0(viewUtils, parentView, parentIndex, parentElement) {
        var _this = _super.call(this, View_App0, renderType_App, import6.ViewType.COMPONENT, viewUtils, parentView, parentIndex, parentElement, import7.ChangeDetectorStatus.CheckAlways) || this;
        _this._map_12 = import3.pureProxy1(function (p0) {
            return { 'menu-collapsed': p0 };
        });
        return _this;
    }
    View_App0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.parentElement);
        this._text_0 = this.renderer.createText(parentRenderNode, '\n    ', null);
        this._el_1 = import3.createRenderElement(this.renderer, parentRenderNode, 'main', new import3.InlineArray2(2, 'baThemeRun', ''), null);
        this._NgClass_1_3 = new import13.Wrapper_NgClass(this.parentView.injectorGet(import16.IterableDiffers, this.parentIndex), this.parentView.injectorGet(import17.KeyValueDiffers, this.parentIndex), new import18.ElementRef(this._el_1), this.renderer);
        this._BaThemeRun_1_4 = new import14.Wrapper_BaThemeRun(this.parentView.injectorGet(import19.BaThemeConfigProvider, this.parentIndex));
        this._text_2 = this.renderer.createText(this._el_1, '\n      ', null);
        this._el_3 = import3.createRenderElement(this.renderer, this._el_1, 'div', new import3.InlineArray2(2, 'class', 'additional-bg'), null);
        this._text_4 = this.renderer.createText(this._el_1, '\n      ', null);
        this._el_5 = import3.createRenderElement(this.renderer, this._el_1, 'router-outlet', import3.EMPTY_INLINE_ARRAY, null);
        this._vc_5 = new import5.ViewContainer(5, 1, this, this._el_5);
        this._RouterOutlet_5_5 = new import15.Wrapper_RouterOutlet(this.parentView.injectorGet(import20.RouterOutletMap, this.parentIndex), this._vc_5.vcRef, this.parentView.injectorGet(import21.ComponentFactoryResolver, this.parentIndex), null);
        this._text_6 = this.renderer.createText(this._el_1, '\n    ', null);
        this._text_7 = this.renderer.createText(parentRenderNode, '\n  ', null);
        this.init(null, (this.renderer.directRenderer ? null : [
            this._text_0,
            this._el_1,
            this._text_2,
            this._el_3,
            this._text_4,
            this._el_5,
            this._text_6,
            this._text_7
        ]), null);
        return null;
    };
    View_App0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import22.RouterOutlet) && (5 === requestNodeIndex))) {
            return this._RouterOutlet_5_5.context;
        }
        if (((token === import23.NgClass) && ((1 <= requestNodeIndex) && (requestNodeIndex <= 6)))) {
            return this._NgClass_1_3.context;
        }
        if (((token === import24.BaThemeRun) && ((1 <= requestNodeIndex) && (requestNodeIndex <= 6)))) {
            return this._BaThemeRun_1_4.context;
        }
        return notFoundResult;
    };
    View_App0.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_1_0_0 = this._map_12(this.context.isMenuCollapsed);
        this._NgClass_1_3.check_ngClass(currVal_1_0_0, throwOnChange, false);
        this._NgClass_1_3.ngDoCheck(this, this._el_1, throwOnChange);
        this._BaThemeRun_1_4.ngDoCheck(this, this._el_1, throwOnChange);
        this._RouterOutlet_5_5.ngDoCheck(this, this._el_5, throwOnChange);
        this._vc_5.detectChangesInNestedViews(throwOnChange);
        this._BaThemeRun_1_4.checkHost(this, this, this._el_1, throwOnChange);
    };
    View_App0.prototype.destroyInternal = function () {
        this._vc_5.destroyNestedViews();
        this._RouterOutlet_5_5.ngOnDestroy();
    };
    return View_App0;
}(import1.AppView));
exports.View_App0 = View_App0;
//# sourceMappingURL=app.component.ngfactory.js.map