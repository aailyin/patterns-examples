class NotebookLogin {
  login() {
    console.log('Logged in.');
  }

  logout() {
    console.log('Logged out.');
  }
}

class NotebookSecuritySystem {
  password = 'qwerty';

  constructor(device) {
    this.device = device;
  }

  login(password) {
    if (password === this.password) {
      this.device.login();
    } else {
      console.log('Incorrect password!');
    }
  }

  logout() {
    this.device.logout();
  }
}

let myNotebookSecurity = new NotebookSecuritySystem(new NotebookLogin());

myNotebookSecurity.login('12345');
myNotebookSecurity.login('qwerty');
myNotebookSecurity.logout();
