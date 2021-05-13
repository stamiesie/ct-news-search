import React from 'react';
import PropTypes from 'prop-types';
import styles from '/src/components/presentation/styles.css';

function Article({ title, urlToImage, author, description, url }) {
    return (
        <div className={styles.article}>
        <a href={url}>
        <div>
           <h2>{title}</h2>
           <img src={urlToImage} alt="article-image" />
           <p>{author}</p> 
           <p>{description}</p>
           {/* <a href={url}>Click For Full Story</a> */}
           <p>Click For Full Story</p>
        </div>
        </a>
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

