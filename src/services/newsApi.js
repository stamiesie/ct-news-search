export const fetchArticles = async (query) => {
    const res = await fetch(`https://newsapi.org/v2/everything?q=${query}&apiKey=9ee504f522514922935c7d033e125145`);
    const { articles } = await res.json();

    return articles.map((article) => ({
        title: article.title,
        urlToImage: article.urlToImage,
        author: article.author,
        description: article.description,
        url: article.url,
    }));
};