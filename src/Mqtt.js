const mqtt = require('mqtt')

// client.on('message', (topic, message) => {
//   if(topic === 'garage/connected') {
//     connected = (message.toString() === 'true');
//   }
//   console.log("ASd")
// })

export default class Connection {
    constructor() {
        this.client = mqtt.connect('mqtt://192.168.0.124:8080')
        this.client.on('connect', () => {
          console.log("Connected")
        })
    }
    turnOn() {
      this.client.publish('/bedroom/killall_test', "1")
    }
    turnOff() {
      this.client.publish('/bedroom/killall_test', "0")
    }
}