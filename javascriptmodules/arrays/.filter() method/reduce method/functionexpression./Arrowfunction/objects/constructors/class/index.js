//classes=>provides a more stractured and cleaner way to  work with objects  compared  to traditional constructor functions  static keyword  encapsulation  inheritance
class product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
  //function to display a product
  displayProduct() {
    console.log(`Product:${this.name}`);
    console.log(`Price$${this.price}`);
  }
  //declare a  method  that calculates the total  price after applying the tax
  calculatetotaltax(salesTax) {
    return this.price + this.price * salesTax;
  }
}
salesTax = 0.05;
const product1 = new product("Shirt", 19.99);
product1.displayProduct();
const total = product1.calculatetotaltax(salesTax);
console.log(`Total price (with tax):$${total.toFixed(2)}`);
