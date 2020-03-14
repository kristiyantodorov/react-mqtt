import React from 'react';
import { CirclePicker } from 'react-color';

class ColorPicker extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            "topic": this.props.topic,
            "payload": "#ffffff"
        }
        this.clickHandle = this.publish.bind(this)
        this.handleChange = this.handleChangeComplete.bind(this);
    }

    publish(topic, payload) {
        fetch(`/api/bedroom?topic=${this.state.topic}&payload=${encodeURIComponent(this.state.payload)}`)
            .then(response => response.json())
            .then(state => this.setState(state));
    }

    handleChangeComplete = (color) => {
        this.setState({
            payload: color.hex
        }, () => {
            console.log(this.state.payload);
            this.publish(this.state.topic, this.state.payload);
        });
    }

    render() {
        return (
        <div>
            <CirclePicker color={this.state.payload} onChangeComplete={this.handleChangeComplete} />
        </div>
        );
    }
}

export default ColorPicker;