// src/components/PokemonDetail.js
import React, { useState, useEffect } from 'react';

const PokemonDetail = ({ pokemon }) => {
  const [detail, setDetail] = useState(null);

  useEffect(() => {
    fetch(pokemon.url)
      .then((response) => response.json())
      .then((data) => setDetail(data));
  }, [pokemon]);

  if (!detail) return <div>Loading...</div>;

  return (
    <div>
      <h3>{detail.name}</h3>
      <img src={detail.sprites.front_default} alt={detail.name} />
      <ul>
        <li>Height: {detail.height}</li>
        <li>Weight: {detail.weight}</li>
      </ul>
    </div>
  );
};

export default PokemonDetail;
