import { useState } from 'react';
import ShowCocktail from "./ShowCocktail";


const ListCocktails = () => {

    const [cocktailData, setCocktailData] = useState([]);

    (async () => {
        const cocktailResponse = await fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=", {header: {'content-type': 'application/json'}});
        const cocktailRandomData = await cocktailResponse.json();
        setCocktailData(cocktailRandomData.drinks);
    })();

    return(
        <div>
            {cocktailData.map((cocktail)=>{
                return (
                    <ShowCocktail cocktail={cocktail}/>
                )
            })}
        </div>
    )
}

export default ListCocktails;
