import React, { Component } from 'react';
import ArticleList from '../components/presentation/ArticleList';
import Search from '../components/presentation/Search';
import { fetchArticles } from '../services/newsApi';

export default class NewsSearch extends Component {
    state = {
        loading: true,
        articles: [],
        query: '',
    }

    async componentDidMount() {
        const articles = await fetchArticles();
        this.setState({
            loading: false,
            articles,
        });
    }

    handleQueryChange = ({ target }) => {
        this.setState({ query: target.value})
    }

    handleSubmit = async (e) => {
        e.preventDefault();

        this.setState({ loading: true});
        const articles = await fetchArticles(this.state.query);
        this.setState({
            loading: false,
            articles,
        });
    };

    render() {
        const { loading, articles, query } = this.state;

        if (loading) return <h1>Loading...</h1>;

        return (
            <>
        <Search
        query={query}
        onQueryChange={this.handleQueryChange}
        onSubmit={this.handleSubmit}

        />
        <ArticleList articles={articles}/>;
        </>
        );
    }
}
