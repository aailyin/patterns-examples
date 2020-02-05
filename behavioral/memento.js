class Snapshot {
  static version = 0;

  constructor(text, cursorX, cursorY, selectedText) {
    this.text = text;
    this.cursorX = cursorX;
    this.cursorY = cursorY;
    this.selectedText = selectedText;
    this.version = Snapshot.version;
    Snapshot.version++;
  }
}

class Editor {
  constructor(text = '', cursorX = 0, cursorY = 0, selectedText = '') {
    this.text = text;
    this.cursorX = cursorX;
    this.cursorY = cursorY;
    this.selectedText = selectedText;
  }

  selectText(newText) {
    this.selectedText = newText;
    return this.selectedText !== '';  // selected text in editor cannot be an empty string
  }

  setText(newText) {
    this.text = newText;
  }

  getText() {
    return this.text;
  }

  createSnapshot() {
    return new Snapshot(this.text, this.cursorX, this.cursorY, this.selectedText);
  }

  restore(snapshot) {
    console.log(`Restoring version ${snapshot.version}.`);
    this.text = snapshot.text;
    this.cursorX = snapshot.cursorX;
    this.cursorY = snapshot.cursorY;
    this.selectedText = snapshot.selectedText;
  }

  status() {
    console.log(`Text: ${this.text}, x: ${this.cursorX}, y: ${this.cursorY}, selected: ${this.selectedText}`);
  }
}

class Command {
  constructor(editor) {
    this.editor = editor;
    this.snapshots = [];
  }
  
  
  selectText(text) {
    console.log(`Select ${text}`);

    if (this.editor.selectText(text)) {
      this.snapshots.push(this.editor.createSnapshot());
    } else {
      this.editor.restore(this.snapshots.pop());
    }
  }

  showSnapshots() {
    console.table(this.snapshots);
  }
}

let editor = new Editor('abc', 0, 0, 'a');
let command = new Command(editor);

command.selectText('ab');
command.showSnapshots();
editor.status();

command.selectText('abc');
command.showSnapshots();
editor.status();

command.selectText('');
command.showSnapshots();
editor.status();