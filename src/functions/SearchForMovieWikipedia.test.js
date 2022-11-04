import { render, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import SearchForMovieWikipedia from './SearchForMovieWikipedia';

jest.setTimeout(10000);

test('Calling with SearchForMovieWikipedia with test parameters, checking pageid in result', async () => {
	// Mocking external dependencies
	window.MovieGuru = {
		GlobalCode: {
			SetSpinnerText: () => {},
			SetSpinnerCounter: () => {},
			SetBusyPanelClass: () => {},
		},
		GlobalData: {
			WikipediaSearchURL:
				'https://en.wikipedia.org/w/api.php?action=query&origin=*&format=json&prop=info|extracts|description&inprop=url&exintro&generator=search&gsrlimit=1000&gsrsearch=%27<MOVIETITLE>%27',
			TMDBMoviePageURL: `https://www.themoviedb.org/movie/<MOVIEID>`,
		},
	};

	let result = await SearchForMovieWikipedia({ name: 'Fight Club', id: 550, releaseDate: '1999-10-15T00:00:00.000Z' });

	expect(result.pageid).toBe('1009041');
});
