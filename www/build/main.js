webpackJsonp([13],{

/***/ 132:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(286);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__(84);
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





var UserProvider = /** @class */ (function () {
    function UserProvider(http, afd, afa, storage) {
        this.http = http;
        this.afd = afd;
        this.afa = afa;
        this.storage = storage;
        console.log('Hello UserProvider Provider');
    }
    UserProvider.prototype.login = function (email, senha) {
        return this.afa.auth.signInWithEmailAndPassword(email, senha);
    };
    UserProvider.prototype.cadastro = function (usuario) {
        var _this = this;
        this.afa.auth.createUserWithEmailAndPassword(usuario.email, usuario.senha)
            .then(function (_usuarioAuth) {
            usuario.id = _usuarioAuth.uid;
            delete usuario.senha;
            _this.salvarUsuario(usuario);
        }).catch(function (error) {
            console.log(error);
        });
    };
    UserProvider.prototype.recuperarSenha = function (email) {
        return this.afa.auth.sendPasswordResetEmail(email);
    };
    UserProvider.prototype.salvarUsuario = function (usuario) {
        this.afd.object('/usuarios/' + usuario.id).update(usuario);
    };
    UserProvider.prototype.listarUsuarios = function () {
        return this.afd.list('/usuarios').valueChanges();
    };
    UserProvider.prototype.listarEnderecos = function () {
        return this.afd.list('/endereco').valueChanges();
    };
    UserProvider.prototype.salvarCep = function (endereco) {
        // this.afd.object('/endereco').update(endereco);
        this.afd.list('/endereco').push(endereco);
    };
    UserProvider.prototype.byId = function (id) {
        return this.afd.object('/usuarios/' + id).valueChanges();
    };
    UserProvider.prototype.slavarLocal = function (id) {
        return this.storage.set('usuario', id);
    };
    UserProvider.prototype.lerLocal = function () {
        return this.storage.get('usuario');
    };
    UserProvider.prototype.removerLocal = function () {
        return this.storage.remove('usuario');
    };
    UserProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */]])
    ], UserProvider);
    return UserProvider;
}());

//# sourceMappingURL=user.js.map

/***/ }),

/***/ 228:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClinicaProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_firestore__ = __webpack_require__(183);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/*
  Generated class for the ClinicaProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ClinicaProvider = /** @class */ (function () {
    function ClinicaProvider(http, afd, afs) {
        this.http = http;
        this.afd = afd;
        this.afs = afs;
        this.ENTIDADE = '/clinica';
        console.log('Hello PacienteProvider Provider');
    }
    ClinicaProvider.prototype.listar = function () {
        return this.afd.list(this.ENTIDADE)
            .snapshotChanges()
            .map(function (item) { return item.map(function (changes) { return ({ key: changes.payload.key, value: changes.payload.val() }); }); });
    };
    ClinicaProvider.prototype.inserir = function (item) {
        return this.afd.list(this.ENTIDADE).push(item);
    };
    ClinicaProvider.prototype.atualizar = function (id, item) {
        return this.afd.object(this.ENTIDADE + '/' + id).update(item);
    };
    ClinicaProvider.prototype.remover = function (id) {
        return this.afd.object(this.ENTIDADE + '/' + id).remove();
    };
    ClinicaProvider.prototype.listarFS = function () {
        //return this.afs.collection(this.ENTIDADE).valueChanges();
        return this.afs.collection(this.ENTIDADE)
            .snapshotChanges()
            .map(function (item) { return item.map(function (changes) { return ({ key: changes.payload.doc.id, value: changes.payload.doc.data() }); }); });
    };
    ClinicaProvider.prototype.inserirFS = function (item) {
        item.id = this.afs.createId();
        var item2 = JSON.parse(JSON.stringify(item));
        return this.afs.doc(this.ENTIDADE + '/' + item2.id).set(item2);
    };
    ClinicaProvider.prototype.atualizarFS = function (id, item) {
        return this.afs.doc(this.ENTIDADE + '/' + id).update(item);
    };
    ClinicaProvider.prototype.removerFS = function (id) {
        return this.afs.doc(this.ENTIDADE + '/' + id).delete();
    };
    ClinicaProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_3_angularfire2_firestore__["a" /* AngularFirestore */]])
    ], ClinicaProvider);
    return ClinicaProvider;
}());

//# sourceMappingURL=clinica.js.map

