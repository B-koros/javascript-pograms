/*reduce method = reduce element of an array to a single value
const prices = [50, 138, 675, 300, 200, 1000];
const total = prices.reduce(sum);
console.log(`Total price is $${total}`);
function sum(accumulator, element) {
  return accumulator + element;
}*/
const grades = [76, 50, 90, 95, 60, 10];
const max = grades.reduce(maxnum);
console.log(max);
function maxnum(accumulator, element) {
  return Math.max(accumulator, element); //math.max = gets  the maximmum element in the array
}
function getMin(accumulator, element) {
  return Math.min(accumulator, element); //math.min= gets the minimum element in an array
}
const min = grades.reduce(getMin);
console.log(min);
