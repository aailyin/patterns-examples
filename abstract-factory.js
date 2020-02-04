// abstract main class
class VAGFactory {
    constructor(concern) {
        switch (concern) {
            case 'sport': return new AudiFactory();
            case 'family': return new VolkswagenFactory();
        }
    }
}

function VolkswagenFactory() {
    return new Tiguan(40000, 235);
}

function AudiFactory() {
    return new A4(80000, 270);
}

class Car {
    constructor(price, maxSpeed) {
        this.price = price;
        this.maxSpeed = maxSpeed;
    }

    getInfo() {
        return `$${this.price} - ${this.maxSpeed}km/h`;
    }
}

class Tiguan extends Car {
    constructor(...args) {
        super(...args);

        this.model = 'Volkswagen Tiguan';
    }

    getInfo() {
        return `${this.model}: ` + super.getInfo();
    }
}


class A4 extends Car {
    constructor(...args) {
        super(...args);

        this.model = 'Audi A4';
    }

    getInfo() {
        return `${this.model}: ` + super.getInfo();
    }
}



let mySportCar = new VAGFactory('sport');
let myFamilyCar = new VAGFactory('family');

