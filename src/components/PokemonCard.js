import React from "react";

function PokemonCard ({pData}) {

    return (

        <article>
            <h1>{pData.name}</h1>
            <img src={pData.sprites.front_default} alt="Pokemonplaatje" />
            <h2>Moves: {pData.moves.length}</h2>
            <h2>Weight: {pData.weight}</h2>
            <h2>Abilities:</h2>
            <ul>
                {pData.abilities.map((abilitie) => {
                    return <li key={abilitie.slot}>
                        {abilitie.ability.name}
                    </li>
                })}
            </ul>
        </article>
    )
}



export default PokemonCard;