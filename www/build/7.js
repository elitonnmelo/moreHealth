webpackJsonp([7],{

/***/ 710:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MedicoListPageModule", function() { return MedicoListPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__medico_list__ = __webpack_require__(725);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MedicoListPageModule = /** @class */ (function () {
    function MedicoListPageModule() {
    }
    MedicoListPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__medico_list__["a" /* MedicoListPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__medico_list__["a" /* MedicoListPage */]),
            ],
        })
    ], MedicoListPageModule);
    return MedicoListPageModule;
}());

//# sourceMappingURL=medico-list.module.js.map

/***/ }),

/***/ 725:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MedicoListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_medico_medico__ = __webpack_require__(414);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the MedicoListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MedicoListPage = /** @class */ (function () {
    function MedicoListPage(navCtrl, navParams, medicoProvider) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.medicoProvider = medicoProvider;
        this.itemArr = [];
        this.medicoProvider.listar().subscribe(function (_data) {
            console.log(_data);
            _this.itemArr = _data;
        });
    }
    MedicoListPage.prototype.addItem = function () {
        this.navCtrl.push('MedicoFormPage');
    };
    MedicoListPage.prototype.editItem = function (_item) {
        var itemID = _item.key;
        var item = _item.value;
        this.navCtrl.push('MedicoFormPage', { itemID: itemID, item: item });
    };
    MedicoListPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MedicoListPage');
    };
    MedicoListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-medico-list',template:/*ion-inline-start:"C:\Users\user\Downloads\projetos\app-clinica\src\pages\medico-list\medico-list.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Medicos</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  \n  <ion-list>\n    <ion-item *ngFor="let item of itemArr" (click)="editItem(item)">\n      <h2>{{item.value.nome}}</h2>\n      <p>Telefone: {{item.value.telefone}} | Especialidade: {{item.value.especialidade}}</p>\n    </ion-item>  \n  </ion-list>\n\n  <ion-fab right bottom>\n    <button ion-fab color="secondary" (click)="addItem()">\n      <ion-icon name="add"></ion-icon>\n    </button>\n  </ion-fab>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\user\Downloads\projetos\app-clinica\src\pages\medico-list\medico-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_medico_medico__["a" /* MedicoProvider */]])
    ], MedicoListPage);
    return MedicoListPage;
}());

//# sourceMappingURL=medico-list.js.map

/***/ })

});
//# sourceMappingURL=7.js.map