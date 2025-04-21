// src/App.js
import React, { useContext } from 'react';
import PokemonContext from './context/PokemonContext';
import LayoutToggle from './components/LayoutToggle';
import PokemonList from './components/PokemonList';

const App = () => {
  const { filter, setFilter } = useContext(PokemonContext);

  return (
    <div style={{ padding: '20px' }}>
      <LayoutToggle />
      <input
        type="text"
        placeholder="Filter Pokemon..."
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        style={{ margin: '10px', padding: '5px' }}
      />
      <PokemonList />
    </div>
  );
};

export default App;
