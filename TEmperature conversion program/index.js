//temperature conversion program
const textbox = document.getElementById("textbox");
const fareheit = document.getElementById("toFarenheit");
const celsius = document.getElementById("Celsius");
const result = document.getElementById("results");
let temp;
function convert() {
  if (fareheit.checked) {
    temp = Number(textbox.value);
    temp = temp * (9 / 5) + 32;
    if (temp > 90) {
      result.textContent = "🌡️ " + temp.toFixed(1) + " °F";
    } else {
      result.textContent = "☔ " + temp.toFixed(1) + " °F";
    }
  } else if (celsius.checked) {
    temp = Number(textbox.value);
    temp = (temp - 32) * (5 / 9);
    if (temp > 30) {
      result.textContent = "🌡️" + temp.toFixed(1) + " °C";
    } else {
      result.textContent = "☔" + temp.toFixed(1) + " °C";
    }
  } else {
    result.textContent = "select a unit";
  }
}
