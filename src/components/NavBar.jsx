import PokemonCard from "./PokemonCards"
import {useState} from "react";

function Button({pokemonList, setMyPokemon}) {
    return (
        <>
            {pokemonList.map((pokemon, index) => (
                <button key={pokemon.name} onClick={() => setMyPokemon(index)}>
                    {pokemon.name}
                </button>

            ))}
        </>
    )
}
export default Button