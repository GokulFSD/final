(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1, eval)("this");
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/about/about.component.css":
/*!*******************************************!*\
  !*** ./src/app/about/about.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*Sample Code*/\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWJvdXQvYWJvdXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxlQUFlIiwiZmlsZSI6InNyYy9hcHAvYWJvdXQvYWJvdXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qU2FtcGxlIENvZGUqLyJdfQ== */"

/***/ }),

/***/ "./src/app/about/about.component.html":
/*!********************************************!*\
  !*** ./src/app/about/about.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>PROJECT\n  HYGIEIA:\n</h3>\n\n<p>This project involves the use of permissioned blockchain Sawtooth under the hyperledger umbrella on the use case relating to healthcare in particular to that of Organ Donation. Health is the most important part of a person’s life and a such this project aims to introduce a permissioned blockchain into particular aspects of Organ Donation, in respect to an Organ donor list which is privacy protected and tamper proof in order to curb any exploitation and preserve privacy of members of Donor list,  also it helps in ordering a Recipient list wherein members are classified in a first come first serve basis and priority is set with voting of particular member nodes with the particular criteria set for voting and with a threshold set by the admin. The main aim is to match recipient and donors by traversing transactions.\n</p>\n<h4>Technologies Used</h4>\n<div class=\"container\">\n    <div class=\"row text-center text-lg-left\">\n<div class=\"col-lg-3 col-md-4 col-xs-6-inline\">\n  <a href=\"#\" class=\"d-block mb-4 h-100\">\n    <img class =\"img-fluid\" src=\"assets/images/d1.png\" width=\"200\" height=\"200\">\n  </a>\n</div>\n<div class=\"col-lg-3 col-md-4 col-xs-6-inline\">\n  <a href=\"#\" class=\"d-block mb-4 h-100\">\n    <img class =\"img-fluid\" src=\"assets/images/node.png\" width=\"200\" height=\"200\">\n  </a>\n</div>\n<div class=\"col-lg-3 col-md-4 col-xs-6-inline\">\n  <a  href=\"#\" class=\"d-block mb-4 h-100\">\n    <img class =\"img-fluid\" src=\"assets/images/ang.png\" width=\"200\" height=\"200\">\n  </a>\n</div>\n<div class=\"col-lg-3 col-md-4 col-xs-6\">\n  <a href=\"#\" class=\"d-block mb-4 h-100\">\n    <img class =\"img-fluid\" src=\"assets/images/rest.jpg\" width=\"200\" height=\"200\">\n  </a>\n</div>\n</div>\n</div> "

/***/ }),

/***/ "./src/app/about/about.component.ts":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.css */ "./src/app/about/about.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _page_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./page/page.component */ "./src/app/page/page.component.ts");
/* harmony import */ var _resp_resp_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./resp/resp.component */ "./src/app/resp/resp.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./main/main.component */ "./src/app/main/main.component.ts");
/* harmony import */ var _nhs_nhs_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./nhs/nhs.component */ "./src/app/nhs/nhs.component.ts");
/* harmony import */ var _eventsbar_eventsbar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./eventsbar/eventsbar.component */ "./src/app/eventsbar/eventsbar.component.ts");
/* harmony import */ var _hospital_validator_hospital_validator_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./hospital-validator/hospital-validator.component */ "./src/app/hospital-validator/hospital-validator.component.ts");










var routes = [
    { path: '', component: _main_main_component__WEBPACK_IMPORTED_MODULE_6__["MainComponent"] },
    { path: 'home', component: _page_page_component__WEBPACK_IMPORTED_MODULE_3__["PageComponent"] },
    { path: 'resp', component: _resp_resp_component__WEBPACK_IMPORTED_MODULE_4__["RespComponent"] },
    { path: 'about', component: _about_about_component__WEBPACK_IMPORTED_MODULE_5__["AboutComponent"] },
    { path: 'nhs', component: _nhs_nhs_component__WEBPACK_IMPORTED_MODULE_7__["NhsComponent"] },
    { path: 'events', component: _eventsbar_eventsbar_component__WEBPACK_IMPORTED_MODULE_8__["EventsbarComponent"] },
    { path: 'hv', component: _hospital_validator_hospital_validator_component__WEBPACK_IMPORTED_MODULE_9__["HospitalValidatorComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*Sample Code*/\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZUFBZSIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLypTYW1wbGUgQ29kZSovIl19 */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n\n\n<app-nav></app-nav>\n<router-outlet>\n</router-outlet>\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'hygeia';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _page_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./page/page.component */ "./src/app/page/page.component.ts");
/* harmony import */ var _resp_resp_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./resp/resp.component */ "./src/app/resp/resp.component.ts");
/* harmony import */ var _nav_nav_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./nav/nav.component */ "./src/app/nav/nav.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./main/main.component */ "./src/app/main/main.component.ts");
/* harmony import */ var _nhs_nhs_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./nhs/nhs.component */ "./src/app/nhs/nhs.component.ts");
/* harmony import */ var _eventsbar_eventsbar_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./eventsbar/eventsbar.component */ "./src/app/eventsbar/eventsbar.component.ts");
/* harmony import */ var _hospital_validator_hospital_validator_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./hospital-validator/hospital-validator.component */ "./src/app/hospital-validator/hospital-validator.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _page_page_component__WEBPACK_IMPORTED_MODULE_6__["PageComponent"],
                _resp_resp_component__WEBPACK_IMPORTED_MODULE_7__["RespComponent"],
                _nav_nav_component__WEBPACK_IMPORTED_MODULE_8__["NavComponent"],
                _about_about_component__WEBPACK_IMPORTED_MODULE_9__["AboutComponent"],
                _main_main_component__WEBPACK_IMPORTED_MODULE_10__["MainComponent"],
                _nhs_nhs_component__WEBPACK_IMPORTED_MODULE_11__["NhsComponent"],
                _eventsbar_eventsbar_component__WEBPACK_IMPORTED_MODULE_12__["EventsbarComponent"],
                _hospital_validator_hospital_validator_component__WEBPACK_IMPORTED_MODULE_13__["HospitalValidatorComponent"]
            ],
            imports: [
                _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/eventsbar/eventsbar.component.css":
/*!***************************************************!*\
  !*** ./src/app/eventsbar/eventsbar.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*random comment*/\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZXZlbnRzYmFyL2V2ZW50c2Jhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGtCQUFrQiIsImZpbGUiOiJzcmMvYXBwL2V2ZW50c2Jhci9ldmVudHNiYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qcmFuZG9tIGNvbW1lbnQqLyJdfQ== */"

/***/ }),

