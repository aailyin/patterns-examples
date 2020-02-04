class Car {
  signaling = false;
  autopilot = false;
  parkingSensor = false;
  engine = 'V4';

  getInfo() {
    return `s: ${this.signaling}; p: ${this.parkingSensor}; a: ${this.autopilot}; e: ${this.engine}`;
  }
}

class CarBuilder {
  car;

  constructor() {
    this.car = new Car();
  }

  addAutopilot() {
    this.car.autopilot = true;
    return this;
  }

  addSignaling() {
    this.car.signaling = true;
    return this;
  }

  addParkingSensor() {
    this.car.signaling = true;
    return this;
  }

  updateEngine(engine) {
    this.car.engine = engine;
    return this;
  }

  build() {
    return this.car;
  }
}

let newCar = new CarBuilder()
              .addAutopilot()
              .addParkingSensor()
              .updateEngine('V6')
              .build();

newCar.getInfo();