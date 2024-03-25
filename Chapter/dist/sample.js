"use strict";
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
