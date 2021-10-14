webpackJsonp([6],{

/***/ 711:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PacienteFilterPageModule", function() { return PacienteFilterPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__paciente_filter__ = __webpack_require__(726);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PacienteFilterPageModule = /** @class */ (function () {
    function PacienteFilterPageModule() {
    }
    PacienteFilterPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__paciente_filter__["a" /* PacienteFilterPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__paciente_filter__["a" /* PacienteFilterPage */]),
            ],
        })
    ], PacienteFilterPageModule);
    return PacienteFilterPageModule;
}());

//# sourceMappingURL=paciente-filter.module.js.map

/***/ }),

/***/ 726:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PacienteFilterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(96);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PacienteFilterPage = /** @class */ (function () {
    function PacienteFilterPage(navCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.cidade = '';
        this.uf = '';
        this.ufArr = [
            'CE',
            'AM',
            'SP',
            'RJ',
            'SC',
            'PB',
            'RS',
            'RN'
        ];
        this.cidadeArr = [
            'Boa Viagem',
            'Quixeramobim',
            'Fortaleza',
            'Manaus',
            'Canidé',
            'São Paulo',
            'Rio de Janeiro'
        ];
    }
    PacienteFilterPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PacienteFilterPage');
    };
    PacienteFilterPage.prototype.fechar = function () {
        this.viewCtrl.dismiss();
    };
    PacienteFilterPage.prototype.limpar = function () {
        var params = {
            cidade: this.cidade,
            uf: this.uf,
            isLimpar: true
        };
        this.viewCtrl.dismiss(params);
    };
    PacienteFilterPage.prototype.filtrar = function () {
        var params = {
            cidade: this.cidade,
            uf: this.uf,
            isLimpar: false
        };
        this.viewCtrl.dismiss(params);
    };
    PacienteFilterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-paciente-filter',template:/*ion-inline-start:"C:\Users\user\Downloads\projetos\app-clinica\src\pages\paciente-filter\paciente-filter.html"*/'<!--\n  Generated template for the PacienteFilterPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>Filtrar</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="fechar()">\n        <ion-icon name="close"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n  <ion-list>\n    <ion-item>\n      <ion-label>Cidade</ion-label>\n      <ion-select [(ngModel)]="cidade" okText="Ok" cancelText="Cancelar">\n        <ion-option *ngFor="let item of cidadeArr" value="{{item}}">{{item}}</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label>UF</ion-label>\n      <ion-select [(ngModel)]="uf" okText="Ok" cancelText="Cancelar">\n        <ion-option *ngFor="let item of ufArr" value="{{item}}">{{item}}</ion-option>\n      </ion-select>\n    </ion-item>\n  </ion-list>\n\n  <button ion-button block (click)="filtrar()">Filtrar</button>\n  <button ion-button block (click)="limpar()" color="light">Limpar filtros</button>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\user\Downloads\projetos\app-clinica\src\pages\paciente-filter\paciente-filter.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */]])
    ], PacienteFilterPage);
    return PacienteFilterPage;
}());

//# sourceMappingURL=paciente-filter.js.map

/***/ })

});
//# sourceMappingURL=6.js.map