import React from 'react';
import Button from "@material-ui/core/Button"
import TimeInput from 'material-ui-time-picker'

class AlarmButton extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            currentAlarmTime: '',
            alarmTime: '',
        };
        this.handleDateChange = this.handleDateChange.bind(this)
        this.getCurrentAlarm = this.getCurrentAlarm.bind(this)
        this.setNewAlarm = this.setNewAlarm.bind(this)
    }

    setNewAlarm() {
        // const requestOptions = {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify({ "alarm_time": this.state.alarmTime })
        // };
        // fetch('/api/alarm', requestOptions)
        // this.getCurrentAlarm()
    }

    componentDidMount() {
        // Simple POST request with a JSON body using fetch
        this.getCurrentAlarm()
    }

    getCurrentAlarm() {
        console.log(this.state.currentAlarmTime)
        fetch(`/api/alarm`)
            .then(response => response.json())
            .then(json_response => this.setState({
                "currentAlarmTime": json_response.alarm_time
            }));
    }

    handleDateChange(date) {
        console.log(date.toUTCString())
        this.setState({
            "alarmTime": date.toUTCString()
        }, () => this.setNewAlarm(this.state.alarmTime), () => console.log(this.state));
    }

    render() {
        return (
            <div>
                {/* <p>Current alarm is for: {this.getCurrentAlarm()}</p> */}
                {/* controlled input */}
                <TimeInput
                    mode='24h'
                    value={new Date()} /*(this.state.currentAlarmTime)*/
                    autoOk={true}
                    onChange={(time) => this.handleDateChange(time)}
                />
        </div>
        );
    }
}

export default AlarmButton;