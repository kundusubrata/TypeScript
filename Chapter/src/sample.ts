/* ********************************************************
 ********************* TypeSript ************************
 ******************************************************** */

// ################## DataTypes in TypeScript ######################

// let a = 9;
// // let name = 'krishna' // can not declare name because of name is allready declare in window object
// let rk = 'krishna';
// // console.log(rk/a);  // you get error in typescript but it is ok in js

// let num:number = 34;
// let str:string = 'krishna';
// let check:boolean = true;
// let whatever:any;  // try to avoid any.

// // let num1 = <string>34;
// let num1 = <string>'krishna';

//                 // ==> Union type
// let surname: string | number ;  // in this way we can assign more datatypes
// surname = 'Krishna';
// surname = 100;

//                     // ===> Function
// const func = (n: number, m: number):number => {
//   console.log(n, m);
//     // return String(n*m);
//   return n * m;
// };

//                     // ===> use type

// type UserName = (n: number, m: number) => number;

// const func: UserName = (n, m) => {
//   return n * m;
// };

// ################## Arrays in TypeScript ######################

// const arr: number[] = [3, 4, 5, 6, 6];
// const str: string[] = ["sdf", "fdg", "fghg", "oukjm", "qwqasa"];

// const arr2: Array<string> = ["ere"];
// const arr3: Array<string | number> = ["ere", 4];

// const arr4: Array<number> = new Array(30);

// arr4.forEach(i => {
//     // i.  => After you can see the all method of whatever datatypes of this array. adv in ts
// });
// arr2.forEach(i => {
//     // i.  => here you can see string method
// });

//             // Tuple
// const arr5 : [number,number,number] = [ 3,3,3];

// ################## Objects in TypeScript ######################

// const obj: {
//   height: number;
//   weight: number;
//   gender: boolean;
// } = {
//   height: 180,
//   weight: 200,
//   gender: true,
// };

//             // ===> using type
// type OBJ = {
//   height: number;
//   weight: number;
//   gender?: boolean;
// };

// const obj1: OBJ = {
//   height: 180,
//   weight: 200,
//   gender: true,
// };

// const obj2: OBJ ={
//     height: 180,
//     weight: 200,
//     gender: false,
// }

// const obj3: OBJ = {
//     height: 185,
//     weight:300,
// }

//             // ===> interface
// interface OBJ1 {
//     height: number;
//     weight: number;
//     gender?: boolean;
// }

// const obj4: OBJ1 = {
//     height: 160,
//     weight: 150,
// }

// type FuncType = (n:number,m:number) => void;

// interface OBJ2 extends OBJ1 {
//     age: number,
//     // func?: () => void;
//     // func?: (n:number,m:number) => void;
//     func?: FuncType,
// }

// const obj5: OBJ2 = {
//     height: 170,
//     weight: 150,
//     gender: false,
//     age: 32,
//     func: (n,m) => {
//         console.log(n * m);
//     }
// }

// ################## Functions in TypeScript ######################

//             //  ===> Optional parameter
// type FuncType = (n: number, m: number, o?: number) => number;

// const func: FuncType = (n, m, o) => {
//   if (typeof o === "undefined") return n * m;

//   return n * m * o;
// };

// func(25, 3);

//             //  ===> Default parameter
// type FuncType = (n: number, m: number, o?: number) => number;

// const func: FuncType = (n, m, o = 20) => {
//   return n * m * o;
// };

// func(25, 3);

//             //  ===> Default parameter
// const func = (n: number, m: number, o: number = 20):number => {
//   return n * m * o;
// };

// func(25, 3);

//  ===> Rest Operator
// const func = (...m:number[]) => {
//   return m;
// };

// func(25, 3, 5,2, 7, 9,1);

//             //  ===> Rest Operator
// type FuncType = (...m:number[]) => number[];

// const func: FuncType = (...m) => {
//   return m;
// };

// func(25, 3,5,2, 7, 9,1);

// ===> with function
// function Lol(n:number):number {
//     return n;
// }

