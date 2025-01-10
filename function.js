//! function without parameter
function addToCart() {
  alert("Product is added to cart");
}

function demo() {
  console.log("Demo Function");
}

demo();

//! function with parameter
function userDetails(name, age, city) {
  console.log(name);
  console.log(age);
  console.log(city);
}

userDetails();
userDetails("Laxman Reddy", 21, "Hyderabad");

//!Types of functions

//!named function

function userDetails(name, age, city) {
  console.log(name);
  console.log(age);
  console.log(city);
}

//!anonymous function

// function(){
//     console.log("Anonymous Function")
// }();

//! function expression
let x = function () {
  console.log("function expression is executing");
};
x();

//! IIFE
(function () {
  console.log("IIFE");
})();

//! arrow function

let ar = () => console.log("Arrow function");
ar();

let ar1 = (_) => console.log("Arrow function");
ar1();

let ar2 = (a) => console.log(a);
ar2(5);

let ar3 = (a, b) => console.log(a + b);
ar3(5);

let ar4 = (a, b) => console.log(a + b);
ar4(5, 5);

let ar5 = (_) => console.log("Hi");
console.log("Hello");
console.log("Bye");
ar5();

let ar6 = (_) => {
  console.log("Hi");
  console.log("Hello");
  console.log("Bye");
};
ar6();

//! return

function returnDemo(a, b) {
  a + b;
}

console.log("function without return: " + returnDemo(5, 5));

function returnDemo2(a, b) {
  return a + b; // ! explicit return
}

console.log("function return  with console.log: " + returnDemo2(5, 5));

let y = (a, b) => a + b; //! implicit return
console.log("Implicit return: " + y(10, 20));

let z = (a, b) => {
  return a + b;
}; //! implicit return
console.log("Explicit return: " + z(10, 20));

function demo2() {
  console.log("Above the return keyword");
  return "Return Statement";
  console.log("Below the return statement");
}

console.log(demo2());

console.log("Higher order function:");
// !Higher order function
function hof(a) {
  return a;
}
// console.log(hof(10));
// console.log(hof("Laxman"));
// console.log(hof([1, 2, 3, 4, 5, 6]));

console.log(
  hof(function () {
    return "I am a callback funtion";
  })
);

function hof2(callback) {
  return callback;
}

function callback(a, b) {
  return a + b;
}
console.log(hof2(callback(5, 5)));

//! closure

// let t = 5;
// let s = "Hi";
// function c() {
//   var user = "Laxman";
//   let company = "Google";
//   const sal = 1000000;
//   console.log(user);
//   console.log(company);
//   console.log(sal);
//   console.log(t, s);
// }
// c();

let t = 5;
let s = "Hi";
function c() {
  var user = "Laxman";
  let company = "Google";
  const sal = 1000000;
  console.log(user);
  console.log(company);
  console.log(sal);
  console.log(t, s);
}
c();
