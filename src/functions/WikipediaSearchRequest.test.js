import { render, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import WikipediaSearchRequest from './WikipediaSearchRequest';

jest.setTimeout(10000);

test('Calling with WikipediaSearchRequest with test parameters, checking result', async () => {
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
			//TMDBMoviePageURL: `https://www.themoviedb.org/movie/<MOVIEID>`,
		},
	};

	let result = await WikipediaSearchRequest(window.MovieGuru.GlobalData.WikipediaSearchURL.replace('<MOVIETITLE>', 'Fight Club'));

	expect(result.data.query.pages).toBeDefined();
});
