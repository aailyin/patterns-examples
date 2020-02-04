class AudiCar {
    constructor(model, price, maxSpeed) {
        this.model = model;
        this.price = price;
        this.maxSpeed = maxSpeed;
    }

    clone() {
        return new AudiCar(this.model, this.price, this.maxSpeed);
    }
}

let prototypeCar = new AudiCar('A4', 60000, 250);

let car1 = prototypeCar.clone();
let car2 = prototypeCar.clone();
let car3 = prototypeCar.clone();