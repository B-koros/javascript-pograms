//closure =>function defined inside of another function
// where the inner function has access to the variables and scope of the outer function
function outer() {
  let message = "hello";
  function inner() {
    console.log(message);
  }
  inner();
}
outer(); //nothing will happen
// another function
function createcount() {
  // enables state maintainance
  let count = 0;
  function increment() {
    count++;
    console.log(`Count increased to ${count}`);
  }
  function getcount() {
    return count;
  }
  return { increment, getcount }; //increment function acts like a method here
}
const counter = createcount();
counter.increment();
counter.increment();
console.log(`The current count is ${counter.getcount()}`);
counter.increment();
counter.increment();
console.log(`The current count is ${counter.getcount()}`);
counter.increment();
//create a game score tracker
//create one common closure to ensure that the  score is protected
function createGame() {
  let score = 0;
  function increaseScore(points) {
    score += points;
    console.log(`+${points}pts`);
  }
  function decreaseScore(points) {
    score -= points;
    console.log(`-${points}pts`);
  }
  function getscore() {
    return score;
  }
  return { increaseScore, decreaseScore, getscore };
}
const game = createGame();
game.increaseScore(7);
game.increaseScore(6);
game.decreaseScore(4);
console.log(`The final score of the game is ${game.getscore()} pts`);
