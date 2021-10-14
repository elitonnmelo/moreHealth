webpackJsonp([1],{

/***/ 704:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClinicaFormPageModule", function() { return ClinicaFormPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__clinica_form__ = __webpack_require__(717);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ClinicaFormPageModule = /** @class */ (function () {
    function ClinicaFormPageModule() {
    }
    ClinicaFormPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__clinica_form__["a" /* ClinicaFormPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__clinica_form__["a" /* ClinicaFormPage */]),
            ],
        })
    ], ClinicaFormPageModule);
    return ClinicaFormPageModule;
}());

//# sourceMappingURL=clinica-form.module.js.map

/***/ }),

/***/ 717:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClinicaFormPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular_components_alert_alert_controller__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular_components_toast_toast_controller__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_clinica_clinica__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_clinica__ = __webpack_require__(718);
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
 * Generated class for the ClinicaFormPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ClinicaFormPage = /** @class */ (function () {
    function ClinicaFormPage(navCtrl, navParams, clinicaProvider, toastCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.clinicaProvider = clinicaProvider;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.titulo = '';
        /*item = {
          nome: '',
          cidade: '',
          endereco: '',
          uf: '',
          lat: '',
          lng: '',
        }*/
        this.item = new __WEBPACK_IMPORTED_MODULE_5__models_clinica__["a" /* Clinica */]();
        this.itemID = undefined;
        var itemID = this.navParams.get('itemID');
        var item = this.navParams.get('item');
        if (itemID) {
            this.item = item;
            this.itemID = itemID;
            this.titulo = 'Atualizar';
        }
        else {
            this.itemID = undefined;
            /*this.item = {
              nome: '',
              cidade: '',
              endereco: '',
              uf: '',
              lat: '',
              lng: '',
            }*/
            this.item = new __WEBPACK_IMPORTED_MODULE_5__models_clinica__["a" /* Clinica */]();
            this.titulo = 'Inserir';
        }
    }
    ClinicaFormPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MedicoFormPage');
    };
    ClinicaFormPage.prototype.salvar = function () {
        var _this = this;
        console.log(this.item);
        this.item.lat = parseFloat(this.item.lat + '');
        this.item.lng = parseFloat(this.item.lng + '');
        if (this.itemID) {
            this.clinicaProvider.atualizarFS(this.itemID, this.item).then(function (_) {
                _this.presentTost('Clinnica atualizada com sucesso');
            });
        }
        else {
            this.clinicaProvider.inserirFS(this.item).then(function (_) {
                _this.presentTost('Clinica inserida com sucesso');
                _this.navCtrl.pop();
            });
        }
    };
    ClinicaFormPage.prototype.excluir = function () {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: 'Excluir?',
            message: 'Tem certeza que deseja excluir esta clinica?',
            buttons: [
                {
                    text: 'Não',
                    handler: function () {
                        console.log('Disagree clicked');
                    }
                },
                {
                    text: 'Excluir',
                    handler: function () {
                        _this.clinicaProvider.removerFS(_this.itemID)
                            .then(function (_) {
                            console.log('Ok');
                        })
                            .catch(function (error) {
                            console.log('Erro', error);
                        });
                    }
                }
            ]
        });
        confirm.present();
    };
    ClinicaFormPage.prototype.presentTost = function (mensagem) {
        var toast = this.toastCtrl.create({
            message: mensagem,
            duration: 3000,
            position: 'position',
            showCloseButton: true,
            closeButtonText: 'Ok'
        });
        toast.present();
    };
    ClinicaFormPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-clinica-form',template:/*ion-inline-start:"C:\Users\user\Downloads\projetos\app-clinica\src\pages\clinica-form\clinica-form.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>{{titulo}}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="conteudo">\n  <ion-grid class="grid-list">\n    <ion-row align-items-center justify-content-center>\n      <ion-col align-self-center col-12 col-lg-4 col-xl-4> \n        <ion-list class="conteudo-input">\n\n          <ion-item class="margin-input-top">\n            <ion-label inset>Nome</ion-label>\n            <ion-input type="text" [(ngModel)]="item.nome"></ion-input>\n          </ion-item>\n      \n          <ion-item class="margin-input-top">\n            <ion-label inset>Endereco</ion-label>\n            <ion-input type="text" [(ngModel)]="item.endereco"></ion-input>\n          </ion-item>\n      \n          <ion-item class="margin-input-top">\n            <ion-label inset>Latitude</ion-label>\n            <ion-input type="text" [(ngModel)]="item.lat"></ion-input>\n          </ion-item>\n      \n          <ion-item class="margin-input-top">\n            <ion-label inset>Longitude</ion-label>\n            <ion-input type="text" [(ngModel)]="item.lng"></ion-input>\n          </ion-item>\n      \n          <ion-item class="margin-input-top">\n            <ion-label inset>Cidade</ion-label>\n            <ion-input type="text" [(ngModel)]="item.cidade"></ion-input>\n          </ion-item>\n      \n      \n          <ion-item class="margin-input-top">\n            <ion-label inset>UF</ion-label>\n            <ion-input type="text" [(ngModel)]="item.uf"></ion-input>\n          </ion-item>\n        \n        </ion-list>\n      \n        <button ion-button block (click)="salvar()" class="margin-btn-top btn">Salvar</button>\n      \n        <button ion-button block color="danger" (click)="excluir()" *ngIf="itemID !== undefined" class="margin-btn-top btn-excluir">Excluir</button>\n\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  \n\n</ion-content>\n'/*ion-inline-end:"C:\Users\user\Downloads\projetos\app-clinica\src\pages\clinica-form\clinica-form.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_4__providers_clinica_clinica__["a" /* ClinicaProvider */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular_components_toast_toast_controller__["a" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular_components_alert_alert_controller__["a" /* AlertController */]])
    ], ClinicaFormPage);
    return ClinicaFormPage;
}());

//# sourceMappingURL=clinica-form.js.map

/***/ }),

/***/ 718:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Clinica; });
var Clinica = /** @class */ (function () {
    function Clinica() {
        this.nome = '';
        this.cidade = '';
        this.endereco = '';
        this.uf = '';
        this.lat = 0.0;
        this.lng = 0.0;
    }
    return Clinica;
}());

//# sourceMappingURL=clinica.js.map

/***/ })

});
//# sourceMappingURL=1.js.map