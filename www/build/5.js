webpackJsonp([5],{

/***/ 712:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PacienteFormPageModule", function() { return PacienteFormPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__paciente_form__ = __webpack_require__(727);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PacienteFormPageModule = /** @class */ (function () {
    function PacienteFormPageModule() {
    }
    PacienteFormPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__paciente_form__["a" /* PacienteFormPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__paciente_form__["a" /* PacienteFormPage */]),
            ],
        })
    ], PacienteFormPageModule);
    return PacienteFormPageModule;
}());

//# sourceMappingURL=paciente-form.module.js.map

/***/ }),

/***/ 727:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PacienteFormPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular_components_alert_alert_controller__ = __webpack_require__(226);
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




var PacienteFormPage = /** @class */ (function () {
    function PacienteFormPage(navCtrl, navParams, pacienteProvider, toastCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.pacienteProvider = pacienteProvider;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.titulo = '';
        this.item = {
            nome: '',
            telefone: '',
            endereco: '',
            cidade: '',
            uf: '',
            convenio: '',
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
                endereco: '',
                cidade: '',
                uf: '',
                convenio: '',
                status: '',
            };
            this.titulo = 'Inserir';
        }
    }
    PacienteFormPage.prototype.ionViewDidLoad = function () {
    };
    PacienteFormPage.prototype.salvar = function () {
        var _this = this;
        console.log(this.item);
        if (this.itemID) {
            //this.pacienteProvider.atualizar(this.itemID, this.item).then(_ => {
            //this.presentTost('Paciente atualizado com sucesso');
            //})
            this.pacienteProvider.atualizarFS(this.itemID, this.item).then(function (_) {
                _this.presentTost('Paciente atualizado com sucesso');
            });
        }
        else {
            /*this.pacienteProvider.inserir(this.item).then(_ =>{
              this.presentTost('Paciente inserido com sucesso');
              this.navCtrl.pop();
            });*/
            this.pacienteProvider.inserirFS(this.item).then(function (_) {
                _this.presentTost('Paciente inserido com sucesso');
                _this.navCtrl.pop();
            });
            ;
        }
    };
    PacienteFormPage.prototype.excluir = function () {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: 'Excluir?',
            message: 'Tem certeza que deseja excluir este paciente?',
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
                        /*this.pacienteProvider.remover(this.itemID)
                          .then(_ => {
                            console.log('Ok');
                          })
                          .catch(error => {
                            console.log('Erro', error);
                          })*/
                        _this.pacienteProvider.removerFS(_this.itemID)
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
    PacienteFormPage.prototype.presentTost = function (mensagem) {
        var toast = this.toastCtrl.create({
            message: mensagem,
            duration: 3000,
            position: 'position',
            showCloseButton: true,
            closeButtonText: 'Ok'
        });
        toast.present();
    };
    PacienteFormPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-paciente-form',template:/*ion-inline-start:"C:\Users\user\Downloads\projetos\app-clinica\src\pages\paciente-form\paciente-form.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>{{titulo}}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="conteudo">\n\n  <ion-grid class="grid-list">\n    <ion-row align-items-center justify-content-center>\n      <ion-col align-self-center col-12 col-lg-4 col-xl-4>\n        <ion-list class="conteudo-input">\n\n          <ion-item class="margin-input-top">\n            <ion-label inset>Nome</ion-label>\n            <ion-input type="text" [(ngModel)]="item.nome"></ion-input>\n          </ion-item>\n      \n          <ion-item class="margin-input-top">\n            <ion-label inset>Telefone</ion-label>\n            <ion-input type="text" [(ngModel)]="item.telefone"></ion-input>\n          </ion-item>\n      \n          <ion-item class="margin-input-top">\n            <ion-label inset>Endereço</ion-label>\n            <ion-input type="text" [(ngModel)]="item.endereco"></ion-input>\n          </ion-item>\n      \n          <ion-item class="margin-input-top">\n            <ion-label inset>Cidade</ion-label>\n            <ion-input type="text" [(ngModel)]="item.cidade"></ion-input>\n          </ion-item>\n      \n          <ion-item class="margin-input-top">\n            <ion-label inset>UF</ion-label>\n            <ion-input type="text" [(ngModel)]="item.uf"></ion-input>\n          </ion-item>\n      \n          <ion-item class="margin-input-top">\n            <ion-label inset>Convenio</ion-label>\n            <ion-input type="text" [(ngModel)]="item.convenio"></ion-input>\n          </ion-item>\n      \n          <ion-item class="margin-input-top">\n            <ion-label inset>Status</ion-label>\n            <ion-input type="text" [(ngModel)]="item.status"></ion-input>\n          </ion-item>\n        \n        </ion-list>\n      \n        <button ion-button block (click)="salvar()" class="margin-btn-top btn">Salvar</button>\n      \n        <button ion-button block color="danger" (click)="excluir()" *ngIf="itemID !== undefined" class="margin-btn-top btn-excluir">Excluir</button>\n\n\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  \n\n</ion-content>\n'/*ion-inline-end:"C:\Users\user\Downloads\projetos\app-clinica\src\pages\paciente-form\paciente-form.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_paciente_paciente__["a" /* PacienteProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular_components_alert_alert_controller__["a" /* AlertController */]])
    ], PacienteFormPage);
    return PacienteFormPage;
}());

//# sourceMappingURL=paciente-form.js.map

/***/ })

});
//# sourceMappingURL=5.js.map