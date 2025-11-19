//array is used in storing  more than one value
let fruits = ["apple", "Banana", "Mango", "passion"];
//fruits.push("coconut"); //insers theelement to the array
//fruits.pop(); //removes the last elements in  an array
//fruits.unshift("Mango"); // adds the last element to the beginning
//we can use the sort method to sort the array in alphabetical order
fruits.sort();
document.getElementById("disp").innerHTML = fruits;
//fruits.length give the length of the array
// indexOf() displays the index of element passed to the brackets
/*we can use for loop to display the elements of th array
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}*/
/*display in a reverse manner
for (let i = fruits.length - 1; i >= 0; i--) {//we only have upto 3 index ,essence of -1
  console.log(fruits[i]);
}*/
//enhanced for loop
for (let fruit of fruits) {
  console.log(fruit);
}