/***/ }),

/***/ 229:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_clinica_clinica__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_export_export__ = __webpack_require__(350);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_user_user__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_geolocation__ = __webpack_require__(354);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, userProvider, clinicaProvider, exportProvider, geolocation) {
        this.navCtrl = navCtrl;
        this.userProvider = userProvider;
        this.clinicaProvider = clinicaProvider;
        this.exportProvider = exportProvider;
        this.geolocation = geolocation;
        this.clinicasArr = [];
    }
    HomePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.map = this.createMap(this.mapElement);
        /*let arrMarkers = [
          {lat: -4.977860440672664,  lng: -39.05786898947217, nome: 'Quixada', abrev: 'Q'},
          {lat: -3.74405702514873, lng: -38.536073960684206, nome: 'Fortaleza', abrev: 'F'}
          
        ];
        this.carregaDadosMapa(arrMarkers);*/
        this.clinicaProvider.listarFS().subscribe(function (_data) {
            _this.clinicasArr = _data;
            for (var i = 0; i < _data.length; i++) {
                var element = _data[i];
                var _lat = element.value.lat;
                var _lng = element.value.lng;
                var _cidade = element.value.cidade;
                var itemMarker = {
                    lat: _lat,
                    lng: _lng,
                    local: _cidade,
                    abrev: _cidade[0],
                };
                _this.carregaDadosMapa(itemMarker);
            }
        });
        this.atualizarLocalizacao();
    };
    HomePage.prototype.addMarkerMe = function (_lat, _lng, nome) {
        return new google.maps.Marker({
            position: { lat: _lat, lng: _lng },
            title: nome,
            icon: new google.maps.MarkerImage('https://mt.google.com/vt/icon?psize=16&font=fonts/Roboto-Regular.ttf&color=ff330000&name=icons/spotlight/spotlight-waypoint-a.png&ax=44&ay=48&scale=1&text=')
        });
    };
    HomePage.prototype.atualizarLocalizacao = function () {
        var _this = this;
        this.geolocation.getCurrentPosition().then(function (resp) {
            // resp.coords.latitude
            // resp.coords.longitude
            console.log('GPS**');
            console.log('lat: ', resp.coords.latitude);
            console.log('lng: ', resp.coords.longitude);
            if (_this.makerMe) {
                _this.makerMe.setMap(null); // remove o marcador do mapa
                _this.makerMe = undefined;
            }
            _this.makerMe = _this.addMarkerMe(resp.coords.latitude, resp.coords.longitude, 'me');
            _this.makerMe.setMap(_this.map);
        }).catch(function (error) {
            console.log('Error getting location', error);
        });
    };
    HomePage.prototype.carregaDadosMapa = function (itemMarker) {
        var _this = this;
        //criando marcador (pino)
        var marker = this.addMarker(itemMarker.lat, itemMarker.lng, itemMarker.local, itemMarker.abrev);
        var addInfowindow = this.addInfoWindow(itemMarker.local); // cria o infoWindow
        marker.setMap(this.map); // adiciona um marcaador no mapa
        marker.addListener("click", function () {
            addInfowindow.open({
                anchor: marker,
                map: _this.map,
            });
        });
        //let marker = this.addMarker(-20.790898,  -51.667554);
        //marker.setMap(this.map);
    };
    HomePage.prototype.createMap = function (mapElement) {
        if (mapElement !== null && mapElement.nativeElement !== null && google) {
            var options_1 = {
                zoom: 7,
                center: { lat: -3.619550531330379, lng: -38.48479387210596 }
            };
            return new google.maps.Map(mapElement.nativeElement, options_1);
        }
        return undefined;
    };
    HomePage.prototype.addMarker = function (_lat, _lng, local, abrev) {
        return new google.maps.Marker({
            position: { lat: _lat, lng: _lng },
            title: local,
            icon: new google.maps.MarkerImage('https://mt.google.com/vt/icon?psize=16&font=fonts/Roboto-Regular.ttf&color=ff330000&name=icons/spotlight/spotlight-waypoint-a.png&ax=44&ay=48&scale=1&text=' + abrev)
        });
    };
    HomePage.prototype.addInfoWindow = function (texto) {
        var contentHtml = " \n      Estamos em: " + texto + "\n    ";
        return new google.maps.InfoWindow({
            content: contentHtml
        });
    };
    HomePage.prototype.gerarCSV = function () {
        console.log(this.exportarDados());
        this.exportProvider.gerarCSV(this.exportarDados(), 'clinicas');
    };
    HomePage.prototype.gerarExcel = function () {
        this.exportProvider.gerarExcel(this.exportarDados(), 'clinicas');
    };
    HomePage.prototype.gerarPDF = function () {
        this.exportProvider.gerarPDF(this.exportarDados(), 'clinicas');
    };
    HomePage.prototype.exportarDados = function () {
        var jsonArr = [];
        for (var i = 0; i < this.clinicasArr.length; i++) {
            var element = this.clinicasArr[i];
            var key = element.key;
            var value = element.value;
            var _item = {
                'latitude': value.lat,
                'longitude': value.lng,
            };
            jsonArr.push(_item);
        }
        return jsonArr;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('map'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], HomePage.prototype, "mapElement", void 0);
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\user\Downloads\projetos\app-clinica\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Clinicas Disponíveis</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="atualizarLocalizacao()">\n        <ion-icon name="refresh"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content >\n  <ion-grid class="mapa-grid">\n    <div #map id="map"></div>\n  </ion-grid>\n\n  <ion-fab bottom left>\n    <button ion-fab mini><ion-icon name="arrow-dropright"></ion-icon></button>\n    <ion-fab-list side="right">\n      <button ion-fab (click)="gerarCSV()"><ion-icon name="download"></ion-icon></button>\n      <button ion-fab (click)="gerarExcel()"><ion-icon name="list-box"></ion-icon></button>\n      <button ion-fab (click)="gerarPDF()"><ion-icon name="document"></ion-icon></button>\n    </ion-fab-list>\n    \n  </ion-fab>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\user\Downloads\projetos\app-clinica\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_user_user__["a" /* UserProvider */],
            __WEBPACK_IMPORTED_MODULE_2__providers_clinica_clinica__["a" /* ClinicaProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_export_export__["a" /* ExportProvider */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_geolocation__["a" /* Geolocation */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 241:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 241;

/***/ }),

