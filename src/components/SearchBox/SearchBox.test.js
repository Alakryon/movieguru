import { render, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import SearchBox from './SearchBox';

test('Renders SearchBox', async () => {
	// Mocking external dependencies
	window.MovieGuru = { GlobalCode: {} };

	render(<SearchBox />);
	let found = screen.getByTestId('SearchBox');

	expect(found).toHaveClass('SearchBox');
});

test('Renders Search Button', async () => {
	// Mocking external dependencies
	window.MovieGuru = { GlobalCode: {} };

	render(<SearchBox />);
	let found = screen.getAllByText('Search');

	expect(found.length).toBe(1);
});
