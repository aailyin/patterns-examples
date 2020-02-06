class OrderStatus {
  constructor(name, nextStatus) {
    this.name = name;
    this.nextStatus = nextStatus;
  }

  next() {
    if (this.nextStatus) {
      return new this.nextStatus();
    } else {
      console.log(`Order state is final.`);
    }
  }
}

class WaitingForPayment extends OrderStatus {
  constructor() {
    super('waitingForPayment', Shipping);
  }
}

class Shipping extends OrderStatus {
  constructor() {
    super('shipping', Delivered);
  }
}

class Delivered extends OrderStatus {
  constructor() {
    super('delivered', null);
  }
}

class Canceled extends OrderStatus {
  constructor() {
    super('delivered', null);
  }
}

class Order {
  constructor() {
    this.state = new WaitingForPayment();
  }

  nextState() {
    this.state = this.state.next();
  }

  cancelOrder() {
    if (this.state instanceof WaitingForPayment) {
      console.log('Order was canceled!');
      this.state = new Canceled();
    } else {
      console.log('Order cannot be cancelled!');
    }
  }

  showState() {
    console.log(`State is ${this.state.name}`);
  }
}

let order = new Order();
order.showState();

order.nextState();
order.showState();

order.nextState();
order.showState();

order.nextState();

