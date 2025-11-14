/*if else statements
//declare  age
let age;
//lets take input from user themselves
// we declare a function that  takes the input and assigns it to age variable
// onclicking the button the  function is executed 

document.getElementById("submit").onclick = function () {
  age = document.getElementById("input").value;
  //we take the age value and display it in a p tag 
  document.getElementById(
    "disp"
  ).innerHTML = `Hey there your age is ${age} years old`;
};*/
/*normal if else statement
let time = 11;
if (time <= 12) {
  text = "Good morning there   it is still morning";
  document.getElementById("time").innerHTML = text;
} else {
  text = "It is afternoon people Goodafternoon";
  document.getElementById("time").innerHTML = text;
}*/
//tenary operator
/*its a shortcut to  if else statements
let purchaseAmount = 125;
let discount = purchaseAmount >= 100 ? 10 : 0;
results = `Your total is  $${
  purchaseAmount - purchaseAmount * (discount / 100)
}`;
document.getElementById("demo").innerHTML = results;*/
