import React, { Component } from 'react';
import ArticleList from '../components/presentation/ArticleList';
import { fetchArticles } from '../services/newsApi';

export default class NewsSearch extends Component {
    state = {
        loading: true,
        articles: [],
        query: 'puppies',
    }

    async componentDidMount() {
        const articles = await fetchArticles();
        this.setState({
            loading: false,
            articles,
        });
    }
    render() {
        const { loading, articles } = this.state;

        if (loading) return <h1>Loading...</h1>;

        return <ArticleList articles={articles}/>;
    }
}