/***/ "./src/app/eventsbar/eventsbar.component.html":
/*!****************************************************!*\
  !*** ./src/app/eventsbar/eventsbar.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  eventsbar works!\n</p>\n"

/***/ }),

/***/ "./src/app/eventsbar/eventsbar.component.ts":
/*!**************************************************!*\
  !*** ./src/app/eventsbar/eventsbar.component.ts ***!
  \**************************************************/
/*! exports provided: EventsbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventsbarComponent", function() { return EventsbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var EventsbarComponent = /** @class */ (function () {
    function EventsbarComponent() {
    }
    EventsbarComponent.prototype.ngOnInit = function () {
    };
    EventsbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-eventsbar',
            template: __webpack_require__(/*! ./eventsbar.component.html */ "./src/app/eventsbar/eventsbar.component.html"),
            styles: [__webpack_require__(/*! ./eventsbar.component.css */ "./src/app/eventsbar/eventsbar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], EventsbarComponent);
    return EventsbarComponent;
}());



/***/ }),

/***/ "./src/app/hospital-validator/hospital-validator.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/hospital-validator/hospital-validator.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*random comment*/\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9zcGl0YWwtdmFsaWRhdG9yL2hvc3BpdGFsLXZhbGlkYXRvci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGtCQUFrQiIsImZpbGUiOiJzcmMvYXBwL2hvc3BpdGFsLXZhbGlkYXRvci9ob3NwaXRhbC12YWxpZGF0b3IuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qcmFuZG9tIGNvbW1lbnQqLyJdfQ== */"

/***/ }),

/***/ "./src/app/hospital-validator/hospital-validator.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/hospital-validator/hospital-validator.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>Hosital_validator</h3>\n\n  \n  <div>\n    \n          <legend>Hospital</legend>\n          <p>Validate Organ Matching</p>\n          <input type=\"text\" class=\"form-control-inline\">\n          <i style=\"font-size:24px\" class=\"fa\">&#xf101;</i>\n          <input type=\"text\" class=\"form-control-inline\">\n          <button class=\"btn btn btn-outline-success\" href=\"\"> accept</button>/\n          <button class=\"btn btn btn-outline-success\" href=\"\">reject</button>\n        \n</div>\n      "

/***/ }),

/***/ "./src/app/hospital-validator/hospital-validator.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/hospital-validator/hospital-validator.component.ts ***!
  \********************************************************************/
/*! exports provided: HospitalValidatorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HospitalValidatorComponent", function() { return HospitalValidatorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HospitalValidatorComponent = /** @class */ (function () {
    function HospitalValidatorComponent() {
    }
    HospitalValidatorComponent.prototype.ngOnInit = function () {
    };
    HospitalValidatorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-hospital-validator',
            template: __webpack_require__(/*! ./hospital-validator.component.html */ "./src/app/hospital-validator/hospital-validator.component.html"),
            styles: [__webpack_require__(/*! ./hospital-validator.component.css */ "./src/app/hospital-validator/hospital-validator.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HospitalValidatorComponent);
    return HospitalValidatorComponent;
}());



/***/ }),

/***/ "./src/app/main/main.component.css":
/*!*****************************************!*\
  !*** ./src/app/main/main.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img{\n    display: block;\n  margin-left: auto;\n  margin-right: auto;\n  width: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9tYWluLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0VBQ2pCLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsV0FBVztDQUNaIiwiZmlsZSI6InNyYy9hcHAvbWFpbi9tYWluLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbWd7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIHdpZHRoOiA1MCU7XG59Il19 */"

/***/ }),

/***/ "./src/app/main/main.component.html":
/*!******************************************!*\
  !*** ./src/app/main/main.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <img class =\"img-fluid\" src=\"assets/images/hygieia.png\" width=\"650\" height=\"650\" >\n</div>\n"

/***/ }),

/***/ "./src/app/main/main.component.ts":
/*!****************************************!*\
  !*** ./src/app/main/main.component.ts ***!
  \****************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MainComponent = /** @class */ (function () {
    function MainComponent() {
    }
    MainComponent.prototype.ngOnInit = function () {
    };
    MainComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-main',
            template: __webpack_require__(/*! ./main.component.html */ "./src/app/main/main.component.html"),
            styles: [__webpack_require__(/*! ./main.component.css */ "./src/app/main/main.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MainComponent);
    return MainComponent;
}());



/***/ }),

/***/ "./src/app/nav/nav.component.css":
/*!***************************************!*\
  !*** ./src/app/nav/nav.component.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {  padding: 5px; font-family: helvetica; font:15px;  }\n.p1 { text-align: center; }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2L25hdi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFFBQVEsYUFBYSxDQUFDLHVCQUF1QixDQUFDLFVBQVUsR0FBRztBQUMzRCxNQUFNLG1CQUFtQixFQUFFIiwiZmlsZSI6InNyYy9hcHAvbmF2L25hdi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keSB7ICBwYWRkaW5nOiA1cHg7IGZvbnQtZmFtaWx5OiBoZWx2ZXRpY2E7IGZvbnQ6MTVweDsgIH1cbi5wMSB7IHRleHQtYWxpZ246IGNlbnRlcjsgfSJdfQ== */"

/***/ }),

