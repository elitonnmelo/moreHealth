webpackJsonp([11],{

/***/ 705:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClinicaListPageModule", function() { return ClinicaListPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__clinica_list__ = __webpack_require__(719);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ClinicaListPageModule = /** @class */ (function () {
    function ClinicaListPageModule() {
    }
    ClinicaListPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__clinica_list__["a" /* ClinicaListPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__clinica_list__["a" /* ClinicaListPage */]),
            ],
        })
    ], ClinicaListPageModule);
    return ClinicaListPageModule;
}());

//# sourceMappingURL=clinica-list.module.js.map

/***/ }),

/***/ 719:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClinicaListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_clinica_clinica__ = __webpack_require__(228);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ClinicaListPage = /** @class */ (function () {
    function ClinicaListPage(navCtrl, navParams, clinicaProvider) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.clinicaProvider = clinicaProvider;
        this.itemArr = [];
        this.clinicaProvider.listarFS().subscribe(function (_data) {
            console.log(_data);
            _this.itemArr = _data;
        });
    }
    ClinicaListPage.prototype.addItem = function () {
        this.navCtrl.push('ClinicaFormPage');
    };
    ClinicaListPage.prototype.editItem = function (_item) {
        var itemID = _item.key;
        var item = _item.value;
        this.navCtrl.push('ClinicaFormPage', { itemID: itemID, item: item });
    };
    ClinicaListPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ClinicaListPage');
    };
    ClinicaListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-clinica-list',template:/*ion-inline-start:"C:\Users\user\Downloads\projetos\app-clinica\src\pages\clinica-list\clinica-list.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Clinicas</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  \n  <ion-list>\n    <ion-item *ngFor="let item of itemArr" (click)="editItem(item)">\n      <h2>{{item.value.nome}}</h2>\n      <p>Cidade: {{item.value.cidade}} | UF: {{item.value.uf}}</p>\n    </ion-item>  \n  </ion-list>\n\n  <ion-fab right bottom>\n    <button ion-fab color="secondary" (click)="addItem()">\n      <ion-icon name="add"></ion-icon>\n    </button>\n  </ion-fab>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\user\Downloads\projetos\app-clinica\src\pages\clinica-list\clinica-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_clinica_clinica__["a" /* ClinicaProvider */]])
    ], ClinicaListPage);
    return ClinicaListPage;
}());

//# sourceMappingURL=clinica-list.js.map

/***/ })

});
//# sourceMappingURL=11.js.map