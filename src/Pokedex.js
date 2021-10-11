import React from "react";
import PokeCard from "./PokeCard";

/** creates divs for each pokemon in pokemonList, passed in as prop */
function Pokedex({ pokemonList, totalExp }) {
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
