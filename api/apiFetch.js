// ! API fetching

//! https://jsonplaceholder.typicode.com/users

function fetchUsers() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => {
      //console.log(res.json());
      res
        .json()
        .then((users) => {
          console.log(users);
          users.map((user) => {
            console.log(user);
            let store = document.getElementById("store");
            store.innerHTML += `
              <tr>
                  <th>${user.id}</th>
                  <th>${user.name}</th>
                  <th>${user.email}</th>
                  <th>${user.company.name}</th>
              </tr>
              `;
          });
        })
        .catch((err) => {
          console.log(err);
        });
    })
    .catch((err) => {
      console.log(err);
    });
}
fetchUsers();
