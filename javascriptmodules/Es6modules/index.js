import { PI, getCircumference, getArea, getVolume } from "./mathutil.js";
console.log(PI);
const circumference = getCircumference(10);
const area = getArea(15);
const volume = getVolume(14);
console.log(
  `The circumference of the circle is ${circumference.toFixed(2)}cm^2`,
);
console.log(`The Areaof the circle is ${area.toFixed(2)}cm^2`);
console.log(`The volume of the circle is ${volume.toFixed(2)}cm^2`);
