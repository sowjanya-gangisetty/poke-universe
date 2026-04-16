import UserInput from "./UserInput";

const SpeciesPage  = async() => {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon-species/');
    const data = await response.json();
    console.log(data);
    return (
        <div>
            <h1>Species Page</h1>.
            <p> Species:{data.count}</p>
            <UserInput maxNumber={data.count}/>
        </div>
    );
}
export default SpeciesPage;