import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';
import PokemonCard from "./components/PokemonCard"

function App() {
    const [pokemonData, setPokemonData] = useState([]);
    const [urlPokemonDeck, setUrlPokemonDeck] = useState('https://pokeapi.co/api/v2/pokemon?offset=0&limit=20');

    useEffect(() => {
        async function fetchData() {
            try {
                const result = await axios.get(urlPokemonDeck);
                setPokemonData(result.data);
            } catch (error) {
                console.error(error)
            }
        }
        fetchData();
    }, [urlPokemonDeck]);

    return (
        <>
            {Object.keys(pokemonData).length > 0 &&
            <>
                <button
                    type="button" disabled={pokemonData.previous === null}
                    onClick={() => setUrlPokemonDeck(pokemonData.previous)}
                >
                    Vorige
                </button>

                <button
                    type="button" disabled={pokemonData.next === null}
                    onClick={() => setUrlPokemonDeck(pokemonData.next)}
                >
                    Volgende
                </button>

                <ul>
                    {pokemonData.results.map((pokemon) => {
                    return <li key={pokemon.name} >
                        <PokemonCard
                            pName={pokemon.name}>
                        </PokemonCard>
                    </li>
                    })}
                </ul>
            </>
            }
        </>
    );
}

export default App;
