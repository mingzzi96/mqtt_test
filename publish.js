const mqtt = require("mqtt");
const client = mqtt.connect("mqtt://test.mosquitto.org");

setInterval(() => {
  client.publish("test", "MQTT CONNECTED!");
}, 2000);

client.on("connect", () => {
  if (client.connected) {
    //mqtt가 연결되어있는지 확인
    console.log(client.connected);
    //topic 구독
    client.subscribe("test");
    //구독해놓은 메시지가 들어오면 실행
    client.on("message", (topic, message) => {
      console.log(`topic: ${topic.toString()}, message: ${message.toString()}`);
    });
  }
});
