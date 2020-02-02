var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
function log(constructor) {
    console.log("New " + constructor.name + " created!"); //New Yogurt created!
}
var Yogurt = /** @class */ (function () {
    function Yogurt(flavor) {
        this.flavor = flavor;
    }
    Yogurt = __decorate([
        log
    ], Yogurt);
    return Yogurt;
}());
function log2(constructor) {
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        console.log("New " + constructor.name + " created!");
        return new (constructor.bind.apply(constructor, __spreadArrays([void 0], args)))();
    };
}
var Yogurt2 = /** @class */ (function () {
    function Yogurt2(flavor) {
        this.flavor = flavor;
    }
    Yogurt2 = __decorate([
        log2
    ], Yogurt2);
    return Yogurt2;
}());
new Yogurt2('strawberry'); // New Yogurt2 created!
new Yogurt2('cherry'); // New Yogurt2 created!