/***/ 284:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/cadastro/cadastro.module": [
		703,
		12
	],
	"../pages/clinica-form/clinica-form.module": [
		704,
		1
	],
	"../pages/clinica-list/clinica-list.module": [
		705,
		11
	],
	"../pages/configuracoes/configuracoes.module": [
		708,
		0
	],
	"../pages/endereco-form/endereco-form.module": [
		706,
		10
	],
	"../pages/login/login.module": [
		707,
		9
	],
	"../pages/medico-form/medico-form.module": [
		709,
		8
	],
	"../pages/medico-list/medico-list.module": [
		710,
		7
	],
	"../pages/paciente-filter/paciente-filter.module": [
		711,
		6
	],
	"../pages/paciente-form/paciente-form.module": [
		712,
		5
	],
	"../pages/paciente-list/paciente-list.module": [
		714,
		4
	],
	"../pages/recuperar-senha/recuperar-senha.module": [
		715,
		3
	],
	"../pages/sobre/sobre.module": [
		713,
		2
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 284;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 350:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExportProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_file_saver__ = __webpack_require__(562);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_file_saver___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_file_saver__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_xlsx__ = __webpack_require__(563);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_xlsx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_xlsx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_papaparse__ = __webpack_require__(571);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_papaparse___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_papaparse__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jspdf__ = __webpack_require__(353);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jspdf___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_jspdf__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_jspdf_autotable__ = __webpack_require__(572);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_jspdf_autotable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_jspdf_autotable__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
//import { HttpClient } from '@angular/common/http';






var ExportProvider = /** @class */ (function () {
    function ExportProvider() {
        console.log('Hello ExportProvider Provider');
    }
    ExportProvider_1 = ExportProvider;
    ExportProvider.prototype.gerarCSV = function (jsonArr, nomeArquivo) {
        var csv = __WEBPACK_IMPORTED_MODULE_3_papaparse__["unparse"](jsonArr);
        this.saveAsFile(csv, ExportProvider_1.CSV_TYPE, nomeArquivo + ExportProvider_1.CSV_EXTENSION);
    };
    ExportProvider.prototype.gerarExcel = function (jsonArr, nomeArquivo) {
        var worksheet = __WEBPACK_IMPORTED_MODULE_2_xlsx__["utils"].json_to_sheet(jsonArr);
        var workbook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
        var excelBuffer = __WEBPACK_IMPORTED_MODULE_2_xlsx__["write"](workbook, { bookType: 'xlsx', type: 'array' });
        this.saveAsFile(excelBuffer, ExportProvider_1.EXCEL_TYPE, nomeArquivo + ExportProvider_1.EXCEL_EXTENSION);
    };
    ExportProvider.prototype.gerarPDF = function (jsonArr, nomeArquivo) {
        var headerText = "Clinicas";
        var col = [];
        var rows = [];
        Object.keys(jsonArr[0]).forEach(function (key) {
            col.push(key);
        });
        var _loop_1 = function (i) {
            var element = jsonArr[i];
            var tempArr = [];
            Object.keys(element).forEach(function (key) {
                var value = element[key];
                tempArr.push(value);
            });
            rows.push(tempArr);
        };
        for (var i = 0; i < jsonArr.length; i++) {
            _loop_1(i);
        }
        var doc = new __WEBPACK_IMPORTED_MODULE_4_jspdf__('landscape', 'pt', 'a4');
        doc.setFontSize(8);
        // HEADER
        doc.setFontSize(16);
        doc.setTextColor(40);
        doc.setFontStyle('normal');
        doc.text(headerText, doc.internal.pageSize.getWidth() / 2, 45, { align: "center" }); // set your margins
        // CONTEUDO
        doc.autoTable(col, rows, {
            margin: { top: 65 }
        });
        // FOOTER - PAGE NUMBERS
        var pages = doc.internal.getNumberOfPages();
        var pageWidth = doc.internal.pageSize.width; //Optional
        var pageHeight = doc.internal.pageSize.height; //Optional
        doc.setFontSize(10); //Optional
        for (var j = 1; j < pages + 1; j++) {
            var horizontalPos = pageWidth / 2; //Can be fixed number
            var verticalPos = pageHeight - 10; //Can be fixed number
            doc.setPage(j);
            doc.text(j + " - " + pages, horizontalPos, verticalPos, { align: 'center' });
        }
        // GENERATE PDF - BLOB FILE
        var pdfBuffer = doc.output('blob');
        this.saveAsFile(pdfBuffer, ExportProvider_1.PDF_TYPE, nomeArquivo + ExportProvider_1.PDF_EXTENSION);
    };
    ExportProvider.prototype.saveAsFile = function (buffer, _type, fileName) {
        var data = new Blob([buffer], { type: _type });
        __WEBPACK_IMPORTED_MODULE_1_file_saver__["saveAs"](data, fileName);
    };
    ExportProvider.EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
    ExportProvider.EXCEL_EXTENSION = '.xlsx';
    ExportProvider.CSV_TYPE = 'text/plain';
    ExportProvider.CSV_EXTENSION = '.csv';
    ExportProvider.PDF_TYPE = 'application/pdf';
    ExportProvider.PDF_EXTENSION = '.pdf';
    ExportProvider = ExportProvider_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], ExportProvider);
    return ExportProvider;
    var ExportProvider_1;
}());