// type FuncType = (m:number) => number;

// const Lol: FuncType = function Lol(n){
//     return n;
// }

// ################## Functions with Objects ######################

// type GetDataType = (product: {
//   name: string;
//   stock: number;
//   price: number;
//   photo: string;
// }) => void;

// const getData: GetDataType = (product) => {
//   console.log(product);
// };

// const productOne: {
//   name: string;
//   stock: number;
//   price: number;
//   photo: string;
// } = {
//   name: "macbook",
//   stock: 46,
//   price: 99999,
//   photo: "photourl1",
// };

// getData(productOne);

// interface Product {
//   name: string;
//   stock: number;
//   price: number;
//   photo: string;
//   readonly id: string,
// }
// type GetDataType = (product: Product) => void;

// const getData: GetDataType = (product) => {
//   console.log(product);
// //   product.id = "dfsj"; // can not change it because this is read--only
// };

// const productOne: Product = {
//   name: "macbook",
//   stock: 46,
//   price: 99999,
//   photo: "photourl1",
//   id: "sdfja",
// };

// getData(productOne);

// ===> Never Type

// const errorHandler = ():never =>{
//     // throw new Error;
//     // return new Error;
//     throw new Error;
// }

//             // themeMode
// type themeMode = "light" | "dark";

// const mode: themeMode = 'dark';

// ################## Classes in TypeScript ######################

// class Player {
//     height;
//     weight;

//     constructor(height:number,weight:number){
//         this.height = height;
//         this.weight = weight;
//     }
// }

// const krishna = new Player(100,144);
// console.log(krishna.height);
// console.log(krishna.weight);

//--------------------------------------------------------------

// class Player {
//     private height;
//     weight;

//     constructor(height:number,weight:number){
//         this.height = height;
//         this.weight = weight;
//     }

//     myHeight = () => {
//         return this.height;
//     }
// }

// const krishna = new Player(100,144);
// // console.log(krishna.height);  // it will gives you error in ts because this height is private only access in class.
// // console.log(krishna.height)      // but it will print because of js

//--------------------------------------------------------------

// class Player {
//     private height;
//     public weight;

//     constructor(height:number,weight:number){
//         this.height = height;
//         this.weight = weight;
//     }
// }
// const krishna = new Player(100,144);
// console.log(krishna.weight);

//--------------------------------------------------------------

// class Player {
//     public readonly id: string;
//   constructor(
//     private height: number,
//     public weight: number,
//     protected power: number
//   ) {
//     this.id = String(Math.random() * 100);
//   }

//   myHeight = () => this.height;
// }
// // const krishna = new Player(100, 144,23);
// class Player2 extends Player {
//   special: boolean;
//   constructor(height: number, weight: number, power: number, special: boolean) {
//     super(height, weight, power);
//     this.special = special;
//     // this.id = 'dsfj' // here you can't change anything because of read-only
//   }

//   getMyPower = () => this.power;
// }
// const krishna2 = new Player2(100, 150, 23, true);
// console.log("Weight", krishna2.weight);
// console.log("Height", krishna2.myHeight());
// // console.log("Height", krishna.height); // it gives error because this is private
// // console.log("power", krishna.power); // it gives error because this is protected. it access only class and subclass
// console.log("Power",krishna2.getMyPower());
// console.log("Id",krishna2.id);

//--------------------------------------------------------------

// class Player {
//   public readonly id: string;
//   constructor(
//     private height: number,
//     public weight: number,
//     protected power: number
//   ) {
//     this.id = String(Math.random() * 100);
//   }

//   get getMyHeight(): number {
//     return this.height;
//   }
//   set changeHeight(val: number) {
//     this.height = val;
//   }
// }
// const krishna = new Player(100, 144, 23);
// console.log("Height", krishna.getMyHeight);
// krishna.changeHeight = 500;
// console.log("Height",krishna.getMyHeight);

//--------------------------------------------------------------

// interface ProductType {
//   name: string;
//   price: number;
//   stock: number;
//   //   id: string;
//   offer?: boolean;
//   getId: () => string;
// }

