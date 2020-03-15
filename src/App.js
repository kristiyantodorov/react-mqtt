import React from 'react';
import './App.css';
import AutoGrid from './AutoGrid';
import logo from './logo512.png'

class App extends React.Component {
 constructor(props) {
    super(props);
    this.state = {
      name: '',
      greeting: 'Henlo, Hooman!'
    };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>{this.state.greeting}</h2>
          <AutoGrid/>
        </header>
      </div>
    );
  };
};

export default App;
