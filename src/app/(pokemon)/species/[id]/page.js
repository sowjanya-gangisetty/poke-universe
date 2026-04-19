
const PokemonPage = async ({params}) =>{



    const {id} = await params;
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const data = await response.json();
    
    console.log(data);
    return (
        <div>
            <h3>Pokemon Name : {data.name} </h3>
            <img src={data.sprites.front_default} alt={data.name} />
        </div>
    );
}
export default PokemonPage;