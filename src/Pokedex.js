import React from "react";
import PokeCard from "./PokeCard";

function Pokedex({ pokemonList }) {
  return (
    <div>
      {pokemonList.map((pokemon) => (
        <PokeCard
          id={pokemon.id}
          name={pokemon.name}
          type={pokemon.type}
          base_experience={pokemon.base_experience}
        />
      ))}
    </div>
  );
}

export default Pokedex;