//# sourceMappingURL=export.js.map

/***/ }),

/***/ 352:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 414:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MedicoProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(84);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the MedicoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var MedicoProvider = /** @class */ (function () {
    function MedicoProvider(http, afd) {
        this.http = http;
        this.afd = afd;
        this.ENTIDADE = '/medicos';
        console.log('Hello PacienteProvider Provider');
    }
    MedicoProvider.prototype.listar = function () {
        return this.afd.list(this.ENTIDADE)
            .snapshotChanges()
            .map(function (item) { return item.map(function (changes) { return ({ key: changes.payload.key, value: changes.payload.val() }); }); });
    };
    MedicoProvider.prototype.inserir = function (item) {
        return this.afd.list(this.ENTIDADE).push(item);
    };
    MedicoProvider.prototype.atualizar = function (id, item) {
        return this.afd.object(this.ENTIDADE + '/' + id).update(item);
    };
    MedicoProvider.prototype.remover = function (id) {
        return this.afd.object(this.ENTIDADE + '/' + id).remove();
    };
    MedicoProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], MedicoProvider);
    return MedicoProvider;
}());

//# sourceMappingURL=medico.js.map

/***/ }),

/***/ 415:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PacienteProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_firestore__ = __webpack_require__(183);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PacienteProvider = /** @class */ (function () {
    function PacienteProvider(http, afd, afs) {
        this.http = http;
        this.afd = afd;
        this.afs = afs;
        this.ENTIDADE = '/pacientes';
        console.log('Hello PacienteProvider Provider');
    }
    PacienteProvider.prototype.listar = function () {
        return this.afd.list(this.ENTIDADE)
            .snapshotChanges()
            .map(function (item) { return item.map(function (changes) { return ({ key: changes.payload.key, value: changes.payload.val() }); }); });
    };
    PacienteProvider.prototype.buscar = function (cidade) {
        return this.afd.list(this.ENTIDADE, function (ref) { return ref.orderByChild('cidade').equalTo(cidade); })
            .snapshotChanges()
            .map(function (item) { return item.map(function (changes) { return ({ key: changes.payload.key, value: changes.payload.val() }); }); });
    };
    PacienteProvider.prototype.buscarFS = function (uf, cidade) {
        return this.afs.collection(this.ENTIDADE, function (ref) { return ref
            .where('cidade', '==', cidade)
            .where('uf', '==', uf)
            .orderBy('nome'); })
            .snapshotChanges()
            .map(function (item) { return item.map(function (changes) { return ({ key: changes.payload.doc.id, value: changes.payload.doc.data() }); }); });
    };
    PacienteProvider.prototype.listarFS = function () {
        //return this.afs.collection(this.ENTIDADE).valueChanges();
        return this.afs.collection(this.ENTIDADE)
            .snapshotChanges()
            .map(function (item) { return item.map(function (changes) { return ({ key: changes.payload.doc.id, value: changes.payload.doc.data() }); }); });
    };
    PacienteProvider.prototype.inserir = function (item) {
        return this.afd.list(this.ENTIDADE).push(item);
    };
    PacienteProvider.prototype.inserirFS = function (item) {
        item.id = this.afs.createId();
        var item2 = JSON.parse(JSON.stringify(item));
        return this.afs.doc(this.ENTIDADE + '/' + item2.id).set(item2);
    };
    PacienteProvider.prototype.atualizar = function (id, item) {
        return this.afd.object(this.ENTIDADE + '/' + id).update(item);
    };
    PacienteProvider.prototype.atualizarFS = function (id, item) {
        return this.afs.doc(this.ENTIDADE + '/' + id).update(item);
    };
    PacienteProvider.prototype.remover = function (id) {
        return this.afd.object(this.ENTIDADE + '/' + id).remove();
    };
    PacienteProvider.prototype.removerFS = function (id) {
        return this.afs.doc(this.ENTIDADE + '/' + id).delete();
    };
    PacienteProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_3_angularfire2_firestore__["a" /* AngularFirestore */]])
    ], PacienteProvider);
    return PacienteProvider;
}());

