import Link from "next/link";
const TypePage = async({params}) => {

    const {type} = await params;
    let data;

    try {
      const response = await fetch(`https://pokeapi.co/api/v2/type/${type}`);
      data = await response.json();

    } catch (error) {
      console.error('Error fetching type data:', error);
    }
    
    return (
      <div>
        <h2>{type} Page</h2>
        {data && data.pokemon.map((item, index) => (
          <p key={index}>
            <Link href={`/species/${item.pokemon.name}`}>
              {item.pokemon.name}
            </Link>
          </p>
        ))}
      </div>
    );
  };
  
  export default TypePage;
