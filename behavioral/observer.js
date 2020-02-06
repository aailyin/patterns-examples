class Shop {
  products = [];

  constructor(name, assistant) {
    this.name = name;
    this.assistant = assistant;
  }

  addNewProduct(newProduct) {
    console.log(`New product ${newProduct} was added in shop!`);
    this.products.push(newProduct);
    this.assistant.notifyAll(newProduct);
  }
}

class Customer {
  constructor(name) {
    this.name = name;
  }

  notify(newProduct) {
    console.log(`${this.name} is notified about ${newProduct}!`);
  }
}

class ShopAssistant {
  subscribers = [];
  
  constructor() {}

  notifyAll(newProduct) {
    this.subscribers.forEach(customer => customer.notify(newProduct));
  }

  register(customer) {
    this.subscribers.push(customer);
  }

  unregister(customer) {
    this.subscribers = this.subscribers.filter(sub => sub.name !== customer.name);
  }
}

let assistant = new ShopAssistant();
let shop = new Shop('Amazon', assistant);

let customer1 = new Customer('Jack');
let customer2 = new Customer('Dan');
let customer3 = new Customer('Mike');

assistant.register(customer1);
assistant.register(customer2);
assistant.register(customer3);

shop.addNewProduct('Apple iPhone 11');
shop.addNewProduct('Samsung Note 10');

