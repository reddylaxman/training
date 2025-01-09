// //! function without parameter
// function addToCart() {
//   alert("Product is added to cart");
// }

// function demo() {
//   console.log("Demo Function");
// }

// demo();

// //! function with parameter
// function userDetails(name, age, city) {
//   console.log(name);
//   console.log(age);
//   console.log(city);
// }

// userDetails();
// userDetails("Laxman Reddy", 21, "Hyderabad");

// //!Types of functions

// //!named function

// function userDetails(name, age, city) {
//   console.log(name);
//   console.log(age);
//   console.log(city);
// }

// //!anonymous function

// function(){
//     console.log("Anonymous Function")
// }

// // ! function expression
// let x = function(){
//     console.log("function expression is executing");
// };
// x();

// //! IIFE
// (function(){
//     console.log("IIFE");
// });();

// // ! arrow function
// function demo()
// {
//     console.log("Hello");
// }
// demo();

// let x = ()=>
//     console.log("Arrow function");
// x();

// let x = =>console.log("Arrow function");
// x();

// let x = a=> console.log(a);
// x(5);

// let x = (a, b) => console.log(a + b);
// x(5);

// let x = (a, b) => console.log(a + b);
// x(5, 5);

let x = (_) => console.log("Hi");
console.log("Hello");
console.log("Bye");
x();
