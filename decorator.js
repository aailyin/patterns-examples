class Car {
  price = 10000;
  model = 'kia';

  getPrice() {
    return this.price;
  }
  
  getDescription() {
    return `${this.model}`;  
  }
}

class Audi extends Car {
  price = 40000;
  model = 'audi';
}

class Tesla extends Car {
  price = 100000;
  model = 'tesla';
}

class Autopilot {
  car;

  constructor(car) {
    this.car = car;
  }

  getPrice() {
    return this.car.getPrice() + 5000;
  }

  getDescription() {
    return this.car.getDescription() + ' with autopilot'
  }
}

class ParkingSensor {
  car;

  constructor(car) {
    this.car = car;
  }

  getPrice() {
    return this.car.getPrice() + 2000;
  }

  getDescription() {
    return this.car.getDescription() + ' with parking sensor'
  }
}

let audi = new Audi();
audi = new Autopilot(audi);
audi = new ParkingSensor(audi);

// Audi ---> Autopilot(Audi) ---> ParkingSensor(Autopilot(Audi))
// => audi.getPrice(): ParkingSensor(Autopilot(Audi)).getPrice() -> Autopilot(Audi).getPrice() -> Audi.getPrice()
//                                    2000                        +            5000             +     40000 

audi.getDescription();
audi.getPrice();