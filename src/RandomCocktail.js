import { useState , useEffect  } from 'react';
import ShowCocktail from "./ShowCocktail";

const RandomCocktail = () => {
    const [cocktailData, setCocktailData] = useState(null);

    // const handleClick = async () => {
    //     const cocktailResponse = await fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php", {header: {'content-type': 'application/json'}});
    //     const cocktailRandomData = await cocktailResponse.json();
    //     setCocktailData(cocktailRandomData);
    // }

    useEffect(() =>{
        (async () => {
            const cocktailResponse = await fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php", {header: {'content-type': 'application/json'}});
            const cocktailRandomData = await cocktailResponse.json();
            setCocktailData(cocktailRandomData);
        })();
    },[]);

    return(
        <div>
            {cocktailData ? (
                <ShowCocktail cocktail={cocktailData.drinks[0]} />
            ): (
                <h1>En Chargement</h1>
            )}
        </div>
    );
};

export default RandomCocktail;

//            <button onClick={handleClick}>Afficher une recette</button>
