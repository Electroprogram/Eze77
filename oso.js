"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var _this = this;
exports.__esModule = true;
exports.Oso = void 0;
var __absAnimal_1 = require(" /. absAnimal");
// creo la clase oso de la clase Animal e implementa Mascota
var Oso = /** @class */ (function (_super) {
    __extends(Oso, _super);
    function Oso() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Oso;
}(__absAnimal_1.Animal));
exports.Oso = Oso;
(function (paramPatas, paraNombre) {
    Super(paramPatas);
    _this.Nombre = _this.paramNombre;
});
comer();
void {
    console: console,
    : .log("El oso ".concat(this.nombre, " esta comiendo"))
};
caminar(patas, number);
void {
    console: console,
    : .log("El oso ".concat(this.nombre, " tiene ").concat(this.getPatas(), "\n                 patas y no camina}"))
};
jugar(nombre, string);
{
    console.log("El oso ".concat(this.nombre, " esta jugando en el agua "));
}
getNombre();
string;
{
    return this.nombre;
}
setNombre(nombre, string);
void {
    Console: Console,
    : .log("El oso se llama ".concat(this.nombre))
};
