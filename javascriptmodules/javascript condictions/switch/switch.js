/*switch can be an efficient replacement of if else statements
let day = 7;
let today;
switch (day) {
  case 1:
    today = `Today is Monday`;
    document.getElementById("days").innerHTML = today;
    break;
  case 2:
    today = `Today is Tuesday`;
    document.getElementById("days").innerHTML = today;
    break;
  case 3:
    today = `Today is  Wednesday`;
    document.getElementById("days").innerHTML = today;
    break;
  case 4:
    today = `Today is Thursday`;
    document.getElementById("days").innerHTML = today;
    break;
  case 5:
    today = `Today is Friday`;
    document.getElementById("days").innerHTML = today;
    break;
  case 6:
    today = `Today is Sartuday`;
    document.getElementById("days").innerHTML = today;
    break;
  case 7:
    today = `Today is sunday`;
    document.getElementById("days").innerHTML = today;
    break;
  default:
    today = `None that i know of unless you do `;
    document.getElementById("days").innerHTML = today;
}*/
//you can comment on this one and uncoment on the if else
let day;
const seeDate = document.getElementById("submit");
seeDate.onclick = function () {
  day = document.getElementById("date").value;
  day = Number(day);
  let today;
  switch (day) {
    case 1:
      today = `Today is a lovely monday my dear`;
      document.getElementById("days").innerHTML = today;
      break;
    case 2:
      today = `Today is a lovely Tuesday my dear`;
      document.getElementById("days").innerHTML = today;
      break;
    case 3:
      today = `Today is a lovely Wednesday my dear`;
      document.getElementById("days").innerHTML = today;
      break;
    case 4:
      today = `Today is a lovely Thursday my dear`;
      document.getElementById("days").innerHTML = today;
      break;
    case 5:
      today = `Today is a lovely Friday my dear`;
      document.getElementById("days").innerHTML = today;
      break;
    case 6:
      today = `Today is a weekend my dear you can sleep as much as you want`;
      document.getElementById("days").innerHTML = today;
      break;
    case 7:
      today = `Today is a Sunday my dear lets go to church`;
      document.getElementById("days").innerHTML = today;
      break;
    default:
      today = `There is no such day that i know about,  is there?`;
      document.getElementById("days").innerHTML = today;
  }
}; /*
if (day==1){
 today = "Today is a lovely Monday dear"
  } else if (day == 2) {
    today = `Today is a lovely Tuesday my dear`;
    document.getElementById("days").innerHTML = today;
  } else if (day == 3) {
    today = `Today is a lovely Wednesday my dear`;
    document.getElementById("days").innerHTML = today;
  } else if (day == 4) {
    today = `Today is a lovely Thursday  my dear`;
    document.getElementById("days").innerHTML = today;
  } else if (day == 5) {
    today = `Today is a lovely Friday my dear`;
    document.getElementById("days").innerHTML = today;
  } else if (day == 6) {
    today = `Today is a weekend you can sleep as much as you want`;
    document.getElementById("days").innerHTML = today;
  } else if (day == 7) {
    today = `Today is sunday  lets go to church`;
    document.getElementById("days").innerHTML = today;
  } else {
    today = `There is no day such as that unless in your calender`;
    document.getElementById("days").innerHTML = today;
  }
}; */
