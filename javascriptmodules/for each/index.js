//for each method  =method that is used in  iterating over an element of an array  and apply a specified  function (callback)
//array.foreach (callback)
let numbers = [1, 2, 3, 4, 5];
numbers.forEach(display);
function display(element) {
  console.log(element);
  document.getElementById("disp").textContent = element;
}
