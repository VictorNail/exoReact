const ShowArticle= (props) => {
    const article = props.currentArticle;
    const date = new Date();

    return article.date <= date &&(
        <article key={article.id}>
            <h1>{article.title}</h1>
            <h2>{article.subtitle}</h2>
            <img src={article.image} alt={article.title} aria-hidden="true" />
            <p>{article.date.toDateString()}</p>
            <p>{article.content}</p>
        </article>
    );
}

export default ShowArticle;

