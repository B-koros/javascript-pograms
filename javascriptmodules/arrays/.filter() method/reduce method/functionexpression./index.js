// function declaration defining a reusable block of code that perfomes a specific task
//function expression a way to define function as  values or variables
const numbers = [1, 2, 3, 4, 5, 6];
const squared = numbers.map(square);
console.log(`Squared numbers in an array numbers${squared}`);
function square(element) {
  return Math.pow(element, 2);
}
//pass  the Squre function as an expression  using map method
const answer = numbers.map(function (element) {
  return Math.pow(element, 2);
});
console.log(`using function expression ${answer}`); //displaying the new array
//declaring a function but we wont use it instead well directly  declare in the map function
function cube(element) {
  return Math.pow(element, 3);
}
//function expression  to cube every element in an array
//remember  map function  takes the callback or thr function expression  and applies to each and evry element
const cubed = numbers.map(function (element) {
  return Math.pow(element, 3);
});
console.log(`Cubed function  elements expressed as value ${cubed}`);
//function  expression to console even numbers
const even = numbers.filter(function (element) {
  return element % 2 === 0;
});
console.log(`even numbers  ${even}`);
//function expression to console odd numbers
//.filter function  creates a new array by filtering out elements
const odd = numbers.filter(function (element) {
  return element % 2 !== 0;
});
console.log(`odd numbers ${odd}`);
//remember the reduce function   is used  to reduce element to one array or element
const total = numbers.reduce(function (accumulator, element) {
  return accumulator + element;
});
console.log(`The total of the  elements in an array is ${total}`);