//# sourceMappingURL=paciente.js.map

/***/ }),

/***/ 416:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FirebaseStorageProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_storage__ = __webpack_require__(356);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FirebaseStorageProvider = /** @class */ (function () {
    function FirebaseStorageProvider(http, afs) {
        this.http = http;
        this.afs = afs;
    }
    FirebaseStorageProvider.prototype.getBlob = function (b64Data) {
        var contentType = '';
        var sliceSize = 512;
        b64Data = b64Data.split(',')[1];
        var byteCharacters = atob(b64Data);
        var byteArrays = [];
        for (var offset = 0; offset < byteCharacters.length; offset += sliceSize) {
            var slice = byteCharacters.slice(offset, offset + sliceSize);
            var byteNumbers = new Array(slice.length);
            for (var i = 0; i < slice.length; i++) {
                byteNumbers[i] = slice.charCodeAt(i);
            }
            var byteArray = new Uint8Array(byteNumbers);
            byteArrays.push(byteArray);
        }
        var blob = new Blob(byteArrays, { type: contentType });
        return blob;
    };
    FirebaseStorageProvider.prototype.uploadImageStorage = function (imageContent, urlFirebaseStorage) {
        var _this = this;
        var blob = this.getBlob(imageContent);
        return new Promise(function (resolve, reject) {
            var imageref = _this.afs.ref(urlFirebaseStorage);
            var metaData = { contentType: 'image/jpg' };
            imageref.put(blob, metaData)
                .then(function (snapshot) {
                console.log('sucesso');
                resolve('ok');
            })
                .catch(function (error) {
                reject('error');
            });
        });
    };
    FirebaseStorageProvider.prototype.downloadImageStorage = function (pathStorage) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.afs.ref(pathStorage).getDownloadURL().subscribe(function (data) {
                resolve(data);
            }, function (error) { return reject(error); });
        });
    };
    FirebaseStorageProvider.prototype.processWebImage = function (event, sucessCallback) {
        var reader = new FileReader();
        reader.onload = function (readerEvent) {
            var imageData = readerEvent.target.result;
            var image = new Image();
            image.src = imageData;
            image.onload = function (data) {
                var w = data['path'][0].naturalWidth;
                var h = data['path'][0].naturalHeight;
                sucessCallback(imageData, w, h);
            };
        };
        reader.readAsDataURL(event.target.files[0]);
    };
    FirebaseStorageProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_storage__["a" /* AngularFireStorage */]])
    ], FirebaseStorageProvider);
    return FirebaseStorageProvider;
}());

