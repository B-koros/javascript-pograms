//This =>its a reference to yhe object where this is used

const person = {
  name: "spongebob",
  favFood: "Humbergers",
  sayhello: function () {
    console.log(`Hello i am  or my name is ${this.name}`);
  },
};
person.sayhello();
const person2 = {
  name: "Bob Colimor",
  favFood: "Pillau",
  sayhello: function () {
    console.log(`Hello i am  or my name is ${this.name}`);
    console.log(
      `Hello i am ${this.name} and my favourite food is ${this.favFood}`
    );
  },
};
person2.sayhello();
