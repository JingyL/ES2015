import React from 'react';
import Pokecard from "./pokecard";
import "./pokedex.css";

function Pokedex(props) {
    return (
        <div className="Pokedex">
        <h2 className="Pokedex-title">Pokedex</h2>
        <div className="Pokedex-cards">
            {props.pokemons.map(p => (
                <Pokecard
                    key={p.id}
                    id={p.id}
                    name={p.name}
                    type={p.type}
                    exp={p.base_experience}
                />
            ))}
        </div>
        </div>

    )
}

export default Pokedex;


