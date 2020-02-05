class Account {
  name;
  balance;

  constructor(balance) {
    this.balance = balance;
  }

  pay(orderBill) {
    console.log(`Pay $${orderBill} using ${this.name} account.`);

    if (this.canPay(orderBill)) {
      this.reduceBalance(orderBill);
      console.log(`Paid -$${orderBill} from ${this.name} account. Balance: ${this.balance}.`);
    } else if (this.nextPayment) {
      console.log(`Not enought money. Trying to pay using ${this.nextPayment.name} account.`);
      this.nextPayment.pay(orderBill);
    } else {
      console.log(`Sorry! You don\'t have $${orderBill} to pay.`);
    }
  }

  reduceBalance(orderBill) {
    this.balance = this.balance - orderBill;
  }

  canPay(orderBill) {
    return this.balance >= orderBill;
  }
  
  setNextPayment(account) {
    this.nextPayment = account;
  }

  show() {
    console.log(this);
  }
}

class MasterCard extends Account {
  constructor(balance) {
    super(balance);
    this.name = 'MasterCard';
  }
}

class Visa extends Account {
  constructor(balance) {
    super(balance);
    this.name = 'Visa';
  }
}

class PayPal extends Account {
  constructor(balance) {
    super(balance);
    this.name = 'PayPal';
  }
}

let master = new MasterCard(400);
let visa = new Visa(200);
let paypal = new PayPal(100);

master.setNextPayment(visa);
visa.setNextPayment(paypal);

master.pay(300);
master.pay(500);
master.show();
