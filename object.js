const userDetails = {
  name: "Laxman Reddy",
  rollno: "2211cs010133",
  group: "G-3",
  address: {
    area: "Moosapet",
    hno: "12-16-53",
  },
  details: function () {
    return `My name is ${name}.`;
  },
};
console.log(userDetails.details);
console.log(userDetails.details());
const userDetails2 = {
  name: "Laxman Reddy",
  rollno: "2211cs010133",
  group: "G-3",
  address: {
    area: "Moosapet",
    hno: "12-16-53",
  },
  details: function () {
    return `My name is ${this.name}.`;
  },
};
console.log(userDetails2.details);
console.log(userDetails2.details());

function printDetails() {
  document.writeln("Name: " + userDetails.name);
  document.writeln("Roll No " + userDetails.rollno);
  document.writeln("Group: " + userDetails.group);
}

const users = [
  {
    name: "Laxman reddy",
    rollno: "2211cs010133",
  },
  {
    name: "Prasoon",
    rollno: "2211cs010430",
  },
];
users.map((user) => {
  console.log(user.name);
});

function fetchUsers() {
  window
    .fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) =>
      res.json().then((data) => {
        let store = document.getElementById("store");
        data.map((user) => {
          store.innerHTML += `<h1>${user.name}</h1>`;
        });
      })
    )
    .catch((err) => {
      console.log(err);
    });
}

fetchUsers();

let userObject = {
  name: "Laxman Reddy",
  rollno: "2211cs010133",
  age: 21,
};

console.log(userObject);

let x = JSON.stringify(userObject);
console.log("Json Object " + x);

let y = JSON.parse(x);
console.log(y);
