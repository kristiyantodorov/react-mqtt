import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './Button';

class App extends React.Component {
 constructor(props) {
    super(props);
    this.state = {
      name: '',
      greeting: ''
    };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Bed:</p>
          <Button name="ON" topic="/bedroom/killall" payload="1"/>
          <p>Mirror:</p>
          <Button name="ON" topic="/bedroom/mirror/toggle" payload="1"/>
          <p>{this.state.greeting}</p>
        </header>
      </div>
    );
  };
};

export default App;
