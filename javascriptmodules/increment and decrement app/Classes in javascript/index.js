//classes => this provide  more stractured and cleaner wayto  workwith objects
//example
class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
  //declare a function ( not amust to declare the word funtion when  creating a fuction inside a class )
  displayProduct() {
    document.getElementById("productname").innerHTML =
      `product name is : ${this.name}`;
    document.getElementById("price").innerHTML =
      `product price  is : $${this.price}`;
  }
  calculateTotal(salesTax) {
    return this.price + this.price * salesTax;
  }
}
//create product objects
salesTax = 0.07;
const product1 = new Product("Shirt", 10.99);
const product2 = new Product("Trouser", 15.99);
product1.displayProduct();
product2.displayProduct();
const total = product2.calculateTotal(salesTax);
console.log(`Total price is $${total.toFixed(2)}`);
