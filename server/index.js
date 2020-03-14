const express = require('express');
const bodyParser = require('body-parser');
const pino = require('express-pino-logger')();
const mqtt = require('mqtt')

class Connection {
    constructor() {
        this.client = mqtt.connect('mqtt://192.168.0.124:1883')
        this.client.on('connect', () => {
          console.log("Connected");
        })
    }
    publish(topic, payload) {
        this.client.publish(topic, payload);
    }
}

conn = new Connection()

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(pino);

app.get('/api/bedroom', (req, res) => {
  topic = req.query.topic;
  payload = req.query.payload;
  conn.publish(topic, payload);
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify({}));
});


app.listen(3001, () =>
  console.log('Express server is running on localhost:3000')
);