/***/ "./src/app/nav/nav.component.html":
/*!****************************************!*\
  !*** ./src/app/nav/nav.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark \">\n  <div class=\"container\">\n    <a class=\"navbar-brand\" routerLink =\"\">  <legend>{{title}}\n    </legend></a>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarResponsive\" aria-controls=\"navbarResponsive\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <div class=\"collapse navbar-collapse\" id=\"navbarResponsive\">\n      <ul class=\"navbar-nav ml-auto\">\n          <li class=\"nav-item active\">\n              <a class=\"nav-link\" routerLink=\"\">Home</a>\n          </li>\n\n          <li class=\"nav-item active\">\n            <a class=\"nav-link\" routerLink =\"about\">About</a>\n  \n             </li>\n        <li class=\"nav-item active\">\n          <a class=\"nav-link\" routerLink=\"home\">Donor</a>\n        </li>\n        <li class=\"nav-item active\">\n          <a class=\"nav-link\" routerLink =\"resp\">Recepient List</a>\n\n        </li>\n        <li class=\"nav-item active\">\n          <a class=\"nav-link\" routerLink =\"nhs\">NHS</a>\n\n           </li>\n        \n        \n       \n          <li class=\"nav-item active\">\n            <a class=\"nav-link\" routerLink =\"hv\">Hospital_Val</a>\n  \n             </li>\n             <li class=\"nav-item active\">\n              <a class=\"nav-link\" routerLink =\"events\">Events</a>\n    \n               </li>\n      </ul>\n      <br/>\n    </div>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/nav/nav.component.ts":
/*!**************************************!*\
  !*** ./src/app/nav/nav.component.ts ***!
  \**************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NavComponent = /** @class */ (function () {
    function NavComponent() {
    }
    NavComponent.prototype.ngOnInit = function () {
    };
    NavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-nav',
            template: __webpack_require__(/*! ./nav.component.html */ "./src/app/nav/nav.component.html"),
            styles: [__webpack_require__(/*! ./nav.component.css */ "./src/app/nav/nav.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NavComponent);
    return NavComponent;
}());



/***/ }),

/***/ "./src/app/nhs/nhs.component.css":
/*!***************************************!*\
  !*** ./src/app/nhs/nhs.component.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*random comment*/\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmhzL25ocy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGtCQUFrQiIsImZpbGUiOiJzcmMvYXBwL25ocy9uaHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qcmFuZG9tIGNvbW1lbnQqLyJdfQ== */"

/***/ }),

/***/ "./src/app/nhs/nhs.component.html":
/*!****************************************!*\
  !*** ./src/app/nhs/nhs.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " <!-- <h3>Welcome to National Health Service</h3>\n\n <div class=\"col-sm-offset-2 col-sm-10\">\n  <button type=\"submit\" class=\"btn btn-primary\"  (click)=\"getList()\">FetchList</button>\n</div> -->\n<h3>Welcome to National Health Service</h3>\n<form (ngSubmit)=addresser(f) #f=\"ngForm\">\n  <label for=\"btype\">Blood Type</label>\n <select class=\"form-control\" id=\"btype\" ngModel name=\"btype\" required>\n   <option value=\"A+\">A+</option>\n   <option value=\"A-\">A-</option>\n   <option value=\"B-\">B-</option>\n   <option value=\"B+\">B+</option>\n   <option value=\"AB+\">AB+</option>\n   <option value=\"AB-\">AB-</option>\n   <option value=\"O-\">O-</option>\n   <option value=\"O+\">O+</option>\n </select>\n <label for=\"otype\">Organ Type</label>\n <select class=\"form-control\"  ngModel name=\"otype\" required>\n   <option value=\"Lung\">Lung</option>\n   <option value=\"Kidney\">Kidney</option>\n   <option value=\"Liver\">Liver</option>\n   <option value=\"Eye(corneas)\">Eye(corneas)</option>\n   <option value=\"Larynx\">Larynx</option>\n   <option value=\"Pancreas\">Pancreas</option>\n   <option value=\"Intestine\">Intestine</option>\n </select>\n <label for=\"idproof\">Id Proof</label><br>\n  <input ngModel name=\"idproof\" type=\"text\">\n  <input type=\"submit\">\n</form>\n\n\n\n <div *ngIf=\"state\">\n   <p>Status : {{state.Status}}</p>\n   <p>Transaction id : {{state.Txnid}}</p>\n   <!-- <p>Txn Data  :{{stateDt}}</p> -->\n   <b><p>Name:{{detailsList.ran}}</p>\n   <p>Date of Birth:{{detailsList.dat}}</p>\n   <p>Blood Type:{{detailsList.name}}</p>\n   <p>Organ:{{detailsList.bty}}</p></b>\n  \n\n </div>\n\n\n<!-- <div class=\"form-group\">\n   <label class=\"control-label col-sm-2\" id=\"btype\">Blood Type:</label> \n  <div class=\"col-sm-10\"><legend>\n          <select class=\"form-control\" id=\"btype\" #btype type=\"text\" name='btype' ngModel required>\n            <option>A+</option>\n            <option>A-</option>\n            <option>B-</option>\n            <option>B+</option>\n            <option>AB+</option>\n            <option>AB-</option>\n            <option>O-</option>\n            <option>O+</option>\n          </select></legend>\n          <br>\n    </div>\n    <div class=\"form-group\">\n      <label class=\"control-label col-sm-5\" id=\"otype\">Organ to be recieved</label>\n      <div class=\"col-sm-10\">\n        <legend>\n        <select class=\"form-control\" id=\"otype\" #otype type=\"text\" name='otype' ngModel required>\n            <option>Lung</option>\n            <option>Kidney</option>\n            <option>Liver</option>\n            <option>Eye(corneas)</option>\n            <option>Larynx</option>\n            <option>Pancreas</option>\n            <option>Intestine</option>\n          </select></legend>\n      </div>\n    </div>\n    <button type=\"button\" class=\"btn btn-outline-success\">request</button> -->\n  <!-- <div>\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-md-7\">\n              <legend>Organ Donor List</legend>\n              <label for=\"address\"></label>\n          <input type=\"text\" class=\"form-control-inline\">\n          <input type=\"checkbox\"> \n            </div>\n            <div class=\"col-md-7\">\n                <label for=\"address\"></label>\n            <input type=\"text\" class=\"form-control-inline\">\n            <input type=\"checkbox\"> \n              </div>\n              <div class=\"col-md-7\">\n                  <legend>Recipient List</legend>\n                  <label for=\"address\"></label>\n              <input type=\"text\" class=\"form-control-inline\">\n              <input type=\"checkbox\"> \n                </div>\n                <div class=\"col-md-7\">\n                    <label for=\"address\"></label>\n                <input type=\"text\" class=\"form-control-inline\">\n                <input type=\"checkbox\"> \n                  </div> -->\n            <!-- <div class=\"col-md-6\">\n              <button class=\"btn btn-success\" href=\"\">match</button>\n            </div>\n          </div> -->\n        <!-- </div>\n          \n          \n        \n</div> -->\n      "

/***/ }),

