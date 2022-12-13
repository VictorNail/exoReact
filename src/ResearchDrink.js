import { useState } from 'react';
import ShowCocktail from "./ShowCocktail";


const ResearchDrink = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${query}`);
    const responsesData = await response.json();
    setResults(responsesData.drinks);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Rechercher un cocktail :</label>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button type="submit">Rechercher</button>
      {results !== null ?(
        <div>
                {results.map((cocktail) => (
                    <ShowCocktail cocktail={cocktail} />
                ))}
        </div>):(
          <p> Aucun résultat pour {query}</p>
        )
       }
    </form>
  );
}

export default ResearchDrink;