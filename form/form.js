let pwdCheck = document.getElementById("pwdCheck");
let checkLabel = document.getElementById("checkLabel");
let pwd = document.getElementById("password");
pwdCheck.addEventListener("click", (e) => {
  if (e.target.checked) {
    pwd.setAttribute("type", "text");
    checkLabel.innerText = "Hide";
  } else {
    pwd.setAttribute("type", "password");
    checkLabel.innerText = "Show";
  }
});

document.getElementById("myForm").addEventListener("submit", function (event) {
  event.preventDefault();
  let isValid = true;
  let username = document.getElementById("username").value;
  let email = document.getElementById("email").value;
  let password = pwd.value;
  let confirmPassword = document.getElementById("confirmPassword").value;

  document.getElementById("usernameError").innerText = "";
  document.getElementById("emailError").innerText = "";
  document.getElementById("passwordError").innerText = "";
  document.getElementById("confirmPasswordError").innerText = "";

  if (username.trim() === "") {
    document.getElementById("usernameError").innerText = "Username is required";
    isValid = false;
  }

  if (!validateEmailInput(email)) {
    document.getElementById("emailError").innerText =
      "Please enter a valid email";
    isValid = false;
  }
  if (!checkPwd(password)) {
    isValid = false;
  }

  if (password !== confirmPassword) {
    document.getElementById("confirmPasswordError").innerText =
      "Passwords do not match";
    isValid = false;
  }

  if (isValid) {
    alert("Form submitted successfully!");
    document.getElementById("myForm").reset();
  }
});
function checkPwd(pwd) {
  const levels = ["Weak", "Medium", "Strong", "Very Strong"];

  if (pwd.length > 15) {
    document.getElementById("passwordError").innerText =
      "Password is too long (max 15 characters)";
    return false;
  } else if (pwd.length < 6) {
    document.getElementById("passwordError").innerText =
      "Password must be at least 6 characters";
    return false;
  }

  const checks = [
    /[a-z]/, // Lowercase
    /[A-Z]/, // Uppercase
    /\d/, // Digit
    /[@.#$!%^&*.?]/, // Special character
  ];
  let score = checks.reduce((acc, rgx) => acc + rgx.test(pwd), 0);

  console.log(pwd + " - " + levels[score]);

  if (score < 3) {
    document.getElementById("passwordError").innerText =
      "Password should contain uppercase, lowercase, number, and special character.";
    return false;
  }

  return true;
}

function validateEmailInput(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(email)) {
    return false;
  }
  return true;
}