/***/ "./src/app/nhs/nhs.component.ts":
/*!**************************************!*\
  !*** ./src/app/nhs/nhs.component.ts ***!
  \**************************************/
/*! exports provided: NhsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NhsComponent", function() { return NhsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _sawtooth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../sawtooth.service */ "./src/app/sawtooth.service.ts");
/* harmony import */ var buffer___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! buffer/ */ "./node_modules/buffer/index.js");
/* harmony import */ var buffer___WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(buffer___WEBPACK_IMPORTED_MODULE_3__);




var NhsComponent = /** @class */ (function () {
    //name of array you are calling from sawtoo.service is Data
    function NhsComponent(form) {
        this.form = form;
        this.users = [];
        this.clickMessage = "";
        this.servicedata = "";
        var nhs = "NHS";
    }
    NhsComponent.prototype.ngOnInit = function () {
    };
    NhsComponent.prototype.addresser = function (f) {
        console.log(f.value);
        this.address = this.form.getAddress(f.value.btype, f.value.otype, f.value.idproof, "NHS");
        console.log(this.address);
        this.getData();
    };
    NhsComponent.prototype.getDecodedData = function (responseJSON) {
        var dataBytes = responseJSON.data;
        var decodedData = new buffer___WEBPACK_IMPORTED_MODULE_3__["Buffer"](dataBytes, 'base64').toString();
        return decodedData;
    };
    NhsComponent.prototype.getData = function () {
        var _this = this;
        return this.form.getStateD(this.address)
            .subscribe(function (resp) {
            var dataString = JSON.stringify(resp);
            var data = JSON.parse(dataString);
            var stateDataEnc = data.data;
            var stateDecoded = atob(stateDataEnc);
            _this.state = JSON.parse(stateDecoded);
            console.log("bkp 0");
            var getStateURL = 'http://localhost:4200/api/transaction/' + _this.state.Txnid;
            var fetchOptions = { method: 'GET' };
            console.log("bkp 1");
            return _this.form.getTxnD(_this.state.Txnid)
                .subscribe(function (response) {
                var dt1 = JSON.stringify(response);
                var dt2 = JSON.parse(dt1);
                var dt3 = dt2.data;
                var dt4 = dt3.payload;
                _this.stateDt = new buffer___WEBPACK_IMPORTED_MODULE_3__["Buffer"](dt4, "base64").toString();
                var Details = _this.stateDt.split(',');
                _this.detailsList = {
                    name: Details[0],
                    bty: Details[1],
                    oty: Details[2],
                    idp: Details[3],
                    dat: Details[4],
                    ran: Details[5],
                    nam: Details[6]
                };
                console.log("Name is " + _this.stateDt);
                console.log("batchlist null", _this.stateDt);
            });
            /*.then((responseJson) => {
              console.log("batchlist null2");
              this.stateDt= this.getDecodedData(responseJson)
              console.log("bkp 3")
              
            })
            .catch((error) => {
              console.error(error);
            });*/
        }, function (error) {
            console.log(error);
        });
    };
    NhsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-nhs',
            template: __webpack_require__(/*! ./nhs.component.html */ "./src/app/nhs/nhs.component.html"),
            styles: [__webpack_require__(/*! ./nhs.component.css */ "./src/app/nhs/nhs.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_sawtooth_service__WEBPACK_IMPORTED_MODULE_2__["SawtoothService"]])
    ], NhsComponent);
    return NhsComponent;
}());

// import { Component, OnInit } from '@angular/core';
// import { SawtoothService } from '../sawtooth.service';
// @Component({
//   selector: 'app-nhs',
//   templateUrl: './nhs.component.html',
//   styleUrls: ['./nhs.component.css']
// })
// export class NhsComponent implements OnInit {
//   users=[];
//   clickMessage="";
//   servicedata="";
//   state;
//   address;
//   constructor(private form:SawtoothService) { 
//     console.log("Inside page component.ts")
//   }
//   ngOnInit() {
//   }
//   // async addForm(btype:string,otype:string,Gender:string,idproof:string,date:string,Name:string){
//   //  // event.preventDefault();
//   //  this.clickMessage="Blood type:"+btype+"Organ type:" +otype +" Gender: "+Gender + " Registration Date:"+date + " Name:" +Name ;
//   //   const proc ="NHS"
//   //   const action ="add"
//   //   const servDt =await this.Form.sendData(btype,otype,Gender,idproof,date,Name,proc,action);
//   //   this.servicedata="htis is service dAatta"+servDt;
//   //   //+servDt.toString();
//   // }
//   // async getList(){
//   //   const servDt =await this.Form.getListData();
//   // }
//   addresser(f){
//     console.log(f.value)
//     this.address=this.form.getAddress(f.value.btype,f.value.otype,f.value.idproof,"NHS")
//     console.log(this.address)
//     this.getData()
//   }
//   getData(){
//     return this.form.getStateD(this.address)
//       .subscribe((resp)=>{
//         const dataString= JSON.stringify(resp)
//         const data= JSON.parse(dataString)
//         let stateDataEnc=data.data;
//         let stateDecoded= atob(stateDataEnc)
//         this.state=JSON.parse(stateDecoded)
//       },
//       (error)=>{
//         console.log(error)
//       })
//   }
// }


/***/ }),

