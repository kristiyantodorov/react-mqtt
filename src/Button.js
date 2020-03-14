import React from 'react';
import Switch from "@material-ui/core/Switch"

class Button extends React.Component {
    constructor(props) {
        super(props)
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

    handleChange() {
        this.setState(prevState => ({
            checked: !prevState.checked
        }),
        () => {
            if ( this.state.checked ) {
                this.setState({
                    payload: "1"
                }, () => {
                    this.publish(this.state.topic, this.state.payload);
                })
            } else {
                this.setState({
                    payload: "0"
                }, () => {
                    this.publish(this.state.topic, this.state.payload);
                })
            }
        });
    }

    render() {
        return (
        <div>
        <Switch onChange={this.handleChange} checked={this.state.checked}/>
        </div>
        );
    }
}

export default Button;