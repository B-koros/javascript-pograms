/*for each method  =method that is used in  iterating over an element of an array  and apply a specified  function (callback)
//array.foreach (callback)
//its really useful when you want to aplly a function to each and every element in an array
let numbers = [1, 2, 3, 4, 5];
numbers.forEach(display);
function display(element) {
  console.log(element);
  document.getElementById("disp").textContent = element;
}

let numbers = [1, 2, 3, 4, 5, 6, 7];
numbers.forEach(cube);
numbers.forEach(display);
function double(element, index, array) {
  array[index] = element * 2;
}
function display(element) {
  console.log(element);
}
//create a function that displays the  trippled elements and is a callback
function tripple(element, index, array) {
  array[index] = element * 3;
}
//function that will squre the given elements and act as a call back

//function that will cube and  be passed as a callback
function cube(element, index, array) {
  array[index] = Math.pow(element, 3);
}*/
//more advance for each
let fruits = ["banana", "orange", "mango", "apple", "pineapple"];
fruits.forEach(capitalize);
fruits.forEach(display);
//function to convert array to upper case
function upperCase(element, index, array) {
  array[index] = element.toUpperCase();
}
//General function to display the  the elements
function display(element) {
  //document.getElementById("disp").textContent = element;
  console.log(element);
}
//function to capitalize the first letter//we performed method chaining
function capitalize(element, index, array) {
  array[index] = element.charAt(0).toUpperCase() + element.slice(1);
}
