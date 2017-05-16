/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
 /* tslint:disable */


import * as import0 from '@angular/core';
import * as import1 from '../../../src/app/app.module';
import * as import2 from '@angular/common';
import * as import3 from '@angular/platform-browser';
import * as import4 from '@angular/forms';
import * as import5 from '@angular/http';
import * as import6 from './app.component.ngfactory';
class AppModuleInjector extends import0.ɵNgModuleInjector<import1.AppModule> {
  _CommonModule_0:import2.CommonModule;
  _ErrorHandler_1:any;
  _APP_ID_2:any;
  _ɵTRANSITION_ID_3:any;
  _APP_INITIALIZER_4:any[];
  _ApplicationInitStatus_5:import0.ApplicationInitStatus;
  _ɵf_6:import0.ɵf;
  _ApplicationRef_7:any;
  _ApplicationModule_8:import0.ApplicationModule;
  _BrowserModule_9:import3.BrowserModule;
  _ɵba_10:import4.ɵba;
  _FormsModule_11:import4.FormsModule;
  _HttpModule_12:import5.HttpModule;
  _AppModule_13:import1.AppModule;
  __LOCALE_ID_14:any;
  __NgLocalization_15:import2.NgLocaleLocalization;
  __Compiler_16:import0.Compiler;
  __IterableDiffers_17:any;
  __KeyValueDiffers_18:any;
  __DomSanitizer_19:import3.ɵe;
  __Sanitizer_20:any;
  __HAMMER_GESTURE_CONFIG_21:import3.HammerGestureConfig;
  __EVENT_MANAGER_PLUGINS_22:any[];
  __EventManager_23:import3.EventManager;
  __ɵDomSharedStylesHost_24:import3.ɵDomSharedStylesHost;
  __ɵDomRendererFactory2_25:import3.ɵDomRendererFactory2;
  __RendererFactory2_26:any;
  __ɵSharedStylesHost_27:any;
  __Testability_28:import0.Testability;
  __Meta_29:import3.Meta;
  __Title_30:import3.Title;
  __ɵi_31:import4.ɵi;
  __BrowserXhr_32:import5.BrowserXhr;
  __ResponseOptions_33:import5.BaseResponseOptions;
  __XSRFStrategy_34:any;
  __XHRBackend_35:import5.XHRBackend;
  __RequestOptions_36:import5.BaseRequestOptions;
  __Http_37:any;
  constructor(parent:import0.Injector) {
    super(parent,[import6.AppComponentNgFactory],[import6.AppComponentNgFactory]);
  }
  get _LOCALE_ID_14():any {
    if ((this.__LOCALE_ID_14 == null)) { (this.__LOCALE_ID_14 = import0.ɵn(this.parent.get(import0.LOCALE_ID,(null as any)))); }
    return this.__LOCALE_ID_14;
  }
  get _NgLocalization_15():import2.NgLocaleLocalization {
    if ((this.__NgLocalization_15 == null)) { (this.__NgLocalization_15 = new import2.NgLocaleLocalization(this._LOCALE_ID_14)); }
    return this.__NgLocalization_15;
  }
  get _Compiler_16():import0.Compiler {
    if ((this.__Compiler_16 == null)) { (this.__Compiler_16 = new import0.Compiler()); }
    return this.__Compiler_16;
  }
  get _IterableDiffers_17():any {
    if ((this.__IterableDiffers_17 == null)) { (this.__IterableDiffers_17 = import0.ɵl()); }
    return this.__IterableDiffers_17;
  }
  get _KeyValueDiffers_18():any {
    if ((this.__KeyValueDiffers_18 == null)) { (this.__KeyValueDiffers_18 = import0.ɵm()); }
    return this.__KeyValueDiffers_18;
  }
  get _DomSanitizer_19():import3.ɵe {
    if ((this.__DomSanitizer_19 == null)) { (this.__DomSanitizer_19 = new import3.ɵe(this.parent.get(import3.DOCUMENT))); }
    return this.__DomSanitizer_19;
  }
  get _Sanitizer_20():any {
    if ((this.__Sanitizer_20 == null)) { (this.__Sanitizer_20 = this._DomSanitizer_19); }
    return this.__Sanitizer_20;
  }
  get _HAMMER_GESTURE_CONFIG_21():import3.HammerGestureConfig {
    if ((this.__HAMMER_GESTURE_CONFIG_21 == null)) { (this.__HAMMER_GESTURE_CONFIG_21 = new import3.HammerGestureConfig()); }
    return this.__HAMMER_GESTURE_CONFIG_21;
  }
  get _EVENT_MANAGER_PLUGINS_22():any[] {
    if ((this.__EVENT_MANAGER_PLUGINS_22 == null)) { (this.__EVENT_MANAGER_PLUGINS_22 = [
      new import3.ɵDomEventsPlugin(this.parent.get(import3.DOCUMENT)),
      new import3.ɵKeyEventsPlugin(this.parent.get(import3.DOCUMENT)),
      new import3.ɵHammerGesturesPlugin(this.parent.get(import3.DOCUMENT),this._HAMMER_GESTURE_CONFIG_21)
    ]
    ); }
    return this.__EVENT_MANAGER_PLUGINS_22;
  }
  get _EventManager_23():import3.EventManager {
    if ((this.__EventManager_23 == null)) { (this.__EventManager_23 = new import3.EventManager(this._EVENT_MANAGER_PLUGINS_22,this.parent.get(import0.NgZone))); }
    return this.__EventManager_23;
  }
  get _ɵDomSharedStylesHost_24():import3.ɵDomSharedStylesHost {
    if ((this.__ɵDomSharedStylesHost_24 == null)) { (this.__ɵDomSharedStylesHost_24 = new import3.ɵDomSharedStylesHost(this.parent.get(import3.DOCUMENT))); }
    return this.__ɵDomSharedStylesHost_24;
  }
  get _ɵDomRendererFactory2_25():import3.ɵDomRendererFactory2 {
    if ((this.__ɵDomRendererFactory2_25 == null)) { (this.__ɵDomRendererFactory2_25 = new import3.ɵDomRendererFactory2(this._EventManager_23,this._ɵDomSharedStylesHost_24)); }
    return this.__ɵDomRendererFactory2_25;
  }
  get _RendererFactory2_26():any {
    if ((this.__RendererFactory2_26 == null)) { (this.__RendererFactory2_26 = this._ɵDomRendererFactory2_25); }
    return this.__RendererFactory2_26;
  }
  get _ɵSharedStylesHost_27():any {
    if ((this.__ɵSharedStylesHost_27 == null)) { (this.__ɵSharedStylesHost_27 = this._ɵDomSharedStylesHost_24); }
    return this.__ɵSharedStylesHost_27;
  }
  get _Testability_28():import0.Testability {
    if ((this.__Testability_28 == null)) { (this.__Testability_28 = new import0.Testability(this.parent.get(import0.NgZone))); }
    return this.__Testability_28;
  }
  get _Meta_29():import3.Meta {
    if ((this.__Meta_29 == null)) { (this.__Meta_29 = new import3.Meta(this.parent.get(import3.DOCUMENT))); }
    return this.__Meta_29;
  }
  get _Title_30():import3.Title {
    if ((this.__Title_30 == null)) { (this.__Title_30 = new import3.Title(this.parent.get(import3.DOCUMENT))); }
    return this.__Title_30;
  }
  get _ɵi_31():import4.ɵi {
    if ((this.__ɵi_31 == null)) { (this.__ɵi_31 = new import4.ɵi()); }
    return this.__ɵi_31;
  }
  get _BrowserXhr_32():import5.BrowserXhr {
    if ((this.__BrowserXhr_32 == null)) { (this.__BrowserXhr_32 = new import5.BrowserXhr()); }
    return this.__BrowserXhr_32;
  }
  get _ResponseOptions_33():import5.BaseResponseOptions {
    if ((this.__ResponseOptions_33 == null)) { (this.__ResponseOptions_33 = new import5.BaseResponseOptions()); }
    return this.__ResponseOptions_33;
  }
  get _XSRFStrategy_34():any {
    if ((this.__XSRFStrategy_34 == null)) { (this.__XSRFStrategy_34 = import5.ɵb()); }
    return this.__XSRFStrategy_34;
  }
  get _XHRBackend_35():import5.XHRBackend {
    if ((this.__XHRBackend_35 == null)) { (this.__XHRBackend_35 = new import5.XHRBackend(this._BrowserXhr_32,this._ResponseOptions_33,this._XSRFStrategy_34)); }
    return this.__XHRBackend_35;
  }
  get _RequestOptions_36():import5.BaseRequestOptions {
    if ((this.__RequestOptions_36 == null)) { (this.__RequestOptions_36 = new import5.BaseRequestOptions()); }
    return this.__RequestOptions_36;
  }
  get _Http_37():any {
    if ((this.__Http_37 == null)) { (this.__Http_37 = import5.ɵc(this._XHRBackend_35,this._RequestOptions_36)); }
    return this.__Http_37;
  }
  createInternal():import1.AppModule {
    this._CommonModule_0 = new import2.CommonModule();
    this._ErrorHandler_1 = import3.ɵa();
    this._APP_ID_2 = 'demo-app';
    this._ɵTRANSITION_ID_3 = this._APP_ID_2;
    this._APP_INITIALIZER_4 = [
      import0.ɵo,
      import3.ɵc(this.parent.get(import3.NgProbeToken,(null as any)),this.parent.get(import0.NgProbeToken,(null as any))),
      import3.ɵf(this._ɵTRANSITION_ID_3,this.parent.get(import3.DOCUMENT))
    ]
    ;
    this._ApplicationInitStatus_5 = new import0.ApplicationInitStatus(this._APP_INITIALIZER_4);
    this._ɵf_6 = new import0.ɵf(this.parent.get(import0.NgZone),this.parent.get(import0.ɵConsole),this,this._ErrorHandler_1,this.componentFactoryResolver,this._ApplicationInitStatus_5);
    this._ApplicationRef_7 = this._ɵf_6;
    this._ApplicationModule_8 = new import0.ApplicationModule(this._ApplicationRef_7);
    this._BrowserModule_9 = new import3.BrowserModule(this.parent.get(import3.BrowserModule,(null as any)));
    this._ɵba_10 = new import4.ɵba();
    this._FormsModule_11 = new import4.FormsModule();
    this._HttpModule_12 = new import5.HttpModule();
    this._AppModule_13 = new import1.AppModule();
    return this._AppModule_13;
  }
  getInternal(token:any,notFoundResult:any):any {
    if ((token === import2.CommonModule)) { return this._CommonModule_0; }
    if ((token === import0.ErrorHandler)) { return this._ErrorHandler_1; }
    if ((token === import0.APP_ID)) { return this._APP_ID_2; }
    if ((token === import3.ɵTRANSITION_ID)) { return this._ɵTRANSITION_ID_3; }
    if ((token === import0.APP_INITIALIZER)) { return this._APP_INITIALIZER_4; }
    if ((token === import0.ApplicationInitStatus)) { return this._ApplicationInitStatus_5; }
    if ((token === import0.ɵf)) { return this._ɵf_6; }
    if ((token === import0.ApplicationRef)) { return this._ApplicationRef_7; }
    if ((token === import0.ApplicationModule)) { return this._ApplicationModule_8; }
    if ((token === import3.BrowserModule)) { return this._BrowserModule_9; }
    if ((token === import4.ɵba)) { return this._ɵba_10; }
    if ((token === import4.FormsModule)) { return this._FormsModule_11; }
    if ((token === import5.HttpModule)) { return this._HttpModule_12; }
    if ((token === import1.AppModule)) { return this._AppModule_13; }
    if ((token === import0.LOCALE_ID)) { return this._LOCALE_ID_14; }
    if ((token === import2.NgLocalization)) { return this._NgLocalization_15; }
    if ((token === import0.Compiler)) { return this._Compiler_16; }
    if ((token === import0.IterableDiffers)) { return this._IterableDiffers_17; }
    if ((token === import0.KeyValueDiffers)) { return this._KeyValueDiffers_18; }
    if ((token === import3.DomSanitizer)) { return this._DomSanitizer_19; }
    if ((token === import0.Sanitizer)) { return this._Sanitizer_20; }
    if ((token === import3.HAMMER_GESTURE_CONFIG)) { return this._HAMMER_GESTURE_CONFIG_21; }
    if ((token === import3.EVENT_MANAGER_PLUGINS)) { return this._EVENT_MANAGER_PLUGINS_22; }
    if ((token === import3.EventManager)) { return this._EventManager_23; }
    if ((token === import3.ɵDomSharedStylesHost)) { return this._ɵDomSharedStylesHost_24; }
    if ((token === import3.ɵDomRendererFactory2)) { return this._ɵDomRendererFactory2_25; }
    if ((token === import0.RendererFactory2)) { return this._RendererFactory2_26; }
    if ((token === import3.ɵSharedStylesHost)) { return this._ɵSharedStylesHost_27; }
    if ((token === import0.Testability)) { return this._Testability_28; }
    if ((token === import3.Meta)) { return this._Meta_29; }
    if ((token === import3.Title)) { return this._Title_30; }
    if ((token === import4.ɵi)) { return this._ɵi_31; }
    if ((token === import5.BrowserXhr)) { return this._BrowserXhr_32; }
    if ((token === import5.ResponseOptions)) { return this._ResponseOptions_33; }
    if ((token === import5.XSRFStrategy)) { return this._XSRFStrategy_34; }
    if ((token === import5.XHRBackend)) { return this._XHRBackend_35; }
    if ((token === import5.RequestOptions)) { return this._RequestOptions_36; }
    if ((token === import5.Http)) { return this._Http_37; }
    return notFoundResult;
  }
  destroyInternal():void {
    this._ɵf_6.ngOnDestroy();
    (this.__ɵDomSharedStylesHost_24 && this._ɵDomSharedStylesHost_24.ngOnDestroy());
  }
}
export const AppModuleNgFactory:import0.NgModuleFactory<import1.AppModule> = new import0.NgModuleFactory<any>(AppModuleInjector,import1.AppModule);
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiL1VzZXJzL2lyaW5hX2NybS9Eb2N1bWVudHMvd29ya3NwYWNlL0RlbW8vc3JjL2FwcC9hcHAubW9kdWxlLm5nZmFjdG9yeS50cyIsInZlcnNpb24iOjMsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm5nOi8vL1VzZXJzL2lyaW5hX2NybS9Eb2N1bWVudHMvd29ya3NwYWNlL0RlbW8vc3JjL2FwcC9hcHAubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIiAiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9
