import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
 constructor(props) {
    super(props);
    this.state = {
      name: '',
      greeting: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleTurnOn = this.handleTurnOn.bind(this);
    this.handleTurnOff = this.handleTurnOff.bind(this);
  }

  handleChange(event) {
    this.setState({ name: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    fetch(`/api/greeting?name=${encodeURIComponent(this.state.name)}`)
      .then(response => response.json())
      .then(state => this.setState(state));
  }
  handleTurnOn(event) {
    event.preventDefault();
    fetch('/api/on')
      .then(response => response.json())
      .then(state => this.setState(state));
  }
  handleTurnOff(event) {
    event.preventDefault();
    fetch('/api/off')
      .then(response => response.json())
      .then(state => this.setState(state));
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div>
            <button onClick={this.handleTurnOn}>Turn On</button>
          </div>
          <div>
            <button onClick={this.handleTurnOff}>Turn Off</button>
          </div>
          <p>{this.state.greeting}</p>
        </header>
      </div>
    );
  };
};
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <Button name="Kris"/>

//       </header>
//     </div>
//   );
// }

export default App;
