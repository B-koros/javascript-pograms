let age;
const mysubmitBtn = document.getElementById("submit");
//constant that gets input from the user and making it a constant so it doesnt change  through the condition
const myinput = document.getElementById("input");

const results = document.getElementById("results");

mysubmitBtn.onclick = function () {
  age = myinput.value;
  age = Number(age); //changing the age variable to numbers using the number function
  if (age >= 100) {
    results.textContent = `you are too old to access this site`;
  } else if (age == 0) {
    results.textContent = `You were just born Dude there is no way you can access the site`;
  } else if (age >= 18) {
    results.textContent = `Welome fella you are old enough to  access this site`;
  } else if (age < 0) {
    results.textContent = `Your age cant be belo zero`;
  } else {
    results.textContent = ` You must be 18 and above to access this site`;
  }
};
//the results.textcontent changes the contet that willbe displayed inside the p tag with id of results
