let username;

document.getElementById("submit").onclick = function () {
  username = document.getElementById("input").value;
  document.getElementById("h1").textContent = `Hello ${username}`;
};
