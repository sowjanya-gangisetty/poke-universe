import Link from "next/link";
const TypesPage = async() => {
  let data;
  try {
    const response = await fetch('https://pokeapi.co/api/v2/type/');
    data = await response.json();
  } catch (error) {
    console.error('Error fetching type data:', error);
  }

  return (
    <div>
      <h2>Read about all the different Types here!</h2>
      { data.results.filter((item,index)=> index <19).map((type,index) => (
        <div key={index}> 
          <Link href={`/types/${type.name}`}>{type.name}</Link> 
        </div>
      ))}

    </div>
  );
};

export default TypesPage;