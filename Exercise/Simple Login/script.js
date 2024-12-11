// When opening the login page, check if the user is already logged in
// If the user is already logged in, redirect the user to the home page
function checkLogin() {
  const users = JSON.parse(localStorage.getItem("users")) || [];
  const user = users.find((user) => user.isLoggedIn);
  if (user) {
    window.location.href = "home.html";
  }
}

// Login using email and password
// If the email and password match, redirect the user to the home page
// If the email and password do not match, alert the user that the email or password is incorrect
// If the email does not exist, alert the user that the email or password is incorrect
function handleLogin() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const users = JSON.parse(localStorage.getItem("users")) || [];
  const user = users.find((user) => user.email === email);
  console.log(user);
  if (user) {
    if (user.password === password) {
      window.location.href = "home.html";
    } else {
      alert("Email or password is incorrect");
    }
  } else {
    alert("Email or password is incorrect");
  }
}

// Register using name, email, and password then store it into
// local storage in the form of an object
// users = {name: "name", email: "email", password: "password"}
// If the email already exists, alert the user that the email is already taken
// If the email is not taken, store the user object into local storage
// and redirect the user to the login page
function handleRegister() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const users = JSON.parse(localStorage.getItem("users")) || [];
  const user = { name, email, password };
  const existingUser = users.find((user) => user.email === email);
  if (existingUser) {
    alert("Email is already taken");
  } else {
    users.push(user);
    localStorage.setItem("users", JSON.stringify(users));
    window.location.href = "login.html";
  }
}

function onLoaded() {
  console.log("loaded");
}
