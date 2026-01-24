//static = keyword that defines property or method that belong to class itself rather than the object created from that class
class MathUtil {
  static PI = 3.14159;
  static getDiameter(radius) {
    return radius * 2;
  }
  static getCircumference(radius) {
    return 2 * this.PI * radius;
  }
  static getArea(radius) {
    return this.PI * radius;
  }
}
console.log(MathUtil.getDiameter(7));
console.log(MathUtil.getCircumference(10));
console.log(MathUtil.getArea(14));

//
class user {
  static usercount = 0; //counts the number of users
  constructor(username) {
    this.username = username;
    user.usercount++; //increases as number of users increase
  }
  sayhello() {
    console.log(`Hey there my  username is ${this.username}`);
  }
  //method to get the number of users
  static getusercount() {
    ///we are making it static  so as to be accessable only inside the class
    console.log(`There are ${user.usercount} users online`);
  }
}
const user1 = new user("SponeBob");
const user2 = new user("Fidellia");
const user3 = new user("Kensley");
const user4 = new user("Nahashion");
user1.sayhello();
user2.sayhello();
user3.sayhello();

user.getusercount();
