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
