class Auto {
  constructor(model) {
    this.model = model;
  }
}

class AutoFactory {
  cars = {};

  create(model) {
    if (this.cars[model]) {
      return this.cars[model];
    }
    console.count('New car created');
    this.cars[model] = new Auto(model);
    return this.cars[model];
  }

  getCars() {
    console.table(this.cars);
  }
}

let autoFactory = new AutoFactory();

let audi = autoFactory.create('Audi');
let audi2 = autoFactory.create('Audi');
let bmw = autoFactory.create('BMW');
let tesla = autoFactory.create('Tesla');
let tesla2 = autoFactory.create('Tesla');

autoFactory.getCars();