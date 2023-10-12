function Button({next, previous, pokemonIndex, pokemonList}) {
    return (
        <>
            {pokemonIndex > 0 ? (<button onClick={previous}>Précédent</button>) : ""}
            {pokemonIndex < pokemonList.length - 1 ? (<button onClick={next}>Suivant</button>) : ""}
        </>
    )
}
export default Button