/***/ "./src/app/page/page.component.html":
/*!******************************************!*\
  !*** ./src/app/page/page.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <script src=\"https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js\"></script>\n<script src=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js\"></script>\n<link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css\"> -->\n<br/>\n<br/><legend><p class=\"p1\">Enter Details of Donor</p></legend><br/>\n<!-- <div>\n  <button type=\"submit\" class=\"btn btn-primary\"  (click)=\"getDnr()\">Submit</button>\n</div> -->\n<div class=\"container\">\n\n  <form  class=\"form\"  #f=\"ngForm\" >\n    <div class=\"form-group\">\n\n      <label class=\"control-label col-sm-2\" id=\"name\">Name:</label>\n      <div class=\"col-sm-10\">\n        <input #Name type=\"text\" class=\"form-control\" id=\"name\" placeholder=\"name\" name='Name' ngModel required pattern=\"^[a-zA-Z\\.]*$\">\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <label class=\"control-label col-sm-2\" id=\"Date\">Date of Birth:</label>\n      <div class=\"col-sm-10\">\n        <input #date type=\"date\" class=\"form-control\" id=\"date\" placeholder=\"Date\" name='date' ngModel required>\n      </div>\n    </div>\n    \n    <div class=\"form-group\">\n      <label class=\"control-label col-sm-2\" id=\"Gender\">Gender:</label>\n      <div class=\"col-sm-10\">\n              <select class=\"form-control\" id=\"Gender\" #Gender type=\"text\" name='Gender' ngModel required>\n                <option>Male</option>\n                <option>Female</option>\n                <option>Other</option>\n              </select>\n              <br>\n        </div>\n      </div>\n    <div class=\"form-group\">\n      <label class=\"control-label col-sm-2\" id=\"btype\">Blood Type:</label>\n      <div class=\"col-sm-10\">\n              <select class=\"form-control\" id=\"btype\" #btype type=\"text\" name='btype' ngModel required>\n                <option>A+</option>\n                <option>A-</option>\n                <option>B-</option>\n                <option>B+</option>\n                <option>AB+</option>\n                <option>AB-</option>\n                <option>O-</option>\n                <option>O+</option>\n              </select>\n              <br>\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <label class=\"control-label col-sm-5\" for=\"otype\">Organ to be recieved</label>\n        <div class=\"col-sm-10\">\n          <select class=\"form-control\" id=\"otype\" #otype type=\"text\" name='otype' ngModel required>\n              <option>Lung</option>\n              <option>Kidney</option>\n              <option>Liver</option>\n              <option>Eye(corneas)</option>\n              <option>Larynx</option>\n              <option>Pancreas</option>\n              <option>Intestine</option>\n            </select>\n        </div>\n      </div>\n\n\n      <div class=\"form-group\">\n        <label class=\"control-label col-sm-2\" id=\"idproof\">Enter Identity No:</label>\n        <div class=\"col-sm-10\">\n          <input #idproof type=\"text\" ngModel required class=\"form-control\" id=\"idproof\" placeholder=\"enter government given identity proof (aadhar preferred)\" ngModel required maxlength=\"12\" >\n   <small class=\"form-text text-muted\">Enter 12 digit Aadhar number</small>\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <label class=\"control-label col-sm-2\" id=\"cno\">Enter Contact No:</label>\n        <div class=\"col-sm-10\">\n          <input type=\"text\" class=\"form-control\" id=\"cno\" placeholder=\"Contact Number\" name=\"tel\" ngModel required maxlength=\"10\" >\n  <small class=\"form-text text-muted\">Enter 10 digit Phone number</small>      \n  </div>\n      </div>\n      <div class=\"form-group\">\n        <label class=\"control-label col-sm-2\" id=\"cid\">Contact Info:</label>\n        <div class=\"col-sm-10\">\n          <input type=\"textarea\" class=\"form-control\" id=\"cid\" placeholder=\"enter Contact information\" name=\"cid\" ngModel required>\n        </div>\n      </div>\n      \n      \n      <div class=\"form-group\">\n        <div class=\"col-sm-offset-2 col-sm-10\">\n          <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!f.valid\" (click)=\"addForm(btype.value,otype.value,Gender.value,idproof.value,date.value,Name.value)\">Submit</button>\n        </div>\n      </div>\n    </form>\n  </div>\n\n"

/***/ }),

/***/ "./src/app/page/page.component.sass":
/*!******************************************!*\
  !*** ./src/app/page/page.component.sass ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\n  padding: 5px;\n  font-family: helvetica;\n  font: 15px; }\n\n.p1 {\n  text-align: center; }\n\ninput.ng-invalid.ng-touched {\n  border: 1px solid red; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2dva3VsL0Rvd25sb2Fkcy9sYWI0L2ZpbmFsX2VkaXQvcHJvamVjdF9oeWdpZWlhL2h5Z2VpYS9zcmMvYXBwL3BhZ2UvcGFnZS5jb21wb25lbnQuc2FzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUFRLGFBQVk7RUFBRSx1QkFBc0I7RUFBRSxXQUFTLEVBQU07O0FBQzdEO0VBQU0sbUJBQWtCLEVBQUk7O0FBQzVCO0VBQTZCLHNCQUFzQixFQUFFIiwiZmlsZSI6InNyYy9hcHAvcGFnZS9wYWdlLmNvbXBvbmVudC5zYXNzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keSB7ICBwYWRkaW5nOiA1cHg7IGZvbnQtZmFtaWx5OiBoZWx2ZXRpY2E7IGZvbnQ6MTVweDsgICB9O1xuLnAxIHsgdGV4dC1hbGlnbjogY2VudGVyOyB9O1xuaW5wdXQubmctaW52YWxpZC5uZy10b3VjaGVkeyBib3JkZXI6IDFweCBzb2xpZCByZWQgfTtcbiJdfQ== */"

/***/ }),

/***/ "./src/app/page/page.component.ts":
/*!****************************************!*\
  !*** ./src/app/page/page.component.ts ***!
  \****************************************/
/*! exports provided: PageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageComponent", function() { return PageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _sawtooth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../sawtooth.service */ "./src/app/sawtooth.service.ts");



var PageComponent = /** @class */ (function () {
    function PageComponent(Form) {
        this.Form = Form;
        this.users = [];
        this.clickMessage = "";
        this.servicedata = "";
        console.log("Inside page component.ts");
    }
    PageComponent.prototype.ngOnInit = function () {
    };
    PageComponent.prototype.addForm = function (btype, otype, Gender, idproof, date, Name) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var proc, action, servDt;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        // event.preventDefault();
                        this.clickMessage = "Blood type:" + btype + "Organ type:" + otype + " Gender: " + Gender + " Registration Date:" + date + " Name:" + Name;
                        proc = "NHS";
                        action = "add";
                        return [4 /*yield*/, this.Form.sendData(btype, otype, Gender, idproof, date, Name, proc, action)];
                    case 1:
                        servDt = _a.sent();
                        this.servicedata = "htis is service dAatta" + servDt;
                        return [2 /*return*/];
                }
            });
        });
    };
    PageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-page',
            template: __webpack_require__(/*! ./page.component.html */ "./src/app/page/page.component.html"),
            styles: [__webpack_require__(/*! ./page.component.sass */ "./src/app/page/page.component.sass")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_sawtooth_service__WEBPACK_IMPORTED_MODULE_2__["SawtoothService"]])
    ], PageComponent);
    return PageComponent;
}());



