//rest parameters = (...rest) allow a function to work with a variable  number of arguments by bundling an array

/*function openFridge(...foods) {
  console.log(...foods);
}
const food1 = "pizza";
const food2 = "Burger";
const food3 = "Humburger";
const food4 = "sushi";
//declare the open fridge array
openFridge(food1,food2, food3, food4);
//in short rest is used in combineing elements into an array
*/
//create a program that sums up multiple  numbers in a an array
function sum(...numbers) {
  let results = 0;
  for (let number of numbers) {
    results += number;
  }
  return results;
}
const total = sum(1, 3, 7, 6);
console.log(`Your total is $${total}`);
