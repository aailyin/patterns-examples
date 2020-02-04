class HDMI {
  type = 'hdmi';

  connectHDMI() {
    console.log('Cable connected!');
  }
}

class TypeC {
  type = 'type-c';

  connectTypeC() {
    console.log('Cable connected!');
  }
}

class PC {
  constructor() {}

  monitorHDMIConnect(cable) {
    console.log('Connect to monitor via HDMI');
    cable.connectHDMI();
  }
}

class HDMI_TypeC_Adapter {
  constructor(cableTypeC) {
    this.cableTypeC = cableTypeC;
  }

  connectHDMI() {
    this.cableTypeC.connectTypeC();
  }
}

let hdmi = new HDMI();
let typec = new TypeC();
let pc = new PC();

pc.monitorHDMIConnect(hdmi);
pc.monitorHDMIConnect(new HDMI_TypeC_Adapter(typec));

