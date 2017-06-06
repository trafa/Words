import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import WordsTable from './Components/WordsTable';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div>
          <WordsTable title="Pierwsza tabelka" words={this.props.words} />
          <WordsTable title="Druga tabelka" words={[
            ['G_1','H_1','I_1','J_1','K_1','L_1'],
            ['G_2','H_2','I_2','J_2','K_2','L_2'],
            ['G_3','H_3','I_3','J_3','K_3','L_3'],
            ['G_4','H_4','I_4','J_4','K_4','L_4'],
            ['G_5','H_5','I_5','J_5','K_5','L_5']
          ]} />
        </div>
      </div>
    );
  }
}

export default App;
