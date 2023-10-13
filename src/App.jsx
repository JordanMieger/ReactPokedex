import { useState } from "react";
import "./App.css"
import PokemonCard from "./components/PokemonCards"
import Button from "./components/NavBar"

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
  
const [myPokemon, setMyPokemon] = useState(0)

  function indexPokemon(index){
    setMyPokemon(index);
  }
  return (
    <div>
      <Button pokemonList={pokemonList} setMyPokemon={indexPokemon}/>
      <PokemonCard pokemon={pokemonList[myPokemon]}/>
    </div>
  );
}

export default App