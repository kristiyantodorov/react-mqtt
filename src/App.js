import React from 'react';
import './App.css';
import Button from './Button';
import ColorPicker from './ColorPicker';
import Paper from '@material-ui/core/Paper'
import Box from '@material-ui/core/Box'
import Card from '@material-ui/core/Card'
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import AutoGrid from './AutoGrid';

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
          <h2>{this.state.greeting}</h2>
          <AutoGrid/>
        </header>
      </div>
    );
  };
};

export default App;
