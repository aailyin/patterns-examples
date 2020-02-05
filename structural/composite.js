class Detail {
  constructor(name = '', price = 0) {
    this.name = name;
    this.price = price;
  }

  getName() {
    return this.name;
  }

  setName(name) {
    this.name = name;
  }

  getPrice() {
    return this.price;
  }

  setPrice(price) {
    this.price = price;
  }
}

class Package extends Detail {
  constructor(name) {
    super();
    this.name = name;
    this.details = [];
  }

  add(detail) {
    this.details.push(detail);
  }

  remove(detail) {
    this.details = this.details.filter(d => d.name !== detail.getName());
  }

  getPrice() {
    return this.details
            .map(d => d.getPrice())
            .reduce((res, cur) => res + cur, 0);
  }
}

let kitchen = new Package('Kitchen');
kitchen.add(new Detail('Table', 500));
kitchen.add(new Detail('Chair', 200));
kitchen.add(new Detail('Chair', 200));
kitchen.add(new Detail('Cupboard', 600));

let technics = new Package('Technics');
technics.add(new Detail('Fridge', 1000));
technics.add(new Detail('Cooker', 900));
technics.add(new Detail('Microvawe', 350));

kitchen.add(technics);

console.log(`Sum is ${kitchen.getPrice()}`);
