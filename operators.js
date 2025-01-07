console.log("Addition: ", 10 + 10);
//output:Addition:  20
console.log("Concatenation: 1 ", "Laxman" + 133);
//output:Concatenation: 1  Laxman133
console.log("Concatenation: 2 ", "Laxman" + 16 + 14);
//output:Concatenation: 2  Laxman1614
console.log("Concatenation: 3 ", 16 + 14 + "Laxman");
//output:Concatenation: 3  30Laxman
console.log("Concatenation: 4 ", "Laxman" + (16 + 14));
//output:Concatenation: 4  Laxman30

console.log("Subtraction: ", 10 - 5);
//output:Subtraction:  5
console.log("Subtraction: Typecasting", "10" - 5);
//output:Subtraction: Typecasting 5
console.log("Subtraction: Typecasting", 10 - "5");
//output:Subtraction: Typecasting 5
console.log("Subtraction: Typecasting", "10" - "5");
//output:Subtraction: Typecasting 5
console.log("Subtraction: Typecasting", "Hi" - 5);
//output:Subtraction: Typecasting NaN

console.log("Multiplication: ", 5 * 5);
//output:Multiplication:  25
console.log("Multiplication: Typecasting", "10" * 5);
//output:Multiplication: Typecasting 50
console.log("Multiplication: Typecasting", "10" * "5");
//output:Multiplication: Typecasting 50

console.log("Division : ", 5 / 5);
//output:Division :  1
console.log("Division: Typecasting", "10" / 5);
//output:Division: Typecasting 2

console.log("Modulus: ", 5 % 5);
//output:Modulus:  0
console.log("Modulus: Typecasting ", "10" % 5);
//output:Modulus: Typecasting  0

console.log("Exponential: ", 5 ** 5);
//output:Exponential:  3125
console.log("Exponential: Typecasting", "5" ** 5);
//output:Exponential: Typecasting 3125

var a = 10;
console.log("Pre-increment: ", ++a);
//output:Pre-increment:  11
var b = 10;
console.log("Before Post-increment: ", b++);
//output:Before Post-increment:  10
console.log("After post increment: ", b);
//output:After post increment:  11

var c = 10;
console.log("Pre-decrement: ", --c);
//output:Pre-decrement:  9
var d = 10;
console.log("Before Post-decrement: ", d--);
//output:Before Post-decrement:  10
console.log("After post decrement: ", d);
//output:After post decrement:  9

//Assignments Operator

var l = 9;
console.log("Assignment operator: ", l);
//output:Assignment operator:  9
console.log("Addition +1", (l += 1));
//output:Addition +1 10
console.log("Subtraction -2", (l -= 2));
//output:Subtraction -2 8
console.log("Multiplication *2", (l *= 2));
//output:Multiplication *2 16
console.log("Division /2", (l /= 3));
//output:Division /2 5.333333333333333
console.log("Modulus %2", (l %= 4));
//output:Modulus %2 1.333333333333333
console.log("Exponential **2", (l **= 2));
//output:Exponential **2 1.777777777777777

//Relational Operators

//Equal two
console.log("10==10:", 10 == 10);
//output:10==10: true
console.log("'10'=='10':", "10" == "10");
//output:'10'=='10': true
console.log("'10'==10:", "10" == 10);
//output:'10'==10: true
//Strictly equal two
console.log("10===10:", 10 === 10);
//output:10===10: true
console.log("'10'==='10':", "10" === "10");
//output:'10'==='10': true
console.log("'10'===10:", "10" === 10);
//output:'10'===10: false
//Not equal two
console.log("10!=10:", 10 != 10);
//output:10!=10: false
console.log("'10'!='10':", "10" != "10");
//output:'10'!='10': false
console.log("'10'!=10:", "10" != 10);
//output:'10'!=10: false
//Strictly not equal two
console.log("10!==10:", 10 !== 10);
//output:10!==10: false
console.log("'10'!=='10':", "10" !== "10");
//output:'10'!=='10': false
console.log("'10'!==10:", "10" !== 10);
//output:'10'!==10: true

console.log("10<9:", 10 < 9);
//output:10<9: false
console.log("9<10:", 9 < 10);
//output:9<10: true
console.log("10<10:", 10 < 10);
//output:10<10: false
console.log("10<=10:", 10 <= 10);
//output:10<=10: true

console.log("10>9:", 10 > 9);
//output:10>9: true
console.log("9>10:", 9 > 10);
//output:9>10: false
console.log("10>10:", 10 > 10);
//output:10>10: false
console.log("10>=10:", 10 >= 10);
//output:10>=10: true

console.log("true && true", true && true);
//output:true && true true
console.log("true && false", true && false);
//output:true && false false
console.log("false && true", false && true);
//output:false && true false
console.log("false && false", false && false);
//output:false && false false

console.log("true || true", true || true);
//output:true || true true
console.log("true || false", true || false);
//output:true || false true
console.log("false || true", false || true);
//output:false || true true
console.log("false || false", false || false);
//output:false || false false

console.log("!true", !true);
//output:!true false
console.log("!false", !false);
//output:!false true
