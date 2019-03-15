// Includamo ant-plus library
const Ant = require('ant-plus');

// Inicijaliziramo ANT USB stick
let stick = new Ant.GarminStick2;

// Inicijaliziramo Heart Rate sensor
let sensor = new Ant.HeartRateScanner(stick);

// Ukoliko ANT USB stick nije uključen ispiši poruku
if (!stick.open()) {
  console.log('Stick not found!');
}

// Kad je USB spreman za rad, pokreni skeniranje senzora
stick.on('startup', function () {
  sensor.scan();
  console.log("Scaning...");
});

// Kada usb prmimi podatak od senzora, obradi taj podatak
sensor.on('hbData', function (data) {
  // Ispisuje Device ID i Heart Rate beat.
  console.log(data.DeviceID, data.ComputedHeartRate);
});