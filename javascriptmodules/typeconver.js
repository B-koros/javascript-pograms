//type conversion
//procces of changing  the datatype into  another (string ,numbers and booleans)
/*let x = "pizza";
let y = "pizza";
let z = "pizza";

x = Number(x);
y = String(y);
z = Boolean(z);

console.log(x, typeof x);
console.log(y, typeof y);
console.log(z, typeof z); remove the comment and run */
//const is a  variable that  cant be change
//example  ca;lculating the circumfrence of circle
const PI = 3.14159;
let radius;
let circumfrence;

radius = Number(radius);

document.getElementById("submit").onclick = function () {
  radius = document.getElementById("text").value;
  radius = Number(radius);
  circumfrence = 2 * PI * radius;
  document.getElementById(
    "answer"
  ).textContent = `The radius of the circle is ${circumfrence}`;
};
