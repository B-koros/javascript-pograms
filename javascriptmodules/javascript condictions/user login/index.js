let loggedIn = false;
whule;
const username = document.getElementById("username");
const password = document.getElementById("password");
const login = document.getElementById("login");
login.onclick = function () {
  let passkey = "Brian Koros";
  let pass = "Cheplanget87";
  pass = password.value;
  passkey = username.value;
  if (passkey == "Brian Koros" && pass == "Cheplanget87") {
    let text = `User access granted Welcome ${passkey} `;
    document.getElementById("display").innerHTML = text;
  } else {
    text = `Sorry your credentials  are incorrect try again `;
    document.getElementById("display").innerHTML = text;
  }
}; //error not displaying the first condiction when it is correct
