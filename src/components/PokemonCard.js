import React, {useState, useEffect} from "react";
import axios from "axios";

function PokemonCard({ pName}) {
    const [pData, setPData] = useState({});

    useEffect(() => {
        async function fetchData() {
            try {
                const result = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pName}`);
                setPData(result.data);
            } catch (error) {
                console.error(error)
            }
        }
        if (pName) {
            fetchData();
        }
    }, [pName]);


    return (
        <>
            {Object.keys(pData).length > 0 &&
            <article>
                <h1>{pData.name}</h1>
                <img src={pData.sprites.front_default} alt="Pokemonplaatje"/>
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
            }
        </>
    );
}

export default PokemonCard;