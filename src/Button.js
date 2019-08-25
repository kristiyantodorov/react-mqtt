import React from 'react';
import Connection from './Mqtt'

class Button extends React.Component {
    constructor(props) {
        super(props)
        this.led = false;
        this.conn = new Connection();
        this.turnOnHandle = this.turnOn.bind(this)
        this.turnOffHandle = this.turnOff.bind(this)
    }
    turnOn() {
        this.conn.turnOn();
    }
    turnOff() {
        this.conn.turnOff();
    }

    render() {
        return ( 
        <div>
        <button type="button" onClick={this.turnOffHandle}>Turn OFF</button>
        <button type="button" onClick={this.turnOnHandle}>Turn ON</button>
        </div>
        );
    }
}

export default Button;