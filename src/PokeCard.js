import React from "react";
import "./PokeCard.css";

function PokeCard({ id, name, type, base_experience }) {
  return (
    <div className="PokeCard">
      <h3 className="PokeCard-name">{name}</h3>
      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png.`}
        alt="poke-card"
        className="PokeCard-image"
      />
      <div className="PokeCard-type">type: {type}</div>
      <div className="PokeCard-base">EXP: {base_experience}</div>
    </div>
  );
}
export default PokeCard;
