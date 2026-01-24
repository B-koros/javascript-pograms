const fruits = [
  { name: "Apple", color: "red", calories: 95 },
  { name: "Pineapple", color: "orangeyellow", calories: 100 },
  { name: "Orange", color: "yellow", calories: 67 },
  { name: "Berries", color: "darkred", calories: 87 },
  { name: "Banana", color: "yellow", calories: 126 },
];
//use for each to display
fruits.forEach((fruit) => console.log(fruit.color));
//map()
const fruitnames = fruits.map((fruit) => fruit.name);
console.log(fruitnames);
const fruitcolors = fruits.map((fruit) => fruit.color);
console.log(fruitcolors);
//filter()
const Yellowfruits = fruits.filter((fruit) => fruit.color === "yellow");
console.log(Yellowfruits);
//sort method  in javascript
//sort method  is usedto sort elements of an array in place
let fruitsample = [
  "ApplE ",
  "Banana",
  "Pinapple",
  "Orange",
  "Grapes",
  "Passionfruit",
  "Mango",
];
fruitsample.sort();
console.log(fruitsample);
let numbers = [2, 4, 5, 7, 8, 1, 3, 10, 6, 9];
numbers.sort((a, b) => a - b); //arrow function that sorts the numbers array by comparing two adjucent array
console.log(numbers);
//sorting objects by a  given property
const people = [
  { name: "Mateo kovaic", age: 24, GPA: 3.0 },
  { name: "Bruno Fernandes", age: 28, GPA: 4.0 },
  { name: "Phil Foden", age: 23, GPA: 4.5 },
  { name: "Erling Halaand", age: 25, GPA: 4.6 },
];
people.sort((a, b) => a.age - b.age);
console.log(people);
