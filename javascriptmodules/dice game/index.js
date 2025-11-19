function rollDice() {
  const numOfDice = document.getElementById("dicenum").value; // describes how many  times do ou want to roll a dice
  const diceResults = document.getElementById("diceresults");
  const diceimage = document.getElementById("diceImages");
  const values = [];
  const images = [];

  for (let i = 0; i < numOfDice; i++) {
    const value = Math.floor(Math.random() * 6) + 1; //generate number from 1 to 6
    values.push(value); //pushing the generated value into the empty array
    images.push(`
      <img src ="imagespng/${value}.png" alt="dice ${value}">`);
  } //pushing the images to the image array
  diceResults.textContent = `dice:${values.join(` , `)}`;
  diceimage.innerHTML = images.join(` `);
}
