webpackJsonp([0],{

/***/ 279:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TasksPageModule", function() { return TasksPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tasks__ = __webpack_require__(280);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TasksPageModule = (function () {
    function TasksPageModule() {
    }
    TasksPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__tasks__["a" /* TasksPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__tasks__["a" /* TasksPage */]),
            ],
        })
    ], TasksPageModule);
    return TasksPageModule;
}());

//# sourceMappingURL=tasks.module.js.map

/***/ }),

/***/ 280:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TasksPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_tasks_tasks__ = __webpack_require__(200);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
//esta pagina se encarga de renderizar las tareas


 //Importamos el servicio
var TasksPage = (function () {
    function TasksPage(navCtrl, navParams, tasksProvider //inyecto el servicio
    ) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.tasksProvider = tasksProvider; //inyecto el servicio
        this.tasks = []; //Usamos el modelo para declarar tasks como un array de Task y lo inicializamos vacio
    }
    TasksPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.tasksProvider.getAll() //hacemos una solicitud de getAll()
            .subscribe(function (tasks) {
            _this.tasks = tasks; //Apenas obtener la respuesta le asigno el Array, como los dos son del mismo tipo se van a asignar directamente, this.tasks espera un Array de tareas
        });
    };
    //updateTask recibe la tarea q queremos actualizar
    TasksPage.prototype.updateTask = function (task, position) {
        var _this = this;
        console.log('antes', task); //Imprime la tarea como llega
        var updateTask = __assign({}, task //creamos una copia de la tarea q nos esta llegando
        );
        updateTask.title = 'otro titulo'; //Cambiamos el titulo
        this.tasksProvider.update(updateTask) //hacemos una solicitud de update()
            .subscribe(function (responseTask) {
            console.log('despues', responseTask); //mostramos la respuesta
            _this.tasks[position] = responseTask; //Despues de de actualizar la tarea va a ir al array de tareas en la posicition recibida a actualizar la tarea que respondio el servidor
        });
    };
    TasksPage.prototype.deleteTask = function (task, position) {
        var _this = this;
        console.log('deleteTask');
        this.tasksProvider.remove(task) //hacemos una solicitud de remove()
            .subscribe(function () {
            _this.tasks.splice(position, 1); //splice busca la posicion recibida y lo elimina del Array
        });
    };
    TasksPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-tasks',template:/*ion-inline-start:"C:\Users\Rafael\Curso de Ionic3\conexion-http\src\pages\tasks\tasks.html"*/'<!--\n\n  Generated template for the TasksPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>tasks</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n  <ion-list>\n\n    <ion-item *ngFor="let task of tasks; let position = index" (click)="updateTask( task, position )" (dblclick)="deleteTask( task, position )"><!--teniendo la position sabemos a donde renderizar correctamente-->\n\n      <p>{{ task.title }}</p>\n\n    </ion-item>\n\n  </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Rafael\Curso de Ionic3\conexion-http\src\pages\tasks\tasks.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_tasks_tasks__["a" /* TasksProvider */] //inyecto el servicio
        ])
    ], TasksPage);
    return TasksPage;
}());

//# sourceMappingURL=tasks.js.map

/***/ })

});
//# sourceMappingURL=0.js.map