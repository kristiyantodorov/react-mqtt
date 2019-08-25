import React from 'react';

class Button extends React.Component {
    constructor(props) {
        super(props)
        this.led = false;
        this.state = {
            "topic": this.props.topic,
            "payload": this.props.payload
        }
        this.clickHandle = this.publish.bind(this)
    }

    publish(topic, payload) {
        fetch(`/api/bedroom?topic=${this.state.topic}&payload=${this.state.payload}`)
            .then(response => response.json())
            .then(state => this.setState(state));
    }

    render() {
        return ( 
        <div>
        <button type="button" onClick={this.clickHandle}>{this.props.name}</button>
        </div>
        );
    }
}

export default Button;