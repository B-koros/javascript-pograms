//settimeout() => function in javascrip hat allows  you to schedule  the excecution  of a function  after a certain amount of time (miliseconds)
//settimeout(callback,delay)
let timeoutId;

function startTimer() {
  timeoutId = setTimeout(() => window.alert("Hey there hello"), 3000);
  console.log("The setTimeout has started");
}
function clearTimer() {
  clearTimeout(timeoutId);
  console.log("The timeout is cleared");
}