//# sourceMappingURL=firebase-storage.js.map

/***/ }),

/***/ 418:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(419);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(425);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 425:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(701);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_list_list__ = __webpack_require__(702);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__ = __webpack_require__(412);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__ = __webpack_require__(413);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_paciente_paciente__ = __webpack_require__(415);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_clinica_clinica__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_medico_medico__ = __webpack_require__(414);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_user_user__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_common_http__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_angularfire2_auth__ = __webpack_require__(286);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_angularfire2__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_angularfire2_database__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_angularfire2_firestore__ = __webpack_require__(183);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_storage__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__providers_firebase_storage_firebase_storage__ = __webpack_require__(416);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ionic_native_geolocation__ = __webpack_require__(354);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_angularfire2_storage__ = __webpack_require__(356);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__providers_export_export__ = __webpack_require__(350);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__ionic_native_camera__ = __webpack_require__(417);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















//import { env } from '../env/env';



var firebaseConfig = {
    apiKey: "AIzaSyC6U6O6EWr-Gzk75AsYOsExLmXB5owercg",
    authDomain: "app-clinica-b7177.firebaseapp.com",
    databaseURL: "https://app-clinica-b7177-default-rtdb.firebaseio.com",
    projectId: "app-clinica-b7177",
    storageBucket: "app-clinica-b7177.appspot.com",
    messagingSenderId: "229054588292",
    appId: "1:229054588292:web:e5c7ce23b1d1d641eae9d1",
    measurementId: "G-GHMH9398DE"
};
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/cadastro/cadastro.module#CadastroPageModule', name: 'CadastroPage', segment: 'cadastro', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/clinica-form/clinica-form.module#ClinicaFormPageModule', name: 'ClinicaFormPage', segment: 'clinica-form', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/clinica-list/clinica-list.module#ClinicaListPageModule', name: 'ClinicaListPage', segment: 'clinica-list', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/endereco-form/endereco-form.module#EnderecoFormPageModule', name: 'EnderecoFormPage', segment: 'endereco-form', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/configuracoes/configuracoes.module#ConfiguracoesPageModule', name: 'ConfiguracoesPage', segment: 'configuracoes', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/medico-form/medico-form.module#MedicoFormPageModule', name: 'MedicoFormPage', segment: 'medico-form', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/medico-list/medico-list.module#MedicoListPageModule', name: 'MedicoListPage', segment: 'medico-list', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/paciente-filter/paciente-filter.module#PacienteFilterPageModule', name: 'PacienteFilterPage', segment: 'paciente-filter', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/paciente-form/paciente-form.module#PacienteFormPageModule', name: 'PacienteFormPage', segment: 'paciente-form', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/sobre/sobre.module#SobrePageModule', name: 'SobrePage', segment: 'sobre', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/paciente-list/paciente-list.module#PacienteListPageModule', name: 'PacienteListPage', segment: 'paciente-list', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/recuperar-senha/recuperar-senha.module#RecuperarSenhaPageModule', name: 'RecuperarSenhaPage', segment: 'recuperar-senha', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_17__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_12__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_14_angularfire2__["a" /* AngularFireModule */].initializeApp(firebaseConfig),
                __WEBPACK_IMPORTED_MODULE_15_angularfire2_database__["b" /* AngularFireDatabaseModule */],
                __WEBPACK_IMPORTED_MODULE_16_angularfire2_firestore__["b" /* AngularFirestoreModule */],
                __WEBPACK_IMPORTED_MODULE_13_angularfire2_auth__["b" /* AngularFireAuthModule */],
                __WEBPACK_IMPORTED_MODULE_20_angularfire2_storage__["b" /* AngularFireStorageModule */],
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_8__providers_paciente_paciente__["a" /* PacienteProvider */],
                __WEBPACK_IMPORTED_MODULE_9__providers_clinica_clinica__["a" /* ClinicaProvider */],
                __WEBPACK_IMPORTED_MODULE_10__providers_medico_medico__["a" /* MedicoProvider */],
                __WEBPACK_IMPORTED_MODULE_11__providers_user_user__["a" /* UserProvider */],
                __WEBPACK_IMPORTED_MODULE_18__providers_firebase_storage_firebase_storage__["a" /* FirebaseStorageProvider */],
                __WEBPACK_IMPORTED_MODULE_21__providers_export_export__["a" /* ExportProvider */],
                __WEBPACK_IMPORTED_MODULE_19__ionic_native_geolocation__["a" /* Geolocation */],
                __WEBPACK_IMPORTED_MODULE_22__ionic_native_camera__["a" /* Camera */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 569:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 570:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 701:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(412);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(413);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_user_user__ = __webpack_require__(132);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





//import { ListPage } from '../pages/list/list';


var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, storage, userProvider) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.storage = storage;
        this.userProvider = userProvider;
        this.rootPage = 'LoginPage';
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'HOME', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */], icon: 'home' },
            //{ title: 'List', component: ListPage },
            { title: 'CONFIGURAÇÕES', component: 'ConfiguracoesPage', icon: 'settings' },
            { title: 'PACIENTES', component: 'PacienteListPage', icon: 'pulse' },
            { title: 'CLINICAS', component: 'ClinicaListPage', icon: 'people' },
            { title: 'MEDICOS', component: 'MedicoListPage', icon: 'md-medkit' }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
            //novo daqui 
            _this.userProvider.lerLocal().then(function (_usuario) {
                console.log('AP COMPONENT', _usuario);
                if (_usuario && _usuario.length > 0) {
                    // if(_usuario && _usuario.email > 0) {
                    _this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
                }
                else {
                    _this.rootPage = 'LoginPage';
                }
            });
            //ate aqui
        });
    };
    MyApp.prototype.openPage = function (page) {
        this.nav.setRoot(page.component);
    };
    MyApp.prototype.logout = function () {
        var _this = this;
        this.userProvider.removerLocal().then(function (_data) {
            _this.nav.setRoot('LoginPage');
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\user\Downloads\projetos\app-clinica\src\app\app.html"*/'<ion-menu [content]="content" type="overlay">\n  <ion-header>\n    <ion-toolbar color="dark">\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        <ion-icon name="{{p.icon}}"> </ion-icon>\n        {{p.title}}\n      </button>\n\n      <button menuClose ion-item (click)="logout()">\n        Sair\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"C:\Users\user\Downloads\projetos\app-clinica\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_6__providers_user_user__["a" /* UserProvider */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 702:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
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


var ListPage = /** @class */ (function () {
    function ListPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
        // Let's populate this page with some filler content for funzies
        this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
            'american-football', 'boat', 'bluetooth', 'build'];
        this.items = [];
        for (var i = 1; i < 11; i++) {
            this.items.push({
                title: 'Item ' + i,
                note: 'This is item #' + i,
                icon: this.icons[Math.floor(Math.random() * this.icons.length)]
            });
        }
    }
    ListPage_1 = ListPage;
    ListPage.prototype.itemTapped = function (event, item) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(ListPage_1, {
            item: item
        });
    };
    ListPage = ListPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-list',template:/*ion-inline-start:"C:\Users\user\Downloads\projetos\app-clinica\src\pages\list\list.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>List</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n      <ion-icon [name]="item.icon" item-start></ion-icon>\n      {{item.title}}\n      <div class="item-note" item-end>\n        {{item.note}}\n      </div>\n    </button>\n  </ion-list>\n  <div *ngIf="selectedItem" padding>\n    You navigated here from <b>{{selectedItem.title}}</b>\n  </div>\n</ion-content>\n'/*ion-inline-end:"C:\Users\user\Downloads\projetos\app-clinica\src\pages\list\list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], ListPage);
    return ListPage;
    var ListPage_1;
}());

//# sourceMappingURL=list.js.map

/***/ })

},[418]);
//# sourceMappingURL=main.js.map