import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';
import PokemonCard from "./components/PokemonCard"

function App() {
    const [count, setCount] = useState(0);
    const [pokemonData, setPokemonData] = useState({});

    console.log(`Clickbutton is ${count} keer geklikt`);

    useEffect(() => {
        async function fetchData() {
            try {
                const result = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=20&offset=0");
                console.log(result.data.results);
                for (let i = 0; i < result.data.results.length; i++) {
                    console.log(result.data.results[i].name);
                }
                setPokemonData(result.data.results);
            } catch (error) {
                console.error(error)
            }
        }

        fetchData();
    }, [count]);

    return (
        <>
            {Object.keys(pokemonData).length > 0 &&
            <>
                <button
                    type="button"
                    onClick={() => setCount(count + 1)}
                >
                    Haal data op!
                </button>

                <h2>{pokemonData[0].name}</h2>
                <h2>{pokemonData[1].name}</h2>
                <h2>{pokemonData[2].name}</h2>
                <h2>{pokemonData[19].name}</h2>
                {/*<PokemonCard*/}
                {/*    pName="jigglypuff">*/}
                {/*</PokemonCard>*/}
                {/*<PokemonCard*/}
                {/*    pName="ditto">*/}
                {/*</PokemonCard>*/}
            </>
            }
        </>
    );
}

export default App;
