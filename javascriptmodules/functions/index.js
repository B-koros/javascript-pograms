//function is a reusable block 0f code
//it canbe declared once and reused
//const sing = document.getElementById("sing")
// sing.onclick=
/*function happyBirthday(username, age) {
  console.log("HappyBirthday  to you ");
  console.log("HappyBirthday  to you ");
  console.log("HappyBirthday  to you ");
  console.log(`happy Birthday  dear ${username}`);
  console.log(`You are ${age} years old  `);
  console.log(`HappyBirthday to you`);
}
happyBirthday("Brian", 22);
happyBirthday("brian", 22);*/
const input = document.getElementById("input");
const check = document.getElementById("check");
check.onclick = function () {
  const email = input.value;
  isValidEmail(email);
};
function isValidEmail(email) {
  if (email.includes("@")) {
    text = `The email ${email} is a valid email continue to the next page`;
    document.getElementById("disp").innerHTML = text;
  } else {
    text = "The email you entered is invalid ";
    document.getElementById("disp").innerHTML = text;
  }
}
