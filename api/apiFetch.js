// ! API fetching

//! https://jsonplaceholder.typicode.com/users

// function fetchUsers() {
//   fetch("https://jsonplaceholder.typicode.com/users")
//     .then((res) => {
//       //console.log(res.json());
//       res
//         .json()
//         .then((users) => {
//           console.log(users);
//           users.map((user) => {
//             console.log(user);
//             let store = document.getElementById("store");
//             store.innerHTML += `
//               <tr>
//                   <th>${user.id}</th>
//                   <th>${user.name}</th>
//                   <th>${user.email}</th>
//                   <th>${user.company.name}</th>
//               </tr>
//               `;
//           });
//         })
//         .catch((err) => {
//           console.log(err);
//         });
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// }
// fetchUsers();

// function demo() {
//   console.log("start");
//   console.log(10);
//   console.log(20);
//   return;
//   console.log(30);
//   console.log(40);
//   console.log("end");
// }
// demo();

// //! async and await

// let p = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Success");
//   }, 5000);
// });

// async function demo() {
//   console.log("Start");
//   let x = await p;
//   console.log(x);
//   console.log("end");
// }

// demo();

// async function fetchUsers() {
//   let res = await fetch("https://jsonplaceholder.typicode.com/users");
//   let data = await res.json();
//   console.log(data);
// }

// fetchUsers();
