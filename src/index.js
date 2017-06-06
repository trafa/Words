import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

var WORDS = [
  ['A_1', 'B_1', 'C_1', 'D_1', 'E_1', 'F_1'],
  ['A_2', 'B_2', 'C_2', 'D_2', 'E_2', 'F_2'],
  ['A_3', 'B_3', 'C_3', 'D_3', 'E_3', 'F_3'],
  ['A_4', 'B_4', 'C_4', 'D_4', 'E_4', 'F_4'],
  ['A_5', 'B_5', 'C_5', 'D_5', 'E_5', 'F_5']
];

ReactDOM.render(
  <App words={WORDS}/>,
  document.getElementById('root')
);
