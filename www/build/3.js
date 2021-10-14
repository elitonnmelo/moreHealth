webpackJsonp([3],{

/***/ 715:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecuperarSenhaPageModule", function() { return RecuperarSenhaPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__recuperar_senha__ = __webpack_require__(730);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var RecuperarSenhaPageModule = /** @class */ (function () {
    function RecuperarSenhaPageModule() {
    }
    RecuperarSenhaPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__recuperar_senha__["a" /* RecuperarSenhaPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__recuperar_senha__["a" /* RecuperarSenhaPage */]),
            ],
        })
    ], RecuperarSenhaPageModule);
    return RecuperarSenhaPageModule;
}());

//# sourceMappingURL=recuperar-senha.module.js.map

/***/ }),

/***/ 730:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecuperarSenhaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_user_user__ = __webpack_require__(132);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RecuperarSenhaPage = /** @class */ (function () {
    function RecuperarSenhaPage(navCtrl, navParams, alertCtrl, loadingCtrl, userProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.userProvider = userProvider;
        this.email = '';
    }
    RecuperarSenhaPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RecuperarSenhaPage');
    };
    RecuperarSenhaPage.prototype.recuperar = function () {
        var loader = this.loadingCtrl.create({
            content: "Aguarde...",
        });
        loader.present();
        this.userProvider.recuperarSenha(this.email);
        loader.dismiss();
        this.showAlert();
    };
    RecuperarSenhaPage.prototype.showAlert = function () {
        var alert = this.alertCtrl.create({
            title: 'Olá',
            subTitle: 'Verifique sua caixa de email, abra-o para recuperar sua senha.',
            buttons: ['OK']
        });
        alert.present();
    };
    RecuperarSenhaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-recuperar-senha',template:/*ion-inline-start:"C:\Users\user\Downloads\projetos\app-clinica\src\pages\recuperar-senha\recuperar-senha.html"*/'<ion-header>\n  <ion-navbar transparent>\n    <ion-title>Recuperar senha</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="conteudo">\n  <ion-grid class="grid-logo">\n    <ion-row aling-items-center justify-content-center>\n      <ion-col col-12 align-self-center>\n        <img width="120" height="120" src="../../assets/imgs/logo.png">\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <ion-grid class="grid-list">\n    <ion-row align-items-center justify-content-center>\n      <ion-col align-self-center col-12 col-lg-4 col-xl-4>\n\n        <ion-list class="conteudo-input">\n\n          <ion-item class="margin-input-top">\n            <ion-input type="text" [(ngModel)]="email" placeholder="E-mail"></ion-input>\n          </ion-item>\n\n          <button ion-button block  (click)="recuperar()" class="margin-btn-top btn">Recuperar</button>\n\n        </ion-list>\n\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\user\Downloads\projetos\app-clinica\src\pages\recuperar-senha\recuperar-senha.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_user_user__["a" /* UserProvider */]])
    ], RecuperarSenhaPage);
    return RecuperarSenhaPage;
}());

//# sourceMappingURL=recuperar-senha.js.map

/***/ })

});
//# sourceMappingURL=3.js.map