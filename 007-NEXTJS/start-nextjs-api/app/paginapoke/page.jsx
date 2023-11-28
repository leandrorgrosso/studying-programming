"use client";

import React, { useState } from "react";
import Pokemon from "@/components/Pokemon";

const PaginaPokemon = () => {
  const [pokemonId, setPokemonId] = useState(1);
  const [pokemon, setPokemon] = useState(null);
  const [error, setError] = useState(null);

  const getPokemon = async () => {
    try {
      const resposta = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${pokemonId}`
      );
      const data = await resposta.json();
      setPokemon(data);
      setError(null);
    } catch (error) {
      console.error("Erro fetching Pokemon:", error);
      setError("Falha na busca Pokemon. Tente novamente.");
    }
  };

  return (
    <div>
      <h1>Pokedex</h1>
      <input
        type="number"
        value={pokemonId}
        onChange={(event) => setPokemonId(event.target.value)}
      />
      <button onClick={getPokemon}>Pegue Pokemon</button>

      {error && <p style={{ color: "red" }}>{error}</p>}
      {pokemon && <Pokemon pokemon={pokemon} />}
    </div>
  );
};

export default PaginaPokemon;
