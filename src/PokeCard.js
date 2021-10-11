import React from "react";
import "./PokeCard.css";

const BASE_IMG_URL = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"

/** Creates a pokecard for pokemon, props are id, name, type, base_experience */
function PokeCard({ id, name, type, base_experience }) {
  return (
    <div className="PokeCard">
      <h3 className="PokeCard-name">{name}</h3>
      <img
        src={`${BASE_IMG_URL}${id}.png`}
        alt="poke-card" className="PokeCard-image"
      />
      <div className="PokeCard-type">Type: {type}</div>
      <div className="PokeCard-base">EXP: {base_experience}</div>
    </div>
  );
}
export default PokeCard;
