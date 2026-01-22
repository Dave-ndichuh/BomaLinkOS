const mqtt = require('mqtt');
const brokerUrl = 'mqtt://127.0.0.1:1883'; // Explicitly use IPv4 localhost

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
    // Keep the client alive for a few seconds to allow for output to be captured
    setTimeout(() => {
      client.end(); // Close connection after publishing
    }, 3000); // 3-second delay
  });
});

client.on('error', (err) => {
  console.error('MQTT connection error:', err);
});