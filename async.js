console.log(10);
console.log(20);
setTimeout(() => {
  console.lo20g(30);
});
// setInterval(() => {
//   document.writeln("Laxman Reddy");
// }, 100);
console.log(40);
console.log(50);

let p1 = new Promise((resolve, reject) => {});
console.log(p1);

let p2 = new Promise((resolve, reject) => {
  resolve("Success");
});

console.log(p2);

let p3 = new Promise((resolve, reject) => {
  reject("Failure");
});
console.log(p3);

let p4 = new Promise((resolve, reject) => {
  resolve("Success");
});

p4.then((response) => {
  console.log(response);
})
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    console.log("Finally");
  });

let p5 = new Promise((resolve, reject) => {
  reject("Failure");
});

p5.then((response) => {
  console.log(response);
})
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    console.log("Finally");
  });
