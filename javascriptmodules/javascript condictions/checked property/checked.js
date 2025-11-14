//get element by id and store them in a constant
const checkbox = document.getElementById("mycheckbox");
const myvisa = document.getElementById("visa");
const mypaypal = document.getElementById("paypal");
const myMastercard = document.getElementById("Mastercard");
const mysubmit = document.getElementById("submit");
const mysubresult = document.getElementById("subresults");
const mypayment = document.getElementById("payment");
//when the submit button is clicked there  is a function containing conditons to be fullfilled
mysubmit.onclick = function () {
  if (checkbox.checked) {
    //if the checkbox is checked   then the content to be displayed in the subresults
    //the one below and s on
    mysubresult.textContent = `You are subscribed`;
  } else {
    mysubresult.textContent = `User is NOT subscribed`;
  }
  if (myvisa.checked) {
    mypayment.textContent = `You are paying with visa`;
  } else if (myMastercard.checked) {
    mypayment.textContent = `You are paying with mastercard`;
  } else if (mypaypal) {
    mypayment.textContent = `You are paying with paypal`;
  } else {
    mypayment.textContent = `You must select the payment type`;
  }
};
