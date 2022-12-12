const Articles = () =>{

    const date = new Date();


    const articles = [
        {
            title: "Titre de l'article 1",
            image: "https://www.slate.fr/sites/default/files/styles/1200x680/public/animaux_traditions_culturelles.jpg",
            subtitle: "Sous-titre de l'article 1",
            date: new Date("2021-01-01"),
            content: "Contenu de l'article 1",
        },

        {
            title: "Titre de l'article 2",
            image: "https://www.slate.fr/sites/default/files/styles/1200x680/public/animaux_traditions_culturelles.jpg",
            subtitle: "Sous-titre de l'article 2",
            date: new Date("2021-01-01"),
            content: "Contenu de l'article 2",
        },

        {
            title: "Titre de l'article 3",
            image: "https://www.slate.fr/sites/default/files/styles/1200x680/public/animaux_traditions_culturelles.jpg",
            subtitle: "Sous-titre de l'article 3",
            date: new Date("2023-01-01"),
            content: "Contenu de l'article 3",
        }
    ];

    return(
        <div>
            {articles.map((item,index)=> {
                return item.date <= date &&(
                    <div key={index}>
                        <h1>{item.title}</h1>
                        <h2>{item.subtitle}</h2>
                        <img src={item.image} aria-hidden="true" />
                        <p>{item.date.toDateString()}</p>
                        <p>{item.content}</p>
                    </div>
                );
            })}
        </div>
    )
}
export default Articles;

