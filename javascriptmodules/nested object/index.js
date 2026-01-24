/*nested objects => objects inside other objects
 Alllows representation of complex datastractures 
 */
const person = {
  fullName: "spongeBob",
  age: 21,
  Occupation: "chief",
  isstudent: true,
  hobbies: ["karate", "cooking", "fishing"],
  address: {
    //nested address class
    strret: "123 illanois",
    city: "illanois",
    country: "missouri",
  },
};
console.log(person.fullName);
console.log(person.hobbies[1]);
console.log(person.address.city);
console.log(person.address.country);
//illustration two
class Address {
  constructor(street, city, country) {
    this.street = street;
    this.city = city;
    this.country = country;
  }
}
class Person {
  constructor(name, age, ...address) {
    this.name = name;
    this.age = age;
    this.address = new Address(...address);
  }
}
const person1 = new Person(
  "Brian Koros",
  22,
  "124  mechinghan",
  "mechinghan",
  "USA",
);
const person2 = new Person(
  "Sandra Cassanova",
  20,
  "128  mechinghan",
  "mechinghan",
  "USA",
);
const person3 = new Person(
  "Ned Starks",
  34,
  "145  mechinghan",
  "mechinghan",
  "USA",
);
console.log(person1.name);
console.log(person1.address.city);
console.log(person2.address);
console.log(person3.name);
