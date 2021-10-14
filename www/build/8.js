webpackJsonp([8],{

/***/ 709:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MedicoFormPageModule", function() { return MedicoFormPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__medico_form__ = __webpack_require__(724);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MedicoFormPageModule = /** @class */ (function () {
    function MedicoFormPageModule() {
    }
    MedicoFormPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__medico_form__["a" /* MedicoFormPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__medico_form__["a" /* MedicoFormPage */]),
            ],
        })
    ], MedicoFormPageModule);
    return MedicoFormPageModule;
}());

//# sourceMappingURL=medico-form.module.js.map

/***/ }),

/***/ 724:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MedicoFormPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular_components_alert_alert_controller__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular_components_toast_toast_controller__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_medico_medico__ = __webpack_require__(414);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MedicoFormPage = /** @class */ (function () {
    function MedicoFormPage(navCtrl, navParams, medicoProvider, toastCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.medicoProvider = medicoProvider;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.titulo = '';
        this.item = {
            nome: '',
            telefone: '',
            crm: '',
            especialidade: '',
            status: '',
        };
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
            this.item = {
                nome: '',
                telefone: '',
                crm: '',
                especialidade: '',
                status: '',
            };
            this.titulo = 'Inserir';
        }
    }
    MedicoFormPage.prototype.ionViewDidLoad = function () {
    };
    MedicoFormPage.prototype.salvar = function () {
        var _this = this;
        console.log(this.item);
        if (this.itemID) {
            this.medicoProvider.atualizar(this.itemID, this.item).then(function (_) {
                _this.presentTost('Medico atualizado com sucesso');
            });
        }
        else {
            this.medicoProvider.inserir(this.item).then(function (_) {
                _this.presentTost('Medico inserido com sucesso');
                _this.navCtrl.pop();
            });
        }
    };
    MedicoFormPage.prototype.excluir = function () {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: 'Excluir?',
            message: 'Tem certeza que deseja excluir este medico?',
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
                        _this.medicoProvider.remover(_this.itemID)
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
    MedicoFormPage.prototype.presentTost = function (mensagem) {
        var toast = this.toastCtrl.create({
            message: mensagem,
            duration: 3000,
            position: 'position',
            showCloseButton: true,
            closeButtonText: 'Ok'
        });
        toast.present();
    };
    MedicoFormPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-medico-form',template:/*ion-inline-start:"C:\Users\user\Downloads\projetos\app-clinica\src\pages\medico-form\medico-form.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>{{titulo}}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="conteudo">\n\n  <ion-grid class="grid-list">\n    <ion-row align-items-center justify-content-center>\n      <ion-col align-self-center col-12 col-lg-4 col-xl-4>\n        <ion-list  class="conteudo-input">\n\n          <ion-item class="margin-input-top">\n            <ion-label inset>Nome</ion-label>\n            <ion-input type="text" [(ngModel)]="item.nome"></ion-input>\n          </ion-item>\n      \n          <ion-item class="margin-input-top">\n            <ion-label inset>Telefone</ion-label>\n            <ion-input type="text" [(ngModel)]="item.telefone"></ion-input>\n          </ion-item>\n      \n          <ion-item class="margin-input-top">\n            <ion-label inset>CRM</ion-label>\n            <ion-input type="text" [(ngModel)]="item.crm"></ion-input>\n          </ion-item>\n      \n          <ion-item class="margin-input-top">\n            <ion-label inset>Especialidade</ion-label>\n            <ion-input type="text" [(ngModel)]="item.especialidade"></ion-input>\n          </ion-item>\n      \n      \n          <ion-item class="margin-input-top">\n            <ion-label inset>Status</ion-label>\n            <ion-input type="text" [(ngModel)]="item.status"></ion-input>\n          </ion-item>\n        \n        </ion-list>\n      \n        <button ion-button block (click)="salvar()" class="margin-btn-top btn">Salvar</button>\n      \n        <button ion-button block color="danger" (click)="excluir()" *ngIf="itemID !== undefined"  class="margin-btn-top btn-excluir">Excluir</button>\n\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  \n  \n\n</ion-content>\n'/*ion-inline-end:"C:\Users\user\Downloads\projetos\app-clinica\src\pages\medico-form\medico-form.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_4__providers_medico_medico__["a" /* MedicoProvider */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular_components_toast_toast_controller__["a" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular_components_alert_alert_controller__["a" /* AlertController */]])
    ], MedicoFormPage);
    return MedicoFormPage;
}());

//# sourceMappingURL=medico-form.js.map

/***/ })

});
//# sourceMappingURL=8.js.map