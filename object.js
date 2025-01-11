const userDetails = {
  name: "Laxman Reddy",
  rollno: "2211cs010133",
  group: "G-3",
  address: {
    area: "Moosapet",
    hno: "12-16-53",
  },
};
console.log(userDetails);

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
