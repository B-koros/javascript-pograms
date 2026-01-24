/* Super keyword =>its used in classes to access the constructor  or access the proprties and methods of  a parent  class */
class Animal {
  constructor(name, age) {
    // are the parameters shared among multiple  child classes
    this.name = name;
    this.age = age;
    //lets create a  method  move
  }
  move(speed) {
    console.log(`The ${this.name} moves at a speed of ${speed} km/hr`);
  }
}
class Rabbit extends Animal {
  constructor(name, age, runspeed) {
    super(name, age);
    this.runspeed = runspeed;
  }
  run() {
    console.log(`This ${this.name} is or can run`);
    super.move(this.runspeed);
  }
}
class Fish extends Animal {
  constructor(name, age, swimSpeed) {
    super(name, age);
    this.swimSpeed = swimSpeed;
  }
  Swimm() {
    console.log(`This ${this.name} is or can run`);
    super.move(this.swimSpeed); // inside this method we access the parent method of move so calls bth method concurrently
  }
}
//create their objects
const fish = new Fish("Jellyfish", 3, 54);
console.log(`Age of fish :${fish.age}`);
console.log(`Swimmspeed of the fish :${fish.swimSpeed} km/hr`);
console.log(`The name of the fish is : ${fish.name}`); // we access the name and age of the fish using the super keyword
// allowing us to access the parent class constructor
const rabbit = new Rabbit("Rabbit Bumbum", 3, 65);
rabbit.run();
