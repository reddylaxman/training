const users = ["Laxman Reddy", "Prasoon", "Abhiram"];
console.log(users);
for (let i = 0; i < users.length; i++) {
  console.log(users[i]);
}

console.log("Using Map Method");
users.map((user) => {
  console.log(user);
});

let x = users.map((user) => {
  return user;
});
console.log(x);

console.log("For each method");

users.forEach((user) => {
  console.log(user);
});

let y = users.forEach((user) => {
  return user;
});
console.log(y);

console.log("Using methods");
const data = ["Prasoon", "Abhiram"];

console.log(data);
data.push("Laxman Reddy");
console.log(data);

data.pop();
console.log(data);

data.shift();
console.log(data);
data.push("Laxman Reddy");
data.push("Prasoon");
data.reverse();
console.log(data);

console.log(data.join(" "));

let frontend = ["HTML", "CSS", "ReactJs", "Vue Js", "AngularJS"];

let backend = ["Node", "Express", "Java", "PHP", "Golang"];
let database = ["MongoDB", "MySQL"];
console.log("Concatenate the frontend , backend and database using method");

let fullstack = frontend.concat(backend).concat(database);

console.log(fullstack);
