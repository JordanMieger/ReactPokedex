import { useState } from "react";
import PokemonCard from "./components/PokemonCards"

const pokemonList = [
  {
      name: "Bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "Charmander",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    },
    {
      name: "Squirtle",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
    },
    {
      name: "Pikachu",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
    },
    {
      name: "Mew",
    },
  ];


function App() {
  
const [pokemonIndex, setPokemonIndex] = useState(0)

const nextPokemon = () => {

  setPokemonIndex(pokemonIndex + 1)
}
const previousPokemon = () => {
  
  setPokemonIndex(pokemonIndex -1)
}

  return (
    <div>
      <PokemonCard pokemon={pokemonList[pokemonIndex]}/>
      {pokemonIndex > 0 ? (<button onClick={previousPokemon}>Précédent</button>) : ""}
      {pokemonIndex < pokemonList.length - 1 ? (<button onClick={nextPokemon}>Suivant</button>) : ""}
    </div>
  );
}

export default App;