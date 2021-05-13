import React from 'react';
import PropTypes from 'prop-types';

function Article({ title, urlToImage, author, description, url }) {
    return (
        <div>
           <h2>{title}</h2>
           <img src={urlToImage} alt="article-image" />
           <p>{author}</p> 
           <p>{description}</p>
           <p>{url}</p>
        </div>
    )
}

Article.propTypes = {
    title: PropTypes.string.isRequired,
    urlToImage: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,

}

export default Article

