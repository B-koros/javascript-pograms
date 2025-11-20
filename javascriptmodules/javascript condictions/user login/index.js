let loggedIn = false;

const username = document.getElementById("username");
const password = document.getElementById("password");
const login = document.getElementById("login");
const toggle = document.getElementById("togglePassword");
//logic to make the password vissible and not visible
toggle.onclick = function () {
  if (password.type === "password") {
    password.type = "text";
    toggle.textContent = "🙈";
  } else {
    password.type = "password";
    toggle.textContent = "👁️";
  }
};
login.onclick = function () {
  const passkey = "Brian Koros";
  const pass = "Cheplanget87";
  const enteredpass = password.value;
  const enteredpasskey = username.value;
  if (enteredpasskey === passkey && enteredpass === pass) {
    loggedIn = true;
    let text = `User access granted Welcome ${passkey} `;

    document.getElementById("display").innerHTML = text;
  } else {
    text = `Sorry your credentials  are incorrect try again `;
    document.getElementById("display").innerHTML = text;
  }
}; //error not displaying the first condiction when it is correct
