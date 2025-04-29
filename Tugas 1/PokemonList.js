// src/components/PokemonList.js
import React, { useContext } from 'react';
import PokemonContext from '../context/PokemonContext';
import PokemonDetail from './PokemonDetail';

const PokemonList = () => {
  const { pokemons, layout } = useContext(PokemonContext);

  return (
    <div style={{ display: layout === '2col' ? 'grid' : 'block', gridTemplateColumns: layout === '2col' ? '1fr 1fr' : '1fr' }}>
      {pokemons.map((pokemon, index) => (
        <div key={index} style={{ margin: '10px', padding: '10px', border: '1px solid #ddd' }}>
          <PokemonDetail pokemon={pokemon} />
        </div>
      ))}
    </div>
  );
};

export default PokemonList;
