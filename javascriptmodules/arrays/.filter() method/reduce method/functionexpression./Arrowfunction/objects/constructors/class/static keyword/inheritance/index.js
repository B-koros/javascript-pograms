//inheritance =>allows a class to inherit properties and  method from  an existing class (parents to child)
//it also helps with code reusability
//declare a class called animals and  inherit it with other classes
class Animal {
  alive = true;
  eat() {
    console.log(`The ${this.name} is eating`);
  }
  Sleep() {
    console.log(`The ${this.name} is sleeping`);
  }
}
class Rabbit extends Animal {
  name = "Rabbit";
}
class Fish extends Animal {
  name = "Fish";
}
class Horse extends Animal {
  name = "Horse";
}
class Hawk extends Animal {
  name = "Hawk";
}
//create objects
const rabbit = new Rabbit();
const horse = new Horse();
horse.eat();
horse.Sleep();
