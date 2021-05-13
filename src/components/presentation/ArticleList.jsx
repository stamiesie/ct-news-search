import React from 'react';
import PropTypes from 'prop-types';
import Article from './Article';

function ArticleList({ articles }) {
    return (
        <ul aria-label="articles">
            {articles.map((article) => (
                <li key={`${article.title}-${article.url}`}>
                    <Article 
                    title={article.title}
                    urlToImage={article.urlToImage}
                    author={article.author}
                    description={article.description}
                    url={article.url}
                    />
                </li>
            ))}
            
        </ul>
    )
}

ArticleList.propTypes = {
articles: PropTypes.arrayOf(
    PropTypes.shape({
        title: PropTypes.string.isRequired,
        urlToImage: PropTypes.string.isRequired,
        author: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
    })
)
}

export default ArticleList;

