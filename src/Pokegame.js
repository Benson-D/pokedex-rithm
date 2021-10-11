import React from "react";
import Pokedex from "./Pokedex";

function Pokegame() {
  const pokemon = [
    { id: 4, name: "Charmander", type: "fire", base_experience: 62 },
    { id: 7, name: "Squirtle", type: "water", base_experience: 63 },
    { id: 11, name: "Metapod", type: "bug", base_experience: 72 },
    { id: 12, name: "Butterfree", type: "flying", base_experience: 178 },
    { id: 25, name: "Pikachu", type: "electric", base_experience: 112 },
    { id: 39, name: "Jigglypuff", type: "normal", base_experience: 95 },
    { id: 94, name: "Gengar", type: "poison", base_experience: 225 },
    { id: 133, name: "Eevee", type: "normal", base_experience: 65 },
  ];

  const hand1 = [];
  for (let i = 0; i < 4; i++) {
    const index = Math.floor(Math.random() * pokemon.length);
    const picked = pokemon.splice(index, 1);
    hand1.push(picked[0]);
  }

  const hand2 = pokemon;

  const hand1Exp = hand1.map(pokemon => pokemon.base_experience).reduce((acc, pokemon) => acc + pokemon);
  const hand2Exp = hand2.map(pokemon => pokemon.base_experience).reduce((acc, pokemon) => acc + pokemon);


  return (
    < div >
      <Pokedex pokemonList={hand1} />
      {(hand1Exp > hand2Exp) ? <h3>THIS HAND WINS WITH TOTAL EXP OF {hand1Exp}!!!!!!!!!!</h3> : <p>You lost with total experience of {hand1Exp} :'( </p>}
      <hr></hr>
      <Pokedex pokemonList={hand2} />
      {(hand1Exp < hand2Exp) ? <h3>THIS HAND WINS WITH TOTAL EXP OF {hand2Exp}!!!!!!!!!!</h3> : <p>You lost with total experience of {hand2Exp} :'( </p>}
    </div >
  )
}

export default Pokegame;

