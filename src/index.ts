// string, boolean, number
let x:number = 10;

x = 20;

console.log(x);

// tipos básicos
let firstName: string = "Rômulo";
let age: number = 23;
const isAdmin: boolean = true;

console.log(firstName);

// object 
const myNumbers: number[] = [1, 2, 3];

console.log(myNumbers);
console.log(myNumbers.length);
myNumbers.push(5);

console.log(myNumbers);

//  tuplas
let myTuple: [number, string, string[]];

myTuple = [5, "tesst", ["a","b"]];

// obeject literais -> {prop: value}

const user: {name: string, age: number} = {
    name: "Rômulo",
    age: 23,

};

console.log(user);
console.log(user.name);

// any - raros casos
let a: any = 0;

a = "teste";
a = true;
a = [];

// union type
let id: string | number = "10"

id = 200

//id = true
//id =[]

// type alias
type myIdType =  number | string

const userId: myIdType = 10;
const productId: myIdType = "00001";
const shirId: myIdType = 123

// enum
// Tamanho de roupas (size: Médio, size: Pequeno)
enum Size{
    p = "Pequeno",
    M = "Médio",
    G = "Grande",
}

const camisa = {
    name: "Camisa Gola V",
    size: Size.G,
}

console.log(camisa);


// literal types 
 let teste: "autenticado" | null;

 //teste = "outrovalor"
 teste = "autenticado";
 teste = null;


 // fuções
function sum(a :number ,b: number){
    return a + b;
};

console.log(sum(12,12));
//console.log(sum(12,"true"))

// new F
function sayHelloTo(name: string): string{
    return `Hello ${name}`
}
console.log(sayHelloTo("Rômulo"))

// new F
function logger(msg: string): void{
    console.log(msg)
}

logger("test")

// new F
function greeting(name: string, greet?: string){
if (greet){
    console.log(`Olá ${greet} ${name}`);
    return;
}
console.log(`Olá ${name}`)
}

greeting("josé")
greeting("Rômulo", "Sir");

// Interface 
interface MathFunctionParams{
    n1: number, 
    n2: number 
}

function sumNumbers(nums: MathFunctionParams){
    return nums.n1 + nums.n2 

}

console.log(sumNumbers({n1:1, n2: 2}))
//

function multiplyNumbers(nums: MathFunctionParams){
    return nums.n1 * nums.n2

}
 const someNumbers: MathFunctionParams={
    n1: 4, 
    n2: 20
 }

 console.log(multiplyNumbers(someNumbers))


 // narrowing -->
 // checagem de tipos ->

 function doSomenthing(info: number | boolean){
    if(typeof info == "number"){
        console.log(`o Numero é ${info}`)
    return;
    }    
    console.log(' Não foi passado um número')
 }

 doSomenthing(5);
 doSomenthing(true);


 // generics
function showArraysItens<T>(arr: T[]){
    arr.forEach((item)=> {
        console.log(` Item: ${item}`)
    })
}

const a1 = [1, 2, 3]
const a2 = ["a", "b", "c"]

showArraysItens(a1)
showArraysItens(a2)


// classes  ---->
class User{
    name
    role
    isApproved
constructor(name: string, role: string, isApproved: boolean){
    this.name = name
    this.role = role
    this.isApproved = isApproved
}
    showUserName(){
        console.log(`O nome do usuário é: ${this.name}`)
    }
    showUserRole(canshow: boolean){
        if(canshow){
            console.log(`O cargo do usuario é de: ${this.role}`)
            return;
        } 
        console.log(`Informação Restrita!`);
    }        

}

const zeca = new User("Zecá", "Admin", true);
console.log(zeca);
zeca.showUserName();
zeca.showUserRole(false);


// interfaces em classes --- >
interface Ivehicle{
    brand: string
    showBrand(): void
}

// class que implementa a interface -->
class car implements Ivehicle{
    brand
    wheels
constructor(brand: string, wheels: number){
    this.brand = brand
    this.wheels = wheels
}
showBrand(): void {
    console.log(` A marca do carro é: ${this.brand}`)
}
}


const fusca = new car("VW", 4);

fusca.showBrand();

// heranca 
 class SuperCar extends car{
    engine

    constructor( brand: string, wheels: number, engine: number){
        super(brand,wheels)
        this.engine = engine
    }
 }
const a4 = new SuperCar("Audi", 4, 2.0)

console.log(a4);
a4.showBrand();


// decorators -- validação de dados ( evento observavel )

function BaseParamters(){
    return function<T extends{new (...args: any[]):{}}>(constructor: T){
        return class extends constructor{
            id = Math.random();
            createdAt = new Date();
        }
    }
}

@BaseParamters()
class person{ 
    name;

    constructor( name: string){
        this.name =  name
    }

}
 const sam = new person("Sam");

 console.log(sam);