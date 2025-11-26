//.filter()= creates a new  array  by filtering out elements

const ages = [16, 17, 18, 19, 20, 60];
const adults = ages.filter(isadults);
document.getElementById("demo").textContent = `Adult ages:${adults}`;
function isadults(element) {
  return element >= 18;
}
function isNotadults(element) {
  return element <= 18;
}
const child = ages.filter(isNotadults);
document.getElementById("disp").textContent = `Child ages:${child}`;
