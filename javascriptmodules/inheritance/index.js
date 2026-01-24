/*inheritance=> allows multiple classes to inherit  properties and methods of other classes (parent child relationship)*/
class Animal {
  alive = true;
  eat() {
    console.log(`This ${this.name} is eating`);
  }
  sleep() {
    console.log(`This ${this.name} is sleeping`);
  }
}
class Rabbit extends Animal {
  name = "Rabit";
  //we can create a rabbit property only too e.g
  running() {
    console.log(`The ${this.name} is running`);
  }
}
class Fish extends Animal {
  name = "Fish";
  swimming() {
    console.log(`The ${this.name} is swimming`);
  }
}
const rabbit = new Rabbit();
const fish = new Fish();
console.log(rabbit.alive);
rabbit.sleep();
rabbit.running();
fish.eat();
fish.swimming();
