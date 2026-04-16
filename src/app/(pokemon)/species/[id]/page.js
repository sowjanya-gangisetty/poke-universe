
const PokemonPage = async ({params}) =>{
    const {id} = await params;
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}`);
    const data = await response.json();
    
    console.log(data);
    return (
        <div>
            <p>Pokemon Name : {data.name} </p>
        </div>
    );
}
export default PokemonPage;