import React from 'react';
import Switch from "react-switch";

class Button extends React.Component {
    constructor(props) {
        super(props)
        this.led = false;
        this.state = {
            "topic": this.props.topic,
            "payload": this.props.payload,
            "checked": false
        }
        this.clickHandle = this.publish.bind(this)
        this.handleChange = this.handleChange.bind(this);
    }

    publish(topic, payload) {
        fetch(`/api/bedroom?topic=${this.state.topic}&payload=${this.state.payload}`)
            .then(response => response.json())
            .then(state => this.setState(state));
    }

    handleChange(checked) {
        console.log(checked)
        this.setState({ checked });
        if( checked ) {
            this.setState({
                "payload": "1"
            });
        }
        else {
            this.setState({
                "payload": "0"
            });
        }
        console.log(this.state)
        this.publish(this.state.topic, this.state.payload);
    }

    render() {
        return ( 
        <div>
        <Switch onChange={this.handleChange} checked={this.state.checked} />
        </div>
        );
    }
}

export default Button;