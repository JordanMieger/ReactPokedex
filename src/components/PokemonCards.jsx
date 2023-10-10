

function PokemonCard(props) {
    console.log(props)
    const { pokemon } = props;
    return (
        <figure>
            <p>{pokemon.imgSrc === undefined ?"???" : <img src={pokemon.imgSrc} alt={pokemon.name}/>}</p>
        <figcaption>{pokemon.name}</figcaption></figure>
        )
    }

    export default PokemonCard;
    