/***/ }),

/***/ "./src/app/resp/resp.component.css":
/*!*****************************************!*\
  !*** ./src/app/resp/resp.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {  padding: 5px; font-family: helvetica; font:15px;   }\n.p1 { text-align: center; }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVzcC9yZXNwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsUUFBUSxhQUFhLENBQUMsdUJBQXVCLENBQUMsVUFBVSxJQUFJO0FBQzVELE1BQU0sbUJBQW1CLEVBQUUiLCJmaWxlIjoic3JjL2FwcC9yZXNwL3Jlc3AuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHkgeyAgcGFkZGluZzogNXB4OyBmb250LWZhbWlseTogaGVsdmV0aWNhOyBmb250OjE1cHg7ICAgfVxuLnAxIHsgdGV4dC1hbGlnbjogY2VudGVyOyB9Il19 */"

/***/ }),

/***/ "./src/app/resp/resp.component.html":
/*!******************************************!*\
  !*** ./src/app/resp/resp.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <script src=\"https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js\"></script>\n<script src=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js\"></script>\n<link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css\"> -->\n<br/>\n<br/><legend><p class=\"p1\">Enter Details of Recipient</p></legend><br/>\n<div class=\"container\">\n\n  <form  class=\"form\"  #f=\"ngForm\" >\n    <div class=\"form-group\">\n\n      <label class=\"control-label col-sm-2\" id=\"name\">Name:</label>\n      <div class=\"col-sm-10\">\n        <input #Name type=\"text\" class=\"form-control\" id=\"name\" placeholder=\"name\" name='Name' ngModel required pattern=\"^[a-zA-Z\\.]*$\">\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <label class=\"control-label col-sm-2\" id=\"Date\">Date of Birth:</label>\n      <div class=\"col-sm-10\">\n        <input #date type=\"date\" class=\"form-control\" id=\"date\" placeholder=\"Date\" name='date' ngModel required>\n      </div>\n    </div>\n    \n    <div class=\"form-group\">\n      <label class=\"control-label col-sm-2\" id=\"Gender\">Gender:</label>\n      <div class=\"col-sm-10\">\n              <select class=\"form-control\" id=\"Gender\" #Gender type=\"text\" name='Gender' ngModel required>\n                <option>Male</option>\n                <option>Female</option>\n                <option>Other</option>\n              </select>\n              <br>\n        </div>\n      </div>\n    <div class=\"form-group\">\n      <label class=\"control-label col-sm-2\" id=\"btype\">Blood Type:</label>\n      <div class=\"col-sm-10\">\n              <select class=\"form-control\" id=\"btype\" #btype type=\"text\" name='btype' ngModel required>\n                <option>A+</option>\n                <option>A-</option>\n                <option>B-</option>\n                <option>B+</option>\n                <option>AB+</option>\n                <option>AB-</option>\n                <option>O-</option>\n                <option>O+</option>\n              </select>\n              <br>\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <label class=\"control-label col-sm-5\" id=\"otype\">Organ to be recieved</label>\n        <div class=\"col-sm-10\">\n          <select class=\"form-control\" id=\"otype\" #otype type=\"text\" name='otype' ngModel required>\n              <option>Lung</option>\n              <option>Kidney</option>\n              <option>Liver</option>\n              <option>Eye(corneas)</option>\n              <option>Larynx</option>\n              <option>Pancreas</option>\n              <option>Intestine</option>\n            </select>\n        </div>\n      </div>\n\n\n\n      <div class=\"form-group\">\n        <label class=\"control-label col-sm-2\" id=\"idproof\">Enter Identity No:</label>\n        <div class=\"col-sm-10\">\n          <input #idproof type=\"number\" ngModel required class=\"form-control\" id=\"idproof\" placeholder=\"enter government given identity proof (aadhar preferred)\" ngModel required maxlength=\"12\" >\n   <small class=\"form-text text-muted\">Enter 12 digit Aadhar number</small>\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <label class=\"control-label col-sm-2\" id=\"cno\">Enter Contact No:</label>\n        <div class=\"col-sm-10\">\n          <input type=\"number\" class=\"form-control\" id=\"cno\" placeholder=\"Contact Number\" name=\"tel\" ngModel required maxlength=\"10\" >\n  <small class=\"form-text text-muted\">Enter 10 digit Phone number</small>      \n  </div>\n      </div>\n      <div class=\"form-group\">\n        <label class=\"control-label col-sm-2\" id=\"cid\">Contact Info:</label>\n        <div class=\"col-sm-10\">\n          <input type=\"textarea\" class=\"form-control\" id=\"cid\" placeholder=\"enter Contact information\" name=\"cid\" ngModel required>\n        </div>\n      </div>\n      \n      \n      <div class=\"form-group\">\n        <div class=\"col-sm-offset-2 col-sm-10\">\n          <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!f.valid\" (click)=\"addForm(btype.value,otype.value,Gender.value,idproof.value,date.value,Name.value)\">Submit</button>\n        </div>\n      </div>\n    </form>\n  </div>"

/***/ }),

/***/ "./src/app/resp/resp.component.ts":
/*!****************************************!*\
  !*** ./src/app/resp/resp.component.ts ***!
  \****************************************/
/*! exports provided: RespComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RespComponent", function() { return RespComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _sawtooth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../sawtooth.service */ "./src/app/sawtooth.service.ts");



