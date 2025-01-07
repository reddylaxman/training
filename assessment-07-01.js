// Take 3 values and print which value is gretaer among the three values.
//  do this with both if-else ladder and switch condition

let num1 = Number(prompt("Enter the first number: "));
console.log("num1:", num1);

let num2 = Number(prompt("Enter the second number: "));
console.log("num2:", num2);

let num3 = Number(prompt("Enter the third number: "));
console.log("num3:", num3);

console.log("Using the if-else ladder case");
if (num1 >= num2 && num1 >= num3) {
  console.log(num1 + " is the largest number.");
} else if (num2 >= num1 && num2 >= num3) {
  console.log(num2 + " is the largest number.");
} else {
  console.log(num3 + " is the largest number.");
}

console.log("Using the switch case");
let largest;

if (num1 >= num2 && num1 >= num3) {
  largest = num1;
} else if (num2 >= num1 && num2 >= num3) {
  largest = num2;
} else {
  largest = num3;
}

switch (largest) {
  case num1:
    console.log(num1 + " is the largest number.");
    break;
  case num2:
    console.log(num2 + " is the largest number.");
    break;
  case num3:
    console.log(num3 + " is the largest number.");
    break;
  default:
    console.log("Invalid");
    break;
}

// Write a JavaScript program that prints numbers from 1 to 100. However, for multiples of 3, print 'Fizz' instead of the number, and for multiples of 5, print 'Buzz'. For numbers that are multiples of both 3 and 5, print 'FizzBuzz'.
// Expected Output:
// 1
// 2
// Fizz
// 4
// Buzz
// Fizz
// 7
// 8
// Fizz
// Buzz
// 11
// Fizz
// 13
// 14
// FizzBuzz
// ...

for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}
