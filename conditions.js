if (true) {
  console.log("If block executing");
}
//output:If block executing
if (false) {
  console.log("If block executing");
}
//output:
let age = 21;
if (age >= 18) {
  console.log("eligible for voting");
} else {
  console.log("Not eligible for voting");
}
//output:eligible for voting
age >= 18 ? console.log("Major") : console.log("Minor");
//output:Major
let day = prompt("Enter a day here");
console.log(day, typeof day);
//output: 3 string
if (day == 1) {
  console.log("Sun");
} else if (day == 2) {
  console.log("Mon");
} else if (day == 3) {
  console.log("Tue");
} else if (day == 4) {
  console.log("Wed");
} else if (day == 5) {
  console.log("Thu");
} else if (day == 6) {
  console.log("Fri");
} else if (day == 7) {
  console.log("Sat");
} else {
  console.log("Invalid Day");
}
//output:Tue
let day2 = Number(prompt("Enter a day here"));
console.log(day2, typeof day2);
//output:6 'number'

switch (day2) {
  case 1:
    console.log("Sun");
    break;
  case 2:
    console.log("Mon");
    break;
  case 3:
    console.log("Tue");
    break;
  case 4:
    console.log("Wed");
    break;
  case 5:
    console.log("Thu");
    break;
  case 6:
    console.log("Fri");
    break;
  case 7:
    console.log("Sat");
    break;
  default:
    console.log("Invalid day");
    break;
}
//output:Fri
