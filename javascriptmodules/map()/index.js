//map() accepst a call back and  applies that fuction to  each  element in an array andreturns the new array
const numbers = [1, 3, 5, 6, 8];
//declaring a function that squares the numbers
function square(element) {
  return Math.pow(element, 2);
}
const squared = numbers.map(square); //here we invoked the squrefunction using map function therefore generating a new array and store it in the squred variable
//we can create a display function
function display() {
  document.getElementById("disp").textContent = squared;
}
console.log(squared);
display();
//declare another number that cubes the elements
function cube(element) {
  return Math.pow(element, 3);
}
//store the generated elements  int he constant variabe cubed
const cubed = numbers.map(cube);
//display the elements this time without using a function
document.getElementById("cubed").textContent = cubed;
//more practical function
const students = ["brian", "marry", "emmanuel", "tonui", "ayssa"];
//create a function that will make the first letters uppercase using method chaining
function uppercase(element) {
  return element.charAt(0).toUpperCase() + element.slice(1);
}
//use the map function to invoke the uppercase function
const newstudents = students.map(uppercase);
console.log(newstudents);
//display the  namesbefore and after the  map fuction
document.getElementById("original").textContent = students;
document.getElementById("new").textContent = newstudents;
// To format date
const dates = ["2024-04-21", "2025-08-12", "2026-06-07", "2027-11-14"];
//declare a functin that changes the format
function formateDate(element) {
  const parts = date.split("-");
  return `${parts[1]}/${parts[2]}/${parts[0]}`;
}
//applythe map function and  store the new elements in the formatteddates constant variable
const formatteddates = dates.map(formateDate);
document.getElementById("beforeformat").textContent = dates;
document.getElementById("afterformat").textContent = formatteddates;
