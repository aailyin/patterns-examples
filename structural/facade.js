class NotebookConveyor {
  constructor() {}

  setCPU() { console.log('CPU was set.'); }
  getCPU() { console.log('CPU was removed.'); }

  setRAM() { console.log('RAM was set.'); }
  getRAM() { console.log('RAM was removed.'); }

  setSSD() { console.log('SSD was set.'); }
  getSSD() { console.log('SSD was removed.'); }

  setHDD() { console.log('HDD was set.'); }
  getHDD() { console.log('HDD was removed.'); }

  setScreen() { console.log('Screen was set.'); }
  getScreen() { console.log('Screen was removed.'); }

  setKeyboard() { console.log('Keyboard was set.'); }
  getKeyboard() { console.log('Keyboard was removed.'); }

  paint() { console.log('Notebook was painted.'); }

  pack() { console.log('Notebook was packed.'); }

  unpack() { console.log('Notebook was unpacked.'); }
}

class NotebookConveyorFacade {
  constructor(notebookConveyor) {
    this.notebookConveyor = notebookConveyor;
  }

  assembleNotebook() {
    this.notebookConveyor.setCPU();
    this.notebookConveyor.setRAM();
    this.notebookConveyor.setSSD();
    this.notebookConveyor.setScreen();
    this.notebookConveyor.setKeyboard();
    this.notebookConveyor.paint();
    this.notebookConveyor.pack();
  }

  replaceSSDToHDD() {
    this.notebookConveyor.unpack();
    this.notebookConveyor.getSSD();
    this.notebookConveyor.setHDD();
    this.notebookConveyor.pack();
  }

  replaceScreen() {
    this.notebookConveyor.unpack();
    this.notebookConveyor.getScreen();
    this.notebookConveyor.setScreen();
    this.notebookConveyor.pack();
  }
}

let noteConveyor = new NotebookConveyor();
let noteConveyorFacade = new NotebookConveyorFacade(noteConveyor);

noteConveyorFacade.assembleNotebook();
noteConveyorFacade.replaceSSDToHDD();