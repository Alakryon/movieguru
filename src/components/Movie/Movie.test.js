import { render, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import Movie from './Movie';

test('Renders Movie without props', async () => {
	render(<Movie />);
	let found = screen.getAllByText('-');

	expect(found.length).toBe(3);
});

test('Renders Movie with {} as props', async () => {
	render(<Movie data={{}} />);
	let found = screen.getAllByText('-');

	expect(found.length).toBe(3);
});

test('Renders Movie with object containing scrambled values as props', async () => {
	render(<Movie data={{ movie: 'frqgrqfieojw-.qife', wikvi: 'fggg-,()aga', tmdb: 'fggg-,fwrefgwew()awga' }} />);
	let found = screen.getAllByText('-');

	expect(found.length).toBe(3);
});
