//Method chaining is calling or using multiple method in  one line

//No method chaining
let username = window.prompt("Enter username please");
/*username = username.trim(); //to remove any white spaces
let letter = username.charAt(0); //take the letter at index zero of the username
letter = letter.toUpperCase(); //Changes the letter to an uppercase
let extracharacters = username.slice(1); // keeps the rest of the username characters  small
extracharacters = extracharacters.toLowerCase();
username = letter + extracharacters;
document.getElementById("name").innerHTML = username;
   //method chaining*/
username =
  username.trim().charAt(0).toUpperCase() +
  username.trim().slice(1).toLowerCase();
document.getElementById("name").innerHTML = username;