// // class Product implements ProductType{
// //     public name: string;
// //     public price: number;
// //     public stock: number;
// //     public id: string = String(Math.random() * 1000);

// //     constructor(name: string,price:number,stock:number){
// //         this.name = name;
// //         this.price = price;
// //         this.stock = stock;
// //     }
// // }

// interface GiveId{
//     getSecondId: () => string;
// }

// class Product implements ProductType,GiveId {
//   //   private id: string = String(Math.random() * 1000); // we can't add private  type which is present in the ProductType
//   private id: string = String(Math.random() * 1000); // now we removed id from ProductType
//   constructor(
//     public name: string,
//     public price: number,
//     public stock: number
//   ) {}
//   getId = () => this.id;
//   getSecondId = () => this.id;
// }
// const product1 = new Product("Macbook", 2000, 20);

// ################## Type Assertion in TypeScript ######################

// // const btn = document.getElementById("btn") as HTMLElement;
// // const btn =<HTMLElement> document.getElementById("btn");
// const btn = document.getElementById("btn")!;
// btn.onclick;

// const img = document.getElementById("myimg") as HTMLImageElement;
// img.src;

// const img2 = <HTMLImageElement>document.querySelector("myimg");
// img2.src;

//----------------------------------------------------------------------

// const form = document.getElementById("myform") as HTMLFormElement;
// const myinput = document.querySelector("form > input") as HTMLInputElement;

// form.onsubmit = (e) => {
//     e.preventDefault();
//     // console.log(myinput.value);
//     // console.log(typeof myinput.value);

//     const value = Number(myinput.value);

//     const h2 = document.createElement("h2");
//     h2.textContent = String(value + 20);
//     const body = document.querySelector("body");
//     body?.append(h2);

// }

//----------------------------------------------------------------------

// interface Person {
//     name: string,
//     email: string
// }

// const myobj: Person = {
//     name: "krishna",
//     email: "krishna@gmail.com",
// };
// const getName = () => {
//     return myobj.email
// }
// const getEmail = () => {
//     return myobj.email
// }

// console.log(myobj.name);
//----------------------------------------------------------------------

// interface Person {
//     name: string,
//     email: string
// }

// const myobj: Person = {
//     name: "krishna",
//     email: "krishna@gmail.com",
// };
// const getName = ():string => {
//     return myobj.name
// }
// const getEmail = ():string => {
//     return myobj.email
// }

// const getData = (key:string): string => {
//     return myobj["name"]
// }
// // const getData1 = (key:string): string => {
// //     return myobj[key]        // it will give error say no index signature.
// // }

//----------------------------------------------------------------------

// ===> Index Signature (firstt soln)

// interface Person {
//     // name: string,
//     // email: string
//     [key: string]: string;
// }

// const myobj: Person = {
//     name: "krishna",
//     email: "krishna@gmail.com",
// };
// const getName = ():string => {
//     return myobj["name"]
// }
// const getEmail = ():string => {
//     return myobj["email"]
// }

// const getData = (key:string): string => {
//     return myobj[key];
// }

// getData("name");
// getData("lol");         // it gives you undefined

//----------------------------------------------------------------------

// ===> keyof operator (second soln)

// interface Person {
//     name: string,
//     email: string
// }

// const myobj: Person = {
//     name: "krishna",
//     email: "krishna@gmail.com",
// };
// const getName = ():string => {
//     return myobj["name"]
// }
// const getEmail = ():string => {
//     return myobj["email"]
// }

// const getData = (key:"name" | "email"): string => {
//     return myobj[key];
// }

// getData("name");
// // getData("lol");         // the error is gone

//----------------------------------------------------------------------

// interface Person {
//   name: string;
//   email: string;
// }

// const myobj: Person = {
//   name: "krishna",
//   email: "krishna@gmail.com",
// };
// const getName = (): string => {
//   return myobj["name"];
// };
// const getEmail = (): string => {
//   return myobj["email"];
// };

