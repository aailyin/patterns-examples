class NotebookBuilder {
  build() {
    this.setBody();
    this.addScreen();
    this.addHardware();
    this.addKeyboard();
    this.addSoftware();
  }
}

class Macbook extends NotebookBuilder {
  setBody() {
    console.log('Body for Macbook was added.');
  }

  addScreen() {
    console.log('Retina screen was added.');
  }

  addHardware() {
    console.log('Added SSD 512GB, 32GB RAM, Radeon 550.');
  }

  addKeyboard() {
    console.log('Added keyboard.')
  }

  addSoftware() {
    console.log('Installed MacOS.');
  }
}


class ASUS extends NotebookBuilder {
  setBody() {
    console.log('Body for ASUS was added.');
  }

  addScreen() {
    console.log('Screen 15" was added.');
  }

  addHardware() {
    console.log('Added HDD 1TB, 8GB RAM, GeForce 1050Ti.');
  }

  addKeyboard() {
    console.log('Added keyboard.')
  }

  addSoftware() {
    console.log('Installed Windows 10.');
  }
}

let macbook = new Macbook();
let asus = new ASUS();

macbook.build();
asus.build();