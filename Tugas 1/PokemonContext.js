// src/context/PokemonContext.js
import React, { createContext, useState, useEffect } from 'react';

const PokemonContext = createContext();

export const PokemonProvider = ({ children }) => {
  const [pokemons, setPokemons] = useState([]);
  const [layout, setLayout] = useState('2col'); // Default layout: 2 columns
  const [filter, setFilter] = useState('');

  useEffect(() => {
    // Cek apakah ada data di LocalStorage atau SessionStorage
    const storedPokemons = localStorage.getItem('pokemons');
    if (storedPokemons) {
      setPokemons(JSON.parse(storedPokemons));
    } else {
      // Ambil data Pokemon jika tidak ada di storage
      fetch('https://pokeapi.co/api/v2/pokemon?limit=50')
        .then((response) => response.json())
        .then((data) => {
          setPokemons(data.results);
          localStorage.setItem('pokemons', JSON.stringify(data.results));
        });
    }
  }, []);

  // Filter Pokémon berdasarkan nama
  const filteredPokemons = pokemons.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <PokemonContext.Provider value={{ pokemons: filteredPokemons, layout, setLayout, filter, setFilter }}>
      {children}
    </PokemonContext.Provider>
  );
};

export default PokemonContext;