// const getData = (key:keyof Person): string => { // for multple key
//   return myobj[key];
// };

// getData("name");

//----------------------------------------------------------------------

// interface Person {
//   name: string;
//   email: string;
// }

// const myobj: Person = {
//   name: "krishna",
//   email: "krishna@gmail.com",
// };

// let key = "name";

// // myobj[key as keyof Person];
// myobj[key as keyof typeof myobj];

// ################## Utility Types in TypeScript ######################

// Partial <Type>
// Required <Type>
// Readonly <Type>
// Record <Keys,Type>
// Pick<Type, Keys>
// Omit<Type, Keys>
// Exclude<Type, ExcludedUnion>
// Extract<Type, Union>
// NonNullable<Type>
// Parameters<Type>
// ConstructorParameters<Type>
// ReturnType<Type>
// InstanceType<Type>

//-----------------------------------------
// // Partial<Type>

// type User = {
//     name: string,
//     email: string,
// }
// // type User2 = {
// //     name?: string,
// //     email?: string,
// // }
// type User2 = Partial<User>
//-----------------------------------------
// // Required<Type> - opposite of partial
// type User = {
//     name: string,
//     email: string,
// }

// const user: Required<User> = {
//     name: "Krishna",
//     email: "krishna@email.com",
// }
//-----------------------------------------
// // Readonly<Type> - makes every property readonly
// type User = {
//     readonly name: string,
//     readonly email: string,
// }

// const user: User = {
//     name: "Krishna",
//     email: "krishna@email.com",
// }

// // user.name = "asd";   //

//-----------------------------------------
// // Record <Keys,Type>
// type User = {
//     readonly name: string,
//     readonly email: string,
// }
// type User2 = Record<"name"|"email"|"gender",string>

// // Example
// interface UserInfo {
//     age: number;
// }
// type UserName = "jhon" | "levi" | "elon" | "jack";

// const users:Record<UserName,UserInfo> = {
//     jhon: {age:34},
//     levi: {age:34},
//     elon: {age:34},
//     jack: {age:34},
// }
//-----------------------------------------

// // Pick<Type, Keys>
// interface OrderInfo {
//   readonly id: string;
//   user: string;
//   city: string;
//   state: string;
//   country: string;
//   status: string;
// }
// type ShippingInfo = Pick<OrderInfo, "city" | "state" | "country">;
//-----------------------------------------
// // Omit<Type, Keys>
// interface OrderInfo {
//   readonly id: string;
//   user: string;
//   city: string;
//   state: string;
//   country: string;
//   status: string;
// }
// type Random = Omit<OrderInfo,"country">
//-----------------------------------------

// // Exclude<Type, ExcludedUnion>
// type MyUnion = string | number | boolean;
// type Random = Exclude<MyUnion, boolean>;
//-----------------------------------------
// Extract<Type, Union>
// type MyUnion = string | number | boolean;
// type Random = Extract<MyUnion, boolean>;
//-----------------------------------------
// // NonNullable<Type>
// type MyUnion = string | number | boolean | undefined | null;
// type Random = NonNullable<MyUnion>;
// type Random2 = Exclude<MyUnion, undefined | null>;

//-----------------------------------------

// // Parameters<Type>
// const myfunc = (a: number, b: string) => {
//   console.log(a + b);
// };
// type Random = Parameters<typeof myfunc>
//-----------------------------------------
// // ConstructorParameters<Type>
// class SampleClass {
//     constructor(public s:string,public t: string) {}
// }
// type Random = ConstructorParameters<typeof SampleClass>
//-----------------------------------------
// // ReturnType<Type>
// const myfunc = (a:number, b: string) => {
//     console.log(a+b);
// };
// type FuncType = ReturnType<typeof myfunc>
//-----------------------------------------
// // InstanceType<Type>
// class SampleClass {
//   constructor(public s: string, public t: string) {}
// }
// type Random = InstanceType<typeof SampleClass>;

// const user: Random = {
//   s: "44",
//   t: "ssds",
// };


// ################## Generics in TypeScript ######################
