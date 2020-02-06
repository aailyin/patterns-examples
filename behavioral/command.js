class Command {
  execute() {}
}

class Switch {
  commands = {};

  register(commandName, command) {
    this.commands[commandName] = command;
  }

  execute(commandName) {
    if (!this.commands[commandName]) {
      console.log(`Command with name "${commandName}" is not registered.`);
    } else {
      this.commands[commandName].execute();
    }
  }
}

class Light {
  turnOn() {
    console.log('The light is on.');
  }

  turnOff() {
    console.log('The light is off.');
  }
}

class SwitchOnCommand extends Command {
  constructor(light) {
    super();
    this.light = light;
  }

  execute() {
    this.light.turnOn();
  }
}

class SwitchOffCommand extends Command {
  constructor(light) {
    super();
    this.light = light;
  }

  execute() {
    this.light.turnOff();
  }
}

let light = new Light();
let switchOn = new SwitchOnCommand(light);
let switchOff = new SwitchOffCommand(light);

let mySwitch = new Switch();
mySwitch.register('on', switchOn);
mySwitch.register('off', switchOff);

mySwitch.execute('on');
mySwitch.execute('off');
mySwitch.execute('error');