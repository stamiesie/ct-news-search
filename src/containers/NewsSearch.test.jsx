import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import NewsSearch from './NewsSearch';
import userEvent from '@testing-library/user-event';

describe( 'NewSearch Container', () => {
    it('Displays a list of news articles by search', async() => {
        render(<NewsSearch />);

        screen.getByText('Loading...');

        const ul = await screen.findByRole('list', { name: 'articles' });
        expect(ul).not.toBeEmptyDOMElement();

        const input = await screen.getByPlaceholderText('search news');
        userEvent.type(input, 'Biden');

        const submitButton = await screen.findByRole('button', {name: 'get-news'});
        userEvent.click(submitButton);

        return waitFor(() => {
            const articles = screen.getAllByText('Biden', {exact: false });
            expect(articles).not.toHaveLength(0);
        });
    });
});