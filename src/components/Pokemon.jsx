import React, {useState, useEffect} from "react";

const Pokemon = (props) => {
    
    const [pokemon, setPokemon] = useState("")

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    
    useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=807')
        .then(response => response.json())
        .then(response => setPokemon(response.results))
    }, []);

    return(
        <ul>
            {pokemon.length > 0 && pokemon.map((pokemon, i) => {
                return(<li key={i}>{capitalizeFirstLetter(pokemon.name)}</li>)
            })}
        </ul>
    )

}

export default Pokemon