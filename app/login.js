function onLogin() {
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;
  if (username == "" && password == "") {
    alert("Fill the form");
  } else {
    console.log("username: " + username);
    console.log("password: " + password);
  }
}
