//spread operator = ... allows an iterable  such as an array or string to be expanded into separate elements (upacks the elements )
let fruits = ["Apple", "Banana", "Mango", "Passion", "Pineapple"];
//lets spread and assign it to  food
let food = [...fruits];
console.log(food);
//lets add another array vegetables
let vegetables = ["Carrots ", "Grocceries", "Celery", "Tomatoe"];
food = [...fruits, ...vegetables, "eggs", "Milk"]; //you can even append other strings in the spread (food)
console.log(food);
const person = { name: "Brian", age: 21, school: "Zetech University" };
const skills = { frontend: "javascript" };
const profile = { ...person, ...skills };
console.log(profile);
