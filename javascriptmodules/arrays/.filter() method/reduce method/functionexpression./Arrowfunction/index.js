//arrow function  = a consice way to  write a expression  good for simple  functions  that you only use once (parameters =>somecode)
const hello = (name, age) => {
  console.log(`Hello you ${name}`);
  console.log(`You are ${age} years old`);
};
hello("Brian", 21);
//lets apply th map filter  and reduce functions as arrow functions
const numbers = [2, 3, 5, 7, 9, 8];
//map function (accepts the callback or function  execute on each element of an array and return a new array)
const squares = numbers.map((element) => Math.pow(element, 2));
console.log(squares);
const cube = numbers.map((element) => Math.pow(element, 3));
console.log(` This are the cubed numbers of the array ${cube}`);
//filter  method (filter the elements in array and generate a new one accoding to the function)
const even = numbers.filter((element) => element % 2 === 0);
console.log(`Even number ${even}`);
const odd = numbers.filter((element) => element % 2 !== 0);
console.log(`Odd numbers are as follows ${odd}`);
// reduce function used in  returning multiple element as one or simply reduces multiple numbers of an array as one
const sum = numbers.reduce((accumulator, element) => accumulator + element);
console.log(`The following is the sum of  all elements in the array ${sum}`);