var RespComponent = /** @class */ (function () {
    function RespComponent(Form) {
        this.Form = Form;
        this.users = [];
        this.clickMessage = "";
        this.servicedata = "";
        console.log("Inside page component.ts");
    }
    RespComponent.prototype.ngOnInit = function () {
    };
    RespComponent.prototype.addForm = function (btype, otype, Gender, idproof, date, Name) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var reproc, action, servDt;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        // event.preventDefault();
                        this.clickMessage = "Blood type:" + btype + "Organ type:" + otype + " Gender: " + Gender + " Registration Date:" + date + " Name:" + Name;
                        reproc = "resp";
                        action = "add";
                        return [4 /*yield*/, this.Form.sendData(btype, otype, Gender, idproof, date, Name, reproc, action)];
                    case 1:
                        servDt = _a.sent();
                        this.servicedata = "htis is service dAatta" + servDt;
                        return [2 /*return*/];
                }
            });
        });
    };
    RespComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-resp',
            template: __webpack_require__(/*! ./resp.component.html */ "./src/app/resp/resp.component.html"),
            styles: [__webpack_require__(/*! ./resp.component.css */ "./src/app/resp/resp.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_sawtooth_service__WEBPACK_IMPORTED_MODULE_2__["SawtoothService"]])
    ], RespComponent);
    return RespComponent;
}());



/***/ }),

/***/ "./src/app/sawtooth.service.ts":
/*!*************************************!*\
  !*** ./src/app/sawtooth.service.ts ***!
  \*************************************/
/*! exports provided: SawtoothService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SawtoothService", function() { return SawtoothService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var crypto_browserify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! crypto-browserify */ "./node_modules/crypto-browserify/index.js");
/* harmony import */ var crypto_browserify__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(crypto_browserify__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var sawtooth_sdk_protobuf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sawtooth-sdk/protobuf */ "./node_modules/sawtooth-sdk/protobuf/index.js");
/* harmony import */ var sawtooth_sdk_protobuf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sawtooth_sdk_protobuf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var sawtooth_sdk_signing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sawtooth-sdk/signing */ "./node_modules/sawtooth-sdk/signing/index.js");
/* harmony import */ var sawtooth_sdk_signing__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sawtooth_sdk_signing__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var buffer___WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! buffer/ */ "./node_modules/buffer/index.js");
/* harmony import */ var buffer___WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(buffer___WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var text_encoding_lib_encoding__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! text-encoding/lib/encoding */ "./node_modules/text-encoding/lib/encoding.js");
/* harmony import */ var text_encoding_lib_encoding__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(text_encoding_lib_encoding__WEBPACK_IMPORTED_MODULE_7__);








