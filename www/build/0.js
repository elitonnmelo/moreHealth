webpackJsonp([0],{

/***/ 708:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfiguracoesPageModule", function() { return ConfiguracoesPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__configuracoes__ = __webpack_require__(722);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ConfiguracoesPageModule = /** @class */ (function () {
    function ConfiguracoesPageModule() {
    }
    ConfiguracoesPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__configuracoes__["a" /* ConfiguracoesPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__configuracoes__["a" /* ConfiguracoesPage */]),
            ],
        })
    ], ConfiguracoesPageModule);
    return ConfiguracoesPageModule;
}());

//# sourceMappingURL=configuracoes.module.js.map

/***/ }),

/***/ 722:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfiguracoesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_user_user__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_user__ = __webpack_require__(723);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_firebase_storage_firebase_storage__ = __webpack_require__(416);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_camera__ = __webpack_require__(417);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ConfiguracoesPage = /** @class */ (function () {
    function ConfiguracoesPage(navCtrl, navParams, userProvider, firebaseStorageProvider, loadingCtrl, camera, platform, actionSheetCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.userProvider = userProvider;
        this.firebaseStorageProvider = firebaseStorageProvider;
        this.loadingCtrl = loadingCtrl;
        this.camera = camera;
        this.platform = platform;
        this.actionSheetCtrl = actionSheetCtrl;
        this.item = new __WEBPACK_IMPORTED_MODULE_3__models_user__["a" /* User */]();
        this.foto = '../../assets/imgs/user.png';
        this.isUploaded = false;
    }
    ConfiguracoesPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        //const loader = this.loadingCtrl.create({
        //  content: "Aguarde..."
        // });
        //loader.present();
        console.log('ionViewDidLoad ConfiguracoesPage');
        this.userProvider.lerLocal().then(function (_userId) {
            console.log('teste 0', _userId);
            _this.userProvider.byId(_userId).subscribe(function (_user) {
                console.log('teste 3', _user);
                _this.item = new __WEBPACK_IMPORTED_MODULE_3__models_user__["a" /* User */]();
                _this.item.id = _userId;
                _this.item.nome = _user['nome'];
                _this.item.email = _user['email'];
                console.log('teste 1');
                var path = '/user/' + _this.item.id + '/foto.jpg';
                _this.firebaseStorageProvider.downloadImageStorage(path).then(function (_data) {
                    _this.foto = _data;
                    console.log('teste 2');
                    //loader.dismiss();
                }).catch(function (error) {
                    console.log('erro', error);
                });
            });
        });
    };
    ConfiguracoesPage.prototype.salvar = function () {
        if (this.isUploaded) {
            this.firebaseStorageProvider.uploadImageStorage(this.foto, '/user/' + this.item.id + '/foto.jpg');
        }
    };
    ConfiguracoesPage.prototype.escolherFoto = function () {
        var isMobile = this.platform.is('cordova');
        console.log('mobile', isMobile);
        if (isMobile) {
            this.abrirCelular();
        }
        else {
            this.abrirArquivos();
        }
    };
    ConfiguracoesPage.prototype.abrirArquivos = function () {
        this.fileUserPhoto.nativeElement.click();
    };
    ConfiguracoesPage.prototype.abrirCelular = function () {
        var actionSheet = this.actionSheetCtrl.create({
            title: 'Selecione',
            buttons: [
                {
                    text: 'Câmera',
                    role: 'destructive',
                    handler: function () {
                        // this.abrirCamera();
                    }
                }, {
                    text: 'Galeria',
                    handler: function () {
                        //this.abrirGaleria();
                    }
                }, {
                    text: 'Cancelar',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                }
            ]
        });
        actionSheet.present();
    };
    ConfiguracoesPage.prototype.abrirCamera = function () {
        var options = {
            quality: 50,
            // destinationType: this.camera.DestinationType.FILE_URI,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            allowEdit: false,
            targetHeight: 350,
            targetWidth: 350,
            // CAMERA
            sourceType: this.camera.PictureSourceType.CAMERA,
            saveToPhotoAlbum: true,
            cameraDirection: this.camera.Direction.FRONT,
            correctOrientation: true,
        };
        this.carregarImagem(options);
    };
    ConfiguracoesPage.prototype.abrirGaleria = function () {
        var options = {
            quality: 50,
            // destinationType: this.camera.DestinationType.FILE_URI,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            allowEdit: false,
            targetHeight: 350,
            targetWidth: 350,
            // GALERIA
            mediaType: this.camera.MediaType.PICTURE,
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
            correctOrientation: true,
        };
        this.carregarImagem(options);
    };
    ConfiguracoesPage.prototype.carregarImagem = function (options) {
        var _this = this;
        this.camera.getPicture(options).then(function (imageData) {
            var base64Image = 'data:image/jpeg;base64,' + imageData;
            console.log('base64', base64Image);
            _this.foto = base64Image;
            _this.isUploaded = true;
        }, function (err) {
            // Handle error
        });
    };
    ConfiguracoesPage.prototype.processWebImage = function ($event) {
        var _this = this;
        this.firebaseStorageProvider.processWebImage($event, function (imageBase64, w, h) {
            _this.foto = imageBase64;
            _this.isUploaded = true;
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('fileUserPhoto'),
        __metadata("design:type", Object)
    ], ConfiguracoesPage.prototype, "fileUserPhoto", void 0);
    ConfiguracoesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-configuracoes',template:/*ion-inline-start:"C:\Users\user\Downloads\projetos\app-clinica\src\pages\configuracoes\configuracoes.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Configurações</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="conteudo">\n  <ion-item>\n    <ion-avatar class="img-center">\n      <img  [src]="foto">\n    </ion-avatar>\n  </ion-item>\n\n  <ion-grid class="grid-list">\n    <ion-row align-items-center justify-content-center>\n      <ion-col align-self-center col-12 col-lg-4 col-xl-4>\n        <ion-list class="conteudo-input">\n        \n          <button ion-button clear (click)="escolherFoto()">Escolher foto</button>\n          <input type="file" #fileUserPhoto style="visibility: hidden; height: 0px" name="files[]" (change)="processWebImage($event)" />\n          <ion-item class="margin-input-top">\n            <ion-label inset>Nome</ion-label>\n            <ion-input type="text" [(ngModel)]="item.nome"></ion-input>\n          </ion-item> \n          <ion-item class="margin-input-top">\n            <ion-label inset>Email</ion-label>\n            <ion-input type="text" [(ngModel)]="item.email"></ion-input>\n          </ion-item>  \n      \n          \n        </ion-list>\n        <button ion-button block (click)="salvar()" class="margin-btn-top btn">Salvar</button>\n\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\user\Downloads\projetos\app-clinica\src\pages\configuracoes\configuracoes.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_user_user__["a" /* UserProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_firebase_storage_firebase_storage__["a" /* FirebaseStorageProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */]])
    ], ConfiguracoesPage);
    return ConfiguracoesPage;
}());

//# sourceMappingURL=configuracoes.js.map

/***/ }),

/***/ 723:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = /** @class */ (function () {
    function User() {
        this.email = '';
        this.nome = '';
        this.id = '';
    }
    return User;
}());

//# sourceMappingURL=user.js.map

/***/ })

});
//# sourceMappingURL=0.js.map