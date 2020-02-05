class Iterator {
  i = 0;
  
  constructor(elements = []) {
    this.elements = elements;
  }

  hasNext() {
    return this.i < this.elements.length;
  }

  current() {
    return this.elements[this.i];
  }

  next() {
    return this.elements[this.i++];
  }
}

let iter = new Iterator(['Audi', 'BMW', 'Mercedes', 'Tesla']);

while (iter.hasNext()) {
  console.log('Element: ', iter.next());
} 

