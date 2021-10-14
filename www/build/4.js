webpackJsonp([4],{

/***/ 714:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PacienteListPageModule", function() { return PacienteListPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__paciente_list__ = __webpack_require__(729);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PacienteListPageModule = /** @class */ (function () {
    function PacienteListPageModule() {
    }
    PacienteListPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__paciente_list__["a" /* PacienteListPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__paciente_list__["a" /* PacienteListPage */]),
            ],
        })
    ], PacienteListPageModule);
    return PacienteListPageModule;
}());

//# sourceMappingURL=paciente-list.module.js.map

/***/ }),

/***/ 729:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PacienteListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular_components_modal_modal_controller__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_paciente_paciente__ = __webpack_require__(415);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PacienteListPage = /** @class */ (function () {
    function PacienteListPage(navCtrl, navParams, pacienteProvider, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.pacienteProvider = pacienteProvider;
        this.modalCtrl = modalCtrl;
        this.itemArr = [];
        this.carregaLista();
    }
    PacienteListPage.prototype.addItem = function () {
        this.navCtrl.push('PacienteFormPage');
    };
    PacienteListPage.prototype.editItem = function (_item) {
        var itemID = _item.key;
        var item = _item.value;
        this.navCtrl.push('PacienteFormPage', { itemID: itemID, item: item });
    };
    PacienteListPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PacienteListPage');
    };
    PacienteListPage.prototype.openFilter = function () {
        var _this = this;
        var modal = this.modalCtrl.create('PacienteFilterPage');
        modal.onDidDismiss(function (_params) {
            //console.log('chegou', _params)
            if (_params !== undefined) {
                if (_params.isLimpar) {
                    _this.carregaLista();
                }
                else {
                    var cidade = _params.cidade;
                    var uf = _params.uf;
                    console.log('cidade', cidade);
                    console.log('UF', uf);
                    _this.pacienteProvider.buscarFS(uf, cidade).subscribe(function (_data) {
                        console.log('buscar', _data);
                        _this.itemArr = _data;
                    });
                }
            }
        });
        modal.present();
    };
    PacienteListPage.prototype.carregaLista = function () {
        var _this = this;
        this.pacienteProvider.listarFS().subscribe(function (_data) {
            console.log(_data);
            _this.itemArr = _data;
        });
    };
    PacienteListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-paciente-list',template:/*ion-inline-start:"C:\Users\user\Downloads\projetos\app-clinica\src\pages\paciente-list\paciente-list.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Pacientes</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="openFilter()">\n        <ion-icon name="funnel"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n  \n  <ion-list>\n    <ion-item *ngFor="let item of itemArr" (click)="editItem(item)">\n      <h2>{{item.value.nome}}</h2>\n      <p>Telefone: {{item.value.telefone}} | Status: {{item.value.status}}</p>\n    </ion-item>  \n  </ion-list>\n\n  <ion-fab right bottom>\n    <button ion-fab color="secondary" (click)="addItem()">\n      <ion-icon name="add"></ion-icon>\n    </button>\n  </ion-fab>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\user\Downloads\projetos\app-clinica\src\pages\paciente-list\paciente-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_paciente_paciente__["a" /* PacienteProvider */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular_components_modal_modal_controller__["a" /* ModalController */]])
    ], PacienteListPage);
    return PacienteListPage;
}());

//# sourceMappingURL=paciente-list.js.map

/***/ })

});
//# sourceMappingURL=4.js.map