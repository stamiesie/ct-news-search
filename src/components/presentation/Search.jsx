import React from 'react';
import PropTypes from 'prop-types';

const Search= ({ query, onQueryChange, onSubmit }) => (
        <form onSubmit={onSubmit}>
            <label htmlFor="news-search">News Search </label>
            <input
            placeholder="search news"
            id="news-search"
            type="text"
            value={query}
            onChange={onQueryChange}
           />
           <button aria-label="get-news">Submit</button>
        </form>
);


Search.propTypes = {
query: PropTypes.string.isRequired,
onQueryChange: PropTypes.func.isRequired,
}

export default Search;

