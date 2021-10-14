webpackJsonp([9],{

/***/ 707:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login__ = __webpack_require__(721);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
    LoginPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */]),
            ],
        })
    ], LoginPageModule);
    return LoginPageModule;
}());

//# sourceMappingURL=login.module.js.map

/***/ }),

/***/ 721:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_user_user__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(133);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, navParams, alertCtrl, loadingCtrl, userProvider, storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.userProvider = userProvider;
        this.storage = storage;
        this.email = '';
        this.senha = '';
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage.prototype.entrar = function () {
        var _this = this;
        var loader = this.loadingCtrl.create({
            content: "Aguarde...",
        });
        loader.present();
        this.userProvider.login(this.email, this.senha)
            .then(function (user) {
            loader.dismiss();
            console.log('user', user);
            _this.userProvider.slavarLocal(user.uid)
                .then(function (_data) {
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
            });
        })
            .catch(function (error) {
            loader.dismiss();
            console.log('error', error);
            _this.showAlertErro();
        });
    };
    LoginPage.prototype.cadastro = function () {
        this.navCtrl.push('CadastroPage');
    };
    LoginPage.prototype.esqueciSenha = function () {
        this.navCtrl.push('RecuperarSenhaPage');
    };
    LoginPage.prototype.showAlertErro = function () {
        var alert = this.alertCtrl.create({
            title: 'Erro',
            subTitle: 'Não foi possível realizar o login',
            buttons: ['OK']
        });
        alert.present();
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"C:\Users\user\Downloads\projetos\app-clinica\src\pages\login\login.html"*/'<ion-header>\n  <ion-navbar transparent>\n\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="conteudo">\n  <ion-grid class="grid-logo">\n    <ion-row aling-items-center justify-content-center>\n      <ion-col col-12 align-self-center>\n        <img width="120" height="120" src="../../assets/imgs/logo.png">\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  \n\n  <ion-grid class="grid-list">\n    <ion-row align-items-center justify-content-center>\n      <ion-col align-self-center col-12 col-lg-4 col-xl-4>\n\n        <ion-list class="conteudo-input">\n    \n          <ion-item class="margin-input-top">\n            <ion-input type="text" [(ngModel)]="email" placeholder="E-mail"></ion-input>\n          </ion-item>\n        \n          <ion-item class="margin-input-top">\n            <ion-input type="password" [(ngModel)]="senha" placeholder="Senha"></ion-input>\n          </ion-item>\n      \n          <button ion-button block color="vinho" (click)="entrar()" >Entrar</button>\n        \n      \n          <button class="btn-link margem-btnlink-top" ion-button block color="primary" clear (click)="esqueciSenha()">Recuperar senha? Clique aqui</button>\n      \n        </ion-list>\n\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n</ion-content>\n<ion-footer>\n  <ion-toolbar transparent>\n    <ion-title>\n      <button class="btn-link " ion-button block color="dark" clear (click)="cadastro()">Não possui conta? Cadastre-se</button>\n    </ion-title>\n  </ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"C:\Users\user\Downloads\projetos\app-clinica\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_user_user__["a" /* UserProvider */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ })

});
//# sourceMappingURL=9.js.map