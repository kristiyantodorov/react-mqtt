const express = require('express');
const bodyParser = require('body-parser');
const pino = require('express-pino-logger')();
const mqtt = require('mqtt')

console.log("Asd");

class Connection {
    constructor() {
        this.client = mqtt.connect('mqtt://192.168.0.124:1883')
        this.client.on('connect', () => {
          console.log("Connected")
        })
        console.log("Constructor");
    }
    turnOn() {
      this.client.publish('/bedroom/killall', "1")
    }
    turnOff() {
      this.client.publish('/bedroom/killall', "0")
    }
}

conn = new Connection()

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(pino);

app.get('/api/on', (req, res) => {
  conn.turnOn();
  const name = req.query.name || 'World';
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify({ greeting: `Hello ${name}!` }));
});
app.get('/api/off', (req, res) => {
  conn.turnOff();
  const name = req.query.name || 'World';
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify({ greeting: `Hello ${name}!` }));
});

app.listen(3001, () =>
  console.log('Express server is running on localhost:3001')
);