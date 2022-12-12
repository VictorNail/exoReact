import { useState } from 'react';

const RandomCocktail = () => {
    const [cocktailData, setCocktailData] = useState(null);

    const handleClick = async () => {
        const cocktailResponse = await fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php", {header: {'content-type': 'application/json'}});
        const cocktailRandomData = await cocktailResponse.json();
        console.log(cocktailRandomData);
        setCocktailData(cocktailRandomData);
    }

    return(
        <div>
            <button onClick={handleClick}>Afficher une recette</button>
            {cocktailData ? (
                <h1>{cocktailData.drinks[0].strDrink}</h1>
            ): (
                <h1>En Chargement</h1>
            )}
        </div>
    );
};

export default RandomCocktail;