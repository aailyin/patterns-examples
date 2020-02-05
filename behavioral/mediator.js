class Customer {
  constructor(name, dealer) {
    this.name = name;
    this.dealer = dealer;
  }

  makeOrder(product, info = '') {
    this.dealer.order(this.name, product, info);
  }
}

class Product {
  constructor(customerName, name, info) {
    this.customerName = customerName;
    this.name = name;
    this.info = info;
    this.date = new Date();
  }
}

class Shop {
  customers = [];
  orders = [];

  order(customerName, product, info) {
    if (this.customers.indexOf(customerName) == -1) {
      this.customers.push(customerName);
    }
    this.orders.push(new Product(customerName, product, info));
  }

  getCustomers() {
    console.table(this.customers);
  }

  getOrders() {
    console.table(this.orders);
  }
}

let shop = new Shop();

let john = new Customer('John', shop);
let mike = new Customer('Mike', shop);

john.makeOrder('TV', 'Screen 50"');
john.makeOrder('Chair');
mike.makeOrder('PS4', 'With two controllers');

shop.getCustomers();
shop.getOrders();