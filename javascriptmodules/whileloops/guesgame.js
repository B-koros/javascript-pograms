//NumberGuesing game
const minNum = 1;
const maxNum = 100;
/*Math.random() generates a minimum and a maximum  number randomly
 Math.floor rounds off the number generated
  Math.random() * (maxNum - minNum + 1) function to calculate the difference of the ge */
const answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
// create variables to keep attempts of the user
let attemps = 0;
let Guess;
let running = true; // exits game when its over
while (running) {
  Guess = window.prompt(`Guese a number between ${minNum} - ${maxNum}`);
  Guess = Number(Guess);
  if (isNaN(Guess)) {
    window.alert(`Please enter a valid number`);
  } else if (Guess < minNum || Guess > maxNum) {
    window.alert(`please enter a valid number`);
  } else {
    attemps++;
    if (Guess < answer) {
      window.alert(`Too low try again`);
    } else if (Guess > answer) {
      window.alert(`Too high try again`);
    } else {
      window.alert(
        ` CORRECT! the answer was ${answer} and it took you ${attemps} attempts`
      );
      running = false;
    }
  }
}
