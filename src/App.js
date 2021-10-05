import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';
import PokemonCard from "./components/PokemonCard"

function App() {
    const [count, setCount] = useState(0);
    console.log(`Clickbutton is ${count} keer geklikt`);

    // const [pokemonData, setPokemonData] = useState({});
    //
    // useEffect(() => {
    //     async function fetchData() {
    //         try {
    //             const result = await axios.get("https://pokeapi.co/api/v2/pokemon/jigglypuff");
    //             // console.log(result.data);
    //             console.log(result.data.name);
    //             console.log(result.data.sprites.front_default);
    //             console.log(`Moves: ${result.data.moves.length}`);
    //             console.log(`Weight: ${result.data.weight}`);
    //             console.log("Abilities:")
    //             for (let i = 0; i < result.data.abilities.length; i++) {
    //                 console.log(result.data.abilities[i].ability.name);
    //             }
    //             setPokemonData(result.data);
    //         } catch (error) {
    //             console.error(error)
    //         }
    //     }
    //
    //     fetchData();
    // }, [count]);

    return (
        // <>
        //     {Object.keys(pokemonData).length > 0 &&
            <>
                <button
                    type="button"
                    onClick={() => setCount(count + 1)}
                >
                    Haal data op!
                </button>

                <PokemonCard
                    pName="jigglypuff">
                </PokemonCard>
                <PokemonCard
                    pName="ditto">
                </PokemonCard>
            </>
            // }
        // </>
    );
}

export default App;
