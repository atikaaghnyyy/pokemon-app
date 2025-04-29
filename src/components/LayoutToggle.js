// src/components/LayoutToggle.js
import React, { useContext } from 'react';
import PokemonContext from '../context/PokemonContext';

const LayoutToggle = () => {
  const { layout, setLayout } = useContext(PokemonContext);

  return (
    <div>
      <button onClick={() => setLayout('1col')}>Tampilan 1 Kolom</button>
      <button onClick={() => setLayout('2col')}>Tampilan 2 Kolom</button>
    </div>
  );
};

export default LayoutToggle;
