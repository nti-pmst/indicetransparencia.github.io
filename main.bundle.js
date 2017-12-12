webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <nav class=\"nav justify-content-center\">\n  <img src=\"../assets/img/marca branca.png\" class=\"pt-2 pb-2\" width=\"200px\" height=\"auto\">\n</nav> -->\n\n<nav class=\"navbar navbar-light justify-content-center\">\n  <a class=\"navbar-brand\" href=\"\"><img src=\"../assets/img/marca branca.png\" class=\"pt-2 pb-2\" width=\"200px\" height=\"auto\"></a>\n</nav>\n\n<div class=\"text-center align-items-center d-flex flex-column justify-content-center\">\n  <div *ngFor=\"let video of videos\" class=\"my-4\">\n      <h5>{{video.titulo}}</h5>\n      <h5>{{video.subtitulo}}</h5>\n      <video width=\"720\" height=\"480\" controls>\n        <source src=\"{{video.url}}\" type=\"video/mp4\">\n        Your browser does not support the video tag.\n      </video>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "nav {\n  background-color: #E53935; }\n\n.row {\n  margin: 0; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.videos = [
            { titulo: "1 - Informações da Receita", subtitulo: "", url: "../assets/videos/informacoes_receita.mov" },
            { titulo: "2 - Informações da Despesa", subtitulo: "", url: "../assets/videos/informacoes_despesas.mov" },
            { titulo: "7 - Outras informações", subtitulo: "7.1 - Há informações de todos os Poderes e órgãos do ente da Federação de modo consolidado	", url: "../assets/videos/orgaos_e_poderes.mov" },
            { titulo: "7 - Outras informações", subtitulo: "7.2 - Registros de quaisquer repasses ou transferências de recursos financeiros	", url: "../assets/videos/repasses_e_transferencia.mov" },
            { titulo: "7 - Outras informações", subtitulo: "7.3 - Dados gerais para o acompanhamento de programas, ações, projetos e obras de órgãos e entidades", url: "../assets/videos/obras_e_serviços.mov" },
            { titulo: "15 - Requisitos tecnológicos para a sessão Receita", subtitulo: "15.1 - Gravação de relatórios", url: "../assets/videos/receitas_exportacao.mov" },
            { titulo: "15 - Requisitos tecnológicos para a sessão Receita", subtitulo: "15.4 - Série histórica dos dados", url: "../assets/videos/receitas_serie_historica_5_anos.mov" },
            { titulo: "15 - Requisitos tecnológicos para a sessão Receita", subtitulo: "15.5 - Delimitação temporal das consultas", url: "../assets/videos/receitas_consulta_temporal.mov" },
            { titulo: "16 - Requisitos tecnológicos para a sessão Despesa", subtitulo: "16.1 - Gravação de relatórios", url: "../assets/videos/despesas_gravação_de_relatorios.mov" },
            { titulo: "16 - Requisitos tecnológicos para a sessão Despesa", subtitulo: "16.4 - Série histórica dos dados", url: "../assets/videos/despesas_serie_historica_5_anos.mov" },
            { titulo: "16 - Requisitos tecnológicos para a sessão Despesa", subtitulo: "16.5 - Delimitação temporal das consultas", url: "../assets/videos/despesas_consulta_temporal.mov" },
            { titulo: "17 - Requisitos tecnológicos para a sessão Licitações", subtitulo: "17.5 - Delimitação temporal das consultas", url: "../assets/videos/licitacao_consulta_temporal.mov" },
            { titulo: "17 - Requisitos tecnológicos para a sessão Licitações", subtitulo: "17.4 - Série histórica dos dados", url: "../assets/videos/licitacao_dados_historicos_4_anos.mov" }
        ];
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map