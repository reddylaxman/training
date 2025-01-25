// console.log(window);

// console.log(document);

// let element = document.getElementById("demo");
// console.log(element);

// element.innerText = "G+";

// let test = document.getElementById("test");

// test.innerText = "<h1>Header</h1>";

// test.innerHTML = "<h1>Header</h1>";

//!
// let ele = document.getElementsByClassName("test");
// console.log(ele);
//console.log(Array.isArray(ele));
//ele[0].innerText = "Hello";
//ele[0].style.backgroundColor = "tomato";

//!spread operator:- It will takeout each and every value from the original array
//! and store it inside one more new array(pure array).
// //? syntax :-[...variable];
// let x = [...ele];
// x.map((element) => {
//   element.style.backgroundColor = "tomato";
// });

//!

// let ele = document.getElementsByTagName("div");
// console.log(ele);

//!

// let ele = document.getElementsByName("formData");
// [...ele].map((inp) => {
//   console.log(inp.value);
// });

//!
// let ele=document.querySelector("#mru");
// console.log(ele);

// let ele = document.querySelector("test");
// console.log(ele);

// let ele = document.querySelectorAll("test");
// console.log(ele);

// let btn = document.querySelector("#btn");
// //! addEventListener("event",()=>{})
// btn.addEventListener("click", () => {
//   //   console.log("button clicked");
//   //   alert("Hi");
//   document.body.style.backgroundColor = "tomato";
// });

// let bgColor = document.querySelectorAll(".bgColor");

// [...bgColor].map((ele) => {
//   ele.addEventListener("mouseover", () => {
//     let color = ele.innerText;
//     console.log();
//     document.body.estyle.color = color;
//   });
// });

// //! dynamic creation element from javascript

// let ele = document.createElement("h1");
// ele.innerText = "Dynamic creation element from javascript";
// // ele.setAttribute("id", "demo");
// ele.id = "demo";
// console.log(ele);
// ele.removeAttribute("id");
// document.body.appendChild(ele);

// let image = document.createElement("img");
// image.src =
//   "https://create.microsoft.com/_next/image?url=https%3A%2F%2Fcdn.create.microsoft.com%2Fimages%2Fimage-creator-T03_cat.webp&w=1920&q=90";

// document.body.appendChild(image);

let form = document.querySelector("form");
let username = document.getElementById("username");
let email = document.getElementById("email");
let pwd = document.getElementById("pwd");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  let v1 = username.value;
  let v2 = email.value;
  let v3 = pwd.value;
  let userDetails = {
    v1,
    v2,
    v3,
  };
  console.log(userDetails);
  localStorage.clear();
  localStorage.setItem("User Data", JSON.stringify(userDetails));
});
