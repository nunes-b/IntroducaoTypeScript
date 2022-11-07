"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let x = 10;
x = 20;
console.log(x);
let firstName = "Rômulo";
let age = 23;
const isAdmin = true;
console.log(firstName);
const myNumbers = [1, 2, 3];
console.log(myNumbers);
console.log(myNumbers.length);
myNumbers.push(5);
console.log(myNumbers);
let myTuple;
myTuple = [5, "tesst", ["a", "b"]];
const user = {
    name: "Rômulo",
    age: 23,
};
console.log(user);
console.log(user.name);
let a = 0;
a = "teste";
a = true;
a = [];
let id = "10";
id = 200;
const userId = 10;
const productId = "00001";
const shirId = 123;
var Size;
(function (Size) {
    Size["p"] = "Pequeno";
    Size["M"] = "M\u00E9dio";
    Size["G"] = "Grande";
})(Size || (Size = {}));
const camisa = {
    name: "Camisa Gola V",
    size: Size.G,
};
console.log(camisa);
let teste;
teste = "autenticado";
teste = null;
function sum(a, b) {
    return a + b;
}
;
console.log(sum(12, 12));
function sayHelloTo(name) {
    return `Hello ${name}`;
}
console.log(sayHelloTo("Rômulo"));
function logger(msg) {
    console.log(msg);
}
logger("test");
function greeting(name, greet) {
    if (greet) {
        console.log(`Olá ${greet} ${name}`);
        return;
    }
    console.log(`Olá ${name}`);
}
greeting("josé");
greeting("Rômulo", "Sir");
function sumNumbers(nums) {
    return nums.n1 + nums.n2;
}
console.log(sumNumbers({ n1: 1, n2: 2 }));
function multiplyNumbers(nums) {
    return nums.n1 * nums.n2;
}
const someNumbers = {
    n1: 4,
    n2: 20
};
console.log(multiplyNumbers(someNumbers));
function doSomenthing(info) {
    if (typeof info == "number") {
        console.log(`o Numero é ${info}`);
        return;
    }
    console.log(' Não foi passado um número');
}
doSomenthing(5);
doSomenthing(true);
function showArraysItens(arr) {
    arr.forEach((item) => {
        console.log(` Item: ${item}`);
    });
}
const a1 = [1, 2, 3];
const a2 = ["a", "b", "c"];
showArraysItens(a1);
showArraysItens(a2);
class User {
    constructor(name, role, isApproved) {
        this.name = name;
        this.role = role;
        this.isApproved = isApproved;
    }
    showUserName() {
        console.log(`O nome do usuário é: ${this.name}`);
    }
    showUserRole(canshow) {
        if (canshow) {
            console.log(`O cargo do usuario é de: ${this.role}`);
            return;
        }
        console.log(`Informação Restrita!`);
    }
}
const zeca = new User("Zecá", "Admin", true);
console.log(zeca);
zeca.showUserName();
zeca.showUserRole(false);
class car {
    constructor(brand, wheels) {
        this.brand = brand;
        this.wheels = wheels;
    }
    showBrand() {
        console.log(` A marca do carro é: ${this.brand}`);
    }
}
const fusca = new car("VW", 4);
fusca.showBrand();
class SuperCar extends car {
    constructor(brand, wheels, engine) {
        super(brand, wheels);
        this.engine = engine;
    }
}
const a4 = new SuperCar("Audi", 4, 2.0);
console.log(a4);
a4.showBrand();
function BaseParamters() {
    return function (constructor) {
        return class extends constructor {
            constructor() {
                super(...arguments);
                this.id = Math.random();
                this.createdAt = new Date();
            }
        };
    };
}
let person = class person {
    constructor(name) {
        this.name = name;
    }
};
person = __decorate([
    BaseParamters()
], person);
const sam = new person("Sam");
console.log(sam);