var SawtoothService = /** @class */ (function () {
    function SawtoothService(http) {
        this.http = http;
        this.Family_name = 'hygieia';
        this.Family_version = '1.0';
        this.REST_API_BASE_URL = 'http://localhost:4200/api';
    }
    SawtoothService.prototype.hash = function (v) {
        return Object(crypto_browserify__WEBPACK_IMPORTED_MODULE_2__["createHash"])('sha512').update(v).digest('hex');
    };
    SawtoothService.prototype.getTransactionHeaderBytes = function (inputAddressList, outputAddressList, payload) {
        var transactionHeaderBytes = sawtooth_sdk_protobuf__WEBPACK_IMPORTED_MODULE_3__["TransactionHeader"].encode({
            familyName: this.Family_name,
            familyVersion: this.Family_version,
            inputs: [this.addrNs, this.address],
            outputs: [this.addrNs, this.address],
            signerPublicKey: this.publicKey,
            batcherPublicKey: this.publicKey,
            dependencies: [],
            payloadSha512: this.hash(payload),
            nonce: (Math.random() * 1000).toString()
        }).finish();
        return transactionHeaderBytes;
    };
    SawtoothService.prototype.getTransaction = function (transactionHeaderBytes, payloadBytes) {
        var transaction = sawtooth_sdk_protobuf__WEBPACK_IMPORTED_MODULE_3__["Transaction"].create({
            header: transactionHeaderBytes,
            headerSignature: this.signer.sign(transactionHeaderBytes),
            payload: payloadBytes
        });
        return transaction;
    };
    SawtoothService.prototype.getBatchHeaderBytes = function (transactionSignaturesList) {
        console.log("Inside get BAtch list");
        var batchHeader = sawtooth_sdk_protobuf__WEBPACK_IMPORTED_MODULE_3__["BatchHeader"].encode({
            signerPublicKey: this.publicKey,
            transactionIds: transactionSignaturesList
        }).finish();
        return batchHeader;
    };
    SawtoothService.prototype.getBatch = function (batchHeaderBytes, transactionsList) {
        var batch = sawtooth_sdk_protobuf__WEBPACK_IMPORTED_MODULE_3__["Batch"].create({
            header: batchHeaderBytes,
            headerSignature: this.signer.sign(batchHeaderBytes),
            transactions: transactionsList
        });
        return batch;
    };
    SawtoothService.prototype.getBatchListBytes = function (batchesList) {
        var batchListBytes = sawtooth_sdk_protobuf__WEBPACK_IMPORTED_MODULE_3__["BatchList"].encode({
            batches: batchesList
        }).finish();
        return batchListBytes;
    };
    SawtoothService.prototype.getBatchList = function (transactionsList) {
        var transactionSignatureList = transactionsList.map(function (tx) { return tx.headerSignature; });
        // Create batch header
        var batchHeader = this.getBatchHeaderBytes(transactionSignatureList);
        // Create the batch
        var batch = this.getBatch(batchHeader, transactionsList);
        // Batch List
        var batchList = this.getBatchListBytes([batch]);
        return batchList;
    };
    /*-------END Creating transactions & batches-----------*/
    // Get state of address from rest api
    SawtoothService.prototype.getState = function (address) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var getStateURL, fetchOptions;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                getStateURL = this.REST_API_BASE_URL + '/state/' + address;
                fetchOptions = { method: 'GET' };
                return [2 /*return*/, window.fetch(getStateURL, fetchOptions)];
            });
        });
    };
    SawtoothService.prototype.getDecodedData = function (responseJSON) {
        var dataBytes = responseJSON.data;
        var decodedData = new buffer___WEBPACK_IMPORTED_MODULE_6__["Buffer"](dataBytes, 'base64').toString();
        return decodedData;
    };
    SawtoothService.prototype.sendToRestAPI = function (batchListBytes) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                if (batchListBytes == null) {
                    //to match the donor n receipient we need txnid for detzai
                    // GET state
                    return [2 /*return*/, this.getState(this.address)
                            .then(function (response) {
                            console.log("batchlist null");
                            return response.json();
                        })
                            .then(function (responseJson) {
                            console.log("batchlist null2");
                            return _this.getDecodedData(responseJson);
                        })
                            .catch(function (error) {
                            console.error(error);
                        })];
                }
                else {
                    // POST batch list
                    console.log("calling postBatchList");
                    return [2 /*return*/, this.postBatchList(batchListBytes)];
                }
                return [2 /*return*/];
            });
        });
    };
    // Post batch list to rest api
    SawtoothService.prototype.postBatchList = function (batchListBytes) {
        var postBatchListURL = this.REST_API_BASE_URL + '/batches';
        var fetchOptions = {
            method: 'POST',
            body: batchListBytes,
            headers: {
                'Content-Type': 'application/octet-stream'
            }
        };
        return window.fetch(postBatchListURL, fetchOptions);
    };
    SawtoothService.prototype.getAddressList = function (addr) {
        var _this = this;
        return this.getState(addr)
            .then(function (response) {
            console.log("address null");
            return response.json();
        })
            .then(function (responseJson) {
            console.log("address null2");
            return _this.getDecodedData(responseJson);
        })
            .catch(function (error) {
            console.error(error);
        });
    };
    SawtoothService.prototype.getListData = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                // return this.getState(this.address)
                // .then((response) => {
                //   console.log("batchlist null");
                //   return response.json();
                // })
                // .then((responseJson) => {
                //   console.log("batchlist null2");
                //   return this.getDecodedData(responseJson)
                // })
                // .catch((error) => {
                //   console.error(error);
                // });
                try {
                    this.address = this.hash("hygieia").substr(0, 70);
                    //var addrArray=this.getAddressList(this.address);
                    return [2 /*return*/, this.getState(this.address)
                            .then(function (resp) {
                            console.log("sendToRestAPI response", resp);
                            var addrArray = resp.toString().split(',');
                            console.log("hello", addrArray);
                            /*for (var i in addrArray){
                             return this.getAddressList(addrArray[i])
                            }*/
                            return addrArray;
                        })
                            .catch(function (error) {
                            console.log("error here", error);
                        })
                        /*
                             
                        
                              // Send the batch to REST API
                           
                              
                              
                            */
                    ];
                    /*
                         
                    
                          // Send the batch to REST API
                       
                          
                          
                        */
                }
                catch (e) {
                    console.log("Error in getting list  details", e);
                    return [2 /*return*/, "ERROR"];
                }
                return [2 /*return*/];
            });
        });
    };
    SawtoothService.prototype.superAddress = function (superAddress) {
        throw new Error("Method not implemented.");
    };
    SawtoothService.prototype.sendData = function (btype, otype, gender, idproof, date, name, proc, action) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var context, privateKey, data, encData, transactionHeader, transaction, transactionsList, batchList, e_1;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        context = Object(sawtooth_sdk_signing__WEBPACK_IMPORTED_MODULE_4__["createContext"])('secp256k1');
                        privateKey = context.newRandomPrivateKey();
                        this.signer = new sawtooth_sdk_signing__WEBPACK_IMPORTED_MODULE_4__["CryptoFactory"](context).newSigner(privateKey);
                        this.publicKey = this.signer.getPublicKey().asHex();
                        data = btype + "," + otype + "," + gender + "," + idproof + "," + date + "," + name + "," + proc + "," + action;
                        console.log(data + "data");
                        encData = new text_encoding_lib_encoding__WEBPACK_IMPORTED_MODULE_7__["TextEncoder"]('utf8').encode(data);
                        this.address = this.hash("hygieia").substr(0, 70);
                        this.addrNs = this.hash("hygieia").substr(0, 6);
                        console.log("ThisAddress" + this.address);
                        transactionHeader = this.getTransactionHeaderBytes([this.addrNs], [this.address], encData);
                        console.log("After txn header");
                        transaction = this.getTransaction(transactionHeader, encData);
                        console.log("After transaction");
                        transactionsList = [transaction];
                        console.log("After transactionsList");
                        batchList = this.getBatchList(transactionsList);
                        console.log("After batchList");
                        // Send the batch to REST API
                        return [4 /*yield*/, this.sendToRestAPI(batchList)
                                .then(function (resp) {
                                console.log("sendToRestAPI response", resp);
                            })
                                .catch(function (error) {
                                console.log("error here", error);
                            })];
                    case 1:
                        // Send the batch to REST API
                        _a.sent();
                        return [2 /*return*/, batchList];
                    case 2:
                        e_1 = _a.sent();
                        console.log("Error in reading the key details", e_1);
                        return [2 /*return*/, "ERROR"];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    /* public async sendToRestAPIForList(btype,otype):Promise<any>{
       if (batchListBytes == null) {
             //to match the donor n receipient we need txnid for detzai
         // GET state
         return this.getState(this.address)
           .then((response) => {
             console.log("batchlist null");
             return response.json();
           })
           .then((responseJson) => {
             console.log("batchlist null2");
             return this.getDecodedData(responseJson)
           })
           .catch((error) => {
             console.error(error);
           });
       }
       else {
   
         // POST batch list
         console.log("calling postBatchList");
         return this.postBatchList(batchListBytes)
       }
     }*/
    SawtoothService.prototype.getAddress = function (btype, otype, idproof, proc) {
        var address = this.hash('hygieia').substr(0, 6) +
            this.hash(proc).substr(0, 16) +
            this.hash(btype).substr(0, 16) +
            this.hash(otype).substr(0, 16) +
            this.hash(idproof).substr(0, 16);
        console.log(address);
        return address;
    };
    SawtoothService.prototype.getStateD = function (addre) {
        return this.http.get('http://localhost:4200/api/state/' + addre);
    };
    SawtoothService.prototype.getTxnD = function (txnid) {
        return this.http.get('http://localhost:4200/api/transactions/' + txnid);
    };
    SawtoothService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]])
    ], SawtoothService);
    return SawtoothService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/gokul/Downloads/lab4/final_edit/project_hygieia/hygeia/src/main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 3:
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 4:
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map