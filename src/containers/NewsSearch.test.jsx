import React from 'react';
import { render, screen } from '@testing-library/react';
import NewsSearch from './NewsSearch';

describe( 'NewSearch Container', () => {
    it('Displays a list of news articles by search', async() => {
        render(<NewsSearch />);

        screen.getByText('Loading...');

        const ul = await screen.findByRole('list', {name: articles});
        expect(ul).not.toBeEmptyDOMElement();
    });
});