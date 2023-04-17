"use strict";
var _this = this;
exports.__esModule = true;
exports.Gato = void 0;
var _absAnimal_1 = require("/.absAnimal");
var __interfaceMascotas_1 = require("/. interfaceMascotas");
// creo la clase Gato que hereda de la clase Animal  en implemanta la interface Mascota
var Gato = /** @class */ (function () {
    function Gato() {
    }
    return Gato;
}());
exports.Gato = Gato;
extend;
_absAnimal_1.Animal;
implements;
__interfaceMascotas_1.Mascota;
{
    Nombre: string;
    constuctor = function (paramPatas, paramNombre) {
        _this = _super.call(this, paramPatas) || this;
        _this.nombre = paramNombre;
    };
    comer();
    void {
        console: console,
        : .log("El gato ".concat(this.nombre, " esta comiendo"))
    };
    caminar(paras, number);
    void {
        console: console,
        : .log("El gato".concat(this.nombre, "tiene ").concat(this.Nombre, "\n    tiene ").concat(this.getPatas(), " y esta caminando"))
    };
    jugar(nombre, string);
    {
        console.log("El gato ".concat(this.nombre, "esta jugando"));
    }
    getNombre();
    string;
    {
        return this.Nombre;
    }
    setNombre(nombre, string);
    void {
        "this": .nombre = nombre
    };
}
