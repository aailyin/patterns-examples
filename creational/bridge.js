class Harddisk {
  constructor(type = 'HDD') {
    this.type = type;
  }

  getType() {
    return this.type;
  }
}

class Notebook {
  constructor(firm, model, disk) {
    this.firm = firm;
    this.model = model;
    this.disk = disk;
  }

  getDescription() {
    return `Notebook ${this.firm} ${this.model} with harddisk ${this.disk.getType()}`;
  }
}

// The main idea is that we don't create two different classes for one model:
// NotebookHDD + NotebookSSD, because we can store this data in disk property.
// Call of disk.getType() is a brdige between two classes
let macbook1 = new Notebook('Apple', 'Macbook 15', new Harddisk('SSD'));
let macbook2 = new Notebook('Apple', 'Macbook 15', new Harddisk('HDD'));

console.log(`Notebook 1: ${macbook1.getDescription()}`);  // Notebook 1: Notebook Apple Macbook 15 with harddisk SSD
console.log(`Notebook 2: ${macbook2.getDescription()}`);     // Notebook 2: Notebook Apple Macbook 15 with harddisk HDD



