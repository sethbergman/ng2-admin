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
var import0 = require("../../../../../../src/app/theme/components/baSidebar/baSidebar.component");
var import1 = require("@angular/core/src/linker/view");
var import3 = require("@angular/core/src/linker/view_utils");
var import4 = require("@angular/core/src/metadata/view");
var import5 = require("@angular/core/src/linker/view_type");
var import6 = require("@angular/core/src/change_detection/constants");
var import7 = require("@angular/core/src/linker/component_factory");
var import8 = require("@angular/core/src/linker/element_ref");
var import9 = require("../../../../../../src/app/global.state");
var import10 = require("../../../../../../src/app/theme/components/baMenu/baMenu.component");
var import11 = require("../baMenu/baMenu.component.ngfactory");
var import12 = require("@angular/router/src/router");
var import13 = require("../../../../../../src/app/theme/services/baMenu/baMenu.service");
var Wrapper_BaSidebar = (function () {
    function Wrapper_BaSidebar(p0, p1) {
        this._changed = false;
        this.context = new import0.BaSidebar(p0, p1);
    }
    Wrapper_BaSidebar.prototype.ngOnDetach = function (view, componentView, el) {
    };
    Wrapper_BaSidebar.prototype.ngOnDestroy = function () {
    };
    Wrapper_BaSidebar.prototype.ngDoCheck = function (view, el, throwOnChange) {
        var changed = this._changed;
        this._changed = false;
        if (!throwOnChange) {
            if ((view.numberOfChecks === 0)) {
                this.context.ngOnInit();
            }
        }
        return changed;
    };
    Wrapper_BaSidebar.prototype.checkHost = function (view, componentView, el, throwOnChange) {
    };
    Wrapper_BaSidebar.prototype.handleEvent = function (eventName, $event) {
        var result = true;
        if ((eventName == 'window:resize')) {
            var pd_sub_0 = (this.context.onWindowResize() !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    Wrapper_BaSidebar.prototype.subscribe = function (view, _eventHandler) {
        this._eventHandler = _eventHandler;
    };
    return Wrapper_BaSidebar;
}());
exports.Wrapper_BaSidebar = Wrapper_BaSidebar;
var renderType_BaSidebar_Host = import3.createRenderComponentType('', 0, import4.ViewEncapsulation.None, [], {});
var View_BaSidebar_Host0 = (function (_super) {
    __extends(View_BaSidebar_Host0, _super);
    function View_BaSidebar_Host0(viewUtils, parentView, parentIndex, parentElement) {
        return _super.call(this, View_BaSidebar_Host0, renderType_BaSidebar_Host, import5.ViewType.HOST, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways) || this;
    }
    View_BaSidebar_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer, 'ba-sidebar', import3.EMPTY_INLINE_ARRAY, rootSelector, null);
        this.compView_0 = new View_BaSidebar0(this.viewUtils, this, 0, this._el_0);
        this._BaSidebar_0_3 = new Wrapper_BaSidebar(new import8.ElementRef(this._el_0), this.injectorGet(import9.GlobalState, this.parentIndex));
        this.compView_0.create(this._BaSidebar_0_3.context);
        var disposable_0 = import3.subscribeToRenderElement(this, this._el_0, new import3.InlineArray2(2, 'resize', 'window'), this.eventHandler(this.handleEvent_0));
        this.init(this._el_0, (this.renderer.directRenderer ? null : [this._el_0]), [disposable_0]);
        return new import7.ComponentRef_(0, this, this._el_0, this._BaSidebar_0_3.context);
    };
    View_BaSidebar_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import0.BaSidebar) && (0 === requestNodeIndex))) {
            return this._BaSidebar_0_3.context;
        }
        return notFoundResult;
    };
    View_BaSidebar_Host0.prototype.detectChangesInternal = function (throwOnChange) {
        this._BaSidebar_0_3.ngDoCheck(this, this._el_0, throwOnChange);
        this.compView_0.internalDetectChanges(throwOnChange);
        if (!throwOnChange) {
            if ((this.numberOfChecks === 0)) {
                this._BaSidebar_0_3.context.ngAfterViewInit();
            }
        }
    };
    View_BaSidebar_Host0.prototype.destroyInternal = function () {
        this.compView_0.destroy();
    };
    View_BaSidebar_Host0.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    View_BaSidebar_Host0.prototype.handleEvent_0 = function (eventName, $event) {
        this.compView_0.markPathToRootAsCheckOnce();
        var result = true;
        result = (this._BaSidebar_0_3.handleEvent(eventName, $event) && result);
        return result;
    };
    return View_BaSidebar_Host0;
}(import1.AppView));
exports.BaSidebarNgFactory = new import7.ComponentFactory('ba-sidebar', View_BaSidebar_Host0, import0.BaSidebar);
var styles_BaSidebar = [];
var renderType_BaSidebar = import3.createRenderComponentType('', 0, import4.ViewEncapsulation.None, styles_BaSidebar, {});
var View_BaSidebar0 = (function (_super) {
    __extends(View_BaSidebar0, _super);
    function View_BaSidebar0(viewUtils, parentView, parentIndex, parentElement) {
        return _super.call(this, View_BaSidebar0, renderType_BaSidebar, import5.ViewType.COMPONENT, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways) || this;
    }
    View_BaSidebar0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.parentElement);
        this._el_0 = import3.createRenderElement(this.renderer, parentRenderNode, 'aside', new import3.InlineArray4(4, 'class', 'al-sidebar', 'sidebarResize', ''), null);
        this._text_1 = this.renderer.createText(this._el_0, '\n  ', null);
        this._el_2 = import3.createRenderElement(this.renderer, this._el_0, 'ba-menu', import3.EMPTY_INLINE_ARRAY, null);
        this.compView_2 = new import11.View_BaMenu0(this.viewUtils, this, 2, this._el_2);
        this._BaMenu_2_3 = new import11.Wrapper_BaMenu(this.parentView.injectorGet(import12.Router, this.parentIndex), this.parentView.injectorGet(import13.BaMenuService, this.parentIndex), this.parentView.injectorGet(import9.GlobalState, this.parentIndex));
        this.compView_2.create(this._BaMenu_2_3.context);
        this._text_3 = this.renderer.createText(this._el_0, '\n', null);
        this._text_4 = this.renderer.createText(parentRenderNode, '\n', null);
        var disposable_0 = import3.subscribeToRenderElement(this, this._el_2, new import3.InlineArray2(2, 'expandMenu', null), this.eventHandler(this.handleEvent_2));
        this._BaMenu_2_3.subscribe(this, this.eventHandler(this.handleEvent_2), true);
        this.init(null, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._text_4
        ]), [disposable_0]);
        return null;
    };
    View_BaSidebar0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import10.BaMenu) && (2 === requestNodeIndex))) {
            return this._BaMenu_2_3.context;
        }
        return notFoundResult;
    };
    View_BaSidebar0.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_2_0_0 = this.context.isMenuCollapsed;
        this._BaMenu_2_3.check_sidebarCollapsed(currVal_2_0_0, throwOnChange, false);
        var currVal_2_0_1 = this.context.menuHeight;
        this._BaMenu_2_3.check_menuHeight(currVal_2_0_1, throwOnChange, false);
        this._BaMenu_2_3.ngDoCheck(this, this._el_2, throwOnChange);
        this.compView_2.internalDetectChanges(throwOnChange);
    };
    View_BaSidebar0.prototype.destroyInternal = function () {
        this.compView_2.destroy();
        this._BaMenu_2_3.ngOnDestroy();
    };
    View_BaSidebar0.prototype.handleEvent_2 = function (eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'expandMenu')) {
            var pd_sub_0 = (this.context.menuExpand() !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    return View_BaSidebar0;
}(import1.AppView));
exports.View_BaSidebar0 = View_BaSidebar0;
//# sourceMappingURL=baSidebar.component.ngfactory.js.map