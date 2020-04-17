import React from 'react';
import './App.css';
import AutoGrid from './AutoGrid';
import background from './images/background.jpeg'

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
        <header className="App-header" style={{
          backgroundImage: `url(${background})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'}}>
          {/* <img src={logo} className="App-logo" alt="logo" />
          <h2>{this.state.greeting}</h2> */}
          <h2/>
          <AutoGrid/>
        </header>
      </div>
    );
  };
};

export default App;
