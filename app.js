var a = 10; //initialization  and declaration
a = 20; // re initialization
var a = 30; // re-declaration
console.log(a);
//output: 30
let b = 10;
b = 20; // can re-initialization  of varible
//let b=20//cannot re-declaration of variable
console.log(b);
//output: 20
const c = 133;
//cannot re-initialization and re-declaration
console.log(c);
//output: 133
let str1 = "double quotes";
console.log(str1, typeof str1);
//output: double quotes string
let str2 = "single quotes";
console.log(str2, typeof str2);
//output: single quotes string
let str3 = `template literals`;
console.log(str3, typeof str3);
//output: template literals string
let num1 = 133;
console.log(num1, typeof num1);
//output: 133 'number'
let num2 = 133.133;
console.log(num2, typeof num2);
//output: 133.133 'number'
let bool1 = true;
console.log(bool1, typeof bool1);
//output: true 'boolean'
let bool2 = false;
console.log(bool2, typeof bool2);
//output: false 'boolean'
let undefine;
console.log(undefine);
//output: undefined

let n = null;
console.log(n);
//output : null
console.log(typeof n);
//output: object

console.log(2n, typeof 2n);
//output: 2n 'bigint'
