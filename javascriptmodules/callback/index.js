/*callbacks = a function that is passed as an argument to  another function
//example
function hello(callback) {
  console.log("Hello!");
  callback();
}
function goodbye() {
  console.log("Goodbye");
}
hello(goodbye); //takes the goodbye function as a callback

function wait() {
  console.log("Wait wait first");
} // we can use this function as a call back too
hello(wait);*/
//
sum(displaypage, 2, 5);
function sum(callback, x, y) {
  let result = x + y;
  callback(result);
}
function displayConsole(result) {
  console.log(result);
}
function displaypage(result) {
  document.getElementById("myh1").textContent = result;
}
