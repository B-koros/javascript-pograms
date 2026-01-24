//destructuring extracting values from an array and  assigning them  in  a cnvinient way
//we use [] to performarray destructuring
//we use {} to performobject destructuring
/*exampple swaping a number in a array*/
let a = 2;
let b = 4;
[a, b] = [b, a];
console.log(a);
console.log(b);
//example 2 swapping two elements in an array
const colors = ["Red", "Blue", "Green", "Yellow", "Grey"];
[colors[1], colors[4]] = [colors[4], colors[1]];
console.log(colors);
// Assigning  arrayelements to variables
const [
  firstColor,
  secondColor,
  thirdColor,
  ...extracolor /*using the rest parameter for the  remaining elements*/
] = colors;
console.log(firstColor);
console.log(secondColor);
console.log(thirdColor);

console.log(extracolor);
//used in extracting values from an object
const person1 = {
  firstName: " Brian ",
  lastName: "Koros",
  age: 21,
  occupation: "Software Engineer",
};
const person2 = {
  firstName: " Koffii",
  lastName: "Nades",
  age: 20,
  occupation: "Dentist",
};
/*const { firstName, lastName, age, occupation } = person1;
console.log(firstName);
console.log(lastName);
console.log(age);
console.log(occupation);*/
const { firstName, lastName, age, occupation = "unemployed" } = person2;
console.log(firstName);
console.log(lastName);
console.log(age);
console.log(occupation);
