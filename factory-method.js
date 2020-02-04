class AudiFactory {
    create(model) {
        switch (model) {
            case 'A4': return new Audi(model, 60000, 240);
            case 'A6': return new Audi(model, 80000, 260);
            case 'A8': return new Audi(model, 100000, 275);
        }
    }
}

class Audi {
    constructor(model, price, maxSpeed) {
        this.model = model;
        this.price = price;
        this.maxSpeed = maxSpeed;
    }

    getInfo() {
        return `${this.model} - $${this.price} - ${this.maxSpeed}km/h`;
    }
}

let factory = new AudiFactory();

let a4 = factory.create('A4');
let a6 = factory.create('A6');
