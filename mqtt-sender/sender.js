const mqtt = require('mqtt');
const brokerUrl = 'mqtt://localhost:1883'; // Assuming Mosquitto is running on localhost

const client = mqtt.connect(brokerUrl);

client.on('connect', () => {
  console.log('Connected to MQTT broker');
  // Publish a message to turn on the Blinky LED (assuming GPIO2 is for the LED)
  client.publish('esphome/blinky_switch/switch/blinky_led/command', 'ON', (err) => {
    if (err) {
      console.error('Failed to publish message:', err);
    } else {
      console.log('Message published: ON to esphome/blinky_switch/switch/blinky_led/command');
    }
    client.end(); // Close connection after publishing
  });
});

client.on('error', (err) => {
  console.error('MQTT connection error:', err);
});
