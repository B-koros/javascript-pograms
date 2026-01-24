/*constructors=> Special methods for defining the propertiies  and method of a certain objects
//this is a constructor
function Car(make, model, year, color) {
  (this.make = make),
    (this.model = model),
    (this.year = year),
    (this.color = color);
}
//create a new  object called car one and two
const car1 = new Car("Porshe", "panamera", 2025, "LightBlue");
const car2 = new Car("Mazda ", "Atenza", 2025, "Silver");
function display() {
  console.log(`The  make of the car is :${car1.make}`);
  console.log(`The model of the car is :${car1.model}`);
  console.log(`The year of manufacture is :${car1.year}`);
  console.log(`The color is:${car1.color}`);
}
function display() {
  console.log(`The  make of the car is :${car2.make}`);
  console.log(`The model of the car is :${car2.model}`);
  console.log(`The year of manufacture is :${car2.year}`);
  console.log(`The color is:${car2.color}`);
}
display(car1);
display(car2);*/
/// a more standard version that  lets us  not repeat  declaring the display function everytime
//we utilize the use of prototype
// what is a prototype -=>used in sharing properties and  function accross  objects created from the constructor
//create a function
function Car(make, model, year, color) {
  (this.make = make),
    (this.model = model),
    (this.year = year),
    (this.color = color);
}
//create a constructor
Car.prototype.display = function () {
  console.log(`This car make is ${this.make}`);
  console.log(`This  car model is ${this.model}`);
  console.log(`Year of manufacture is ${this.year}`);
  console.log(`The color is ${this.color} `);
};
//now create the instances of the  car objects
const car1 = new Car("Porsche", "Panamera", 2025, "LightBlue");
const car2 = new Car("Mazda", "Atenza", 2025, "Silver");
//the this keyword in the prototype function represents the  car1 and two objects
// respectively when the display function is invoked
car1.display();
car2.display();
