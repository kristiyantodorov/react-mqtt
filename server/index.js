const express = require('express');
const bodyParser = require('body-parser');
const pino = require('express-pino-logger')();
const mqtt = require('mqtt')

class Connection {
    constructor() {
        this.client = mqtt.connect('mqtt://192.168.0.124:1883');
        this.client.on('connect', () => {
          console.log("Connected");
        });

        this.minutes_diff = 1;
        this.alarm_time = Date.now();
        // this.interval = setInterval(this.checkAlarm, 1500, this)
    }

    publish(topic, payload) {
        this.client.publish(topic, payload);
    }

    set_new_time(alarm_time) {
      this.alarm_time = alarm_time

      console.log("Setting ", alarm_time);
    }

    addMinutes(date, minutes) {
      return new Date(date + minutes*60000);
    }

    checkAlarm(self) {
      console.log("Now   is", Date.now())
      console.log("Alarm is", new Date(self.alarm_time))
      if ( Date.now() > new Date(self.alarm_time) ) {
        console.log("passed");
        self.publish("/bedroom/killall", "1");

        self.alarm_time = self.addMinutes(self.alarm_time, 1440);
      } else {
        console.log("Still not")
      }
    }

}

conn = new Connection()

const app = express();
app.use(bodyParser.json({ extended: true }));
app.use(pino);

app.listen(3001, () =>
  console.log('Express server is running on localhost:3001')
);

app.get('/api/bedroom', (req, res) => {
  topic = req.query.topic;
  payload = req.query.payload;
  conn.publish(topic, payload);
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify({}));
});

app.get('/api/alarm', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify({"alarm_time": conn.alarm_time}));
});

app.post('/api/alarm', (req, res) => {
  conn.set_new_time(req.body.alarm_time);
  console.log(req.body.alarm_time)
  res.setHeader('Content-Type', 'application/json');
  res.send('POST request to the homepage')
});