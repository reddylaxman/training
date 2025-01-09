console.log("Good Morning");

//! for loop
console.log("for loop");
for (var i = 1; i <= 5; i++) {
  console.log("No:", i);
}

//! 1 to 100 Even and odd
for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    console.log(i + " is a Even number");
  } else {
    console.log(i + " is a Odd number");
  }
}
//! while loop
console.log("While loop");
let n = 1;
while (n <= 5) {
  if (n % 2 === 0) {
    console.log(n + " is a Even number");
  } else {
    console.log(n + " is a Odd number");
  }
  n++;
}

console.log("do-While loop");

let k = 1;
do {
  console.log("do " + k);
  k++;
} while (k > 5);
console.log("Break");
for (let i = 1; i <= 5; i++) {
  if (i == 3) break;
  console.log(i);
}
console.log("Continue");
for (let i = 1; i <= 5; i++) {
  if (i == 3) continue;
  console.log(i);
}
