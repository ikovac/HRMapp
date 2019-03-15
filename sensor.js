const Ant = require('ant-plus');

let stick = new Ant.GarminStick2;
let sensor = new Ant.HeartRateSensor(stick);

if (!stick.open()) {
  console.log('Stick not found!');
}

sensor.on('hbData', function (data) {
  console.log(data.DeviceID, data.ComputedHeartRate);
});

sensor.on('attached', () => {
  console.log("Attached");
});

sensor.on('detached', () => {
  console.log("Dettached");
});

stick.on('startup', function () {
  // prvi parametar id kanala (ima ih do 8), drugi parametar id strapa
  // Ukoliko se za drugi parametar stavi 0, attacha se prvi senzor koji usb skenira.
  // 0 je u biti placeholder da attacha prvi na koji naiđe.
  sensor.attach(0, 42763);
});



