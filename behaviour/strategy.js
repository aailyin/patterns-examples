class Navigator {
  constructor(navigationType) {
    if (navigationType) {
      this.navigationType = navigationType;
    } else {
      // default navigation
      this.navigationType = new CarNavigation();
    }
  }

  getRoute(from, to) {
    this.navigationType.getRoute(from ,to);
  }

  setNavigationType(navigation) {
    this.navigationType = navigation;
  }
}

class NavigationType {
  type;

  getRoute(from ,to) {}
}

class CarNavigation extends NavigationType {
  type = 'car';
  
  getRoute(from ,to) {
    console.log(`The shortest way by ${this.type} from ${from} and to ${to} was built. Total: 12km.`);
  }
}

class WalkNavigation extends NavigationType {
  type = 'walk';
  
  getRoute(from ,to) {
    console.log(`The shortest way by ${this.type} from ${from} and to ${to} was built. Total: 10km.`);
  }
}

class BikeNavigation extends NavigationType {
  type = 'bike';
  
  getRoute(from ,to) {
    console.log(`The shortest way by ${this.type} from ${from} and to ${to} was built. Total: 13.5km.`);
  }
}

let from = 'Kozlova, 12';
let to = 'Petrova, 24'
let navigator = new Navigator();
navigator.getRoute(from, to);

navigator.setNavigationType(new WalkNavigation());
navigator.getRoute(from, to);

navigator.setNavigationType(new BikeNavigation());
navigator.getRoute(from, to);

