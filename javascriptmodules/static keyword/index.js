//static keyword  => keyword  that defines the  properties and methods of  a class itself rather than  the objects  created from that class
/*
class Mathutil {
  static PI = 3.14159;
  static getDiameter(radius) {
    return radius * 2;
  }
  static getCircumference(radius) {
    return 2 * this.PI * radius;
  }
}
console.log(Mathutil.PI);
console.log(Mathutil.getDiameter(10));
console.log(Mathutil.getCircumference(10));
*/
//EXAMPLE 2 //
class User {
  static userCount = 0;
  constructor(username) {
    this.username = username;
    User.userCount++;
  }
  static getUserCount() {
    console.log(`Hello there are ${User.userCount} users online`);
  }
}
const user1 = new User("SpongeBob");
const user2 = new User("Patrick");
const user3 = new User("Garrison");
console.log(user1.username);
console.log(user2.username);
console.log(user3.username);
User.getUserCount();
