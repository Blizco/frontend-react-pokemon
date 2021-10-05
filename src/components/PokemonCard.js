import React, {useState, useEffect} from "react";
import axios from "axios";

function PokemonCard({pName}) {
    const [pokemonData, setPokemonData] = useState({});

    useEffect(() => {
        async function fetchData() {
            try {
                const result = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pName}`);
                // console.log(result.data);
                console.log(result.data.name);
                console.log(result.data.sprites.front_default);
                console.log(`Moves: ${result.data.moves.length}`);
                console.log(`Weight: ${result.data.weight}`);
                console.log("Abilities:")
                for (let i = 0; i < result.data.abilities.length; i++) {
                    console.log(result.data.abilities[i].ability.name);
                }
                setPokemonData(result.data);
            } catch (error) {
                console.error(error)
            }
        }

        fetchData();
    }, [pName]);


    return (
        <>
            {Object.keys(pokemonData).length > 0 &&
            <article>
                <h1>{pokemonData.name}</h1>
                <img src={pokemonData.sprites.front_default} alt="Pokemonplaatje"/>
                <h2>Moves: {pokemonData.moves.length}</h2>
                <h2>Weight: {pokemonData.weight}</h2>
                <h2>Abilities:</h2>
                <ul>
                    {pokemonData.abilities.map((abilitie) => {
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