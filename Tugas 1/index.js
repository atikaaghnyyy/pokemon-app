import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { PokemonProvider } from './context/PokemonContext';

ReactDOM.render(
  <PokemonProvider>
    <App />
  </PokemonProvider>,
  document.getElementById('root')
);
