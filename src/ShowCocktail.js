const ShowCocktail = (props) => {

    const getIngredient = () => {
        const ingredients =[];
        for (let i=1; i <= 15; i++){
            if(props.cocktail[`strIngredient${i}`]){
                ingredients.push(props.cocktail[`strIngredient${i}`]);
            }
        }
        return ingredients;
    }

    return(
        <div>
            <h1>{props.cocktail.strDrink}</h1>
            <h2> {props.cocktail.strCategory}</h2>
            {getIngredient().map((ingredient,index)=> {
                return (
                    <div key={index}>
                        <p>{ingredient}</p>
                    </div>
                )
            })}
            <img src={props.cocktail.strDrinkThumb} alt={props.cocktail.strDrink}></img>
        </div>
    )
}

export default ShowCocktail;