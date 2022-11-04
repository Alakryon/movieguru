import { render, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import ResultParser from './ResultParser';

jest.setTimeout(10000);

test('Calling with ResultParser with test parameters, checking count of results ', async () => {
	let result = undefined;

	let target = (data) => {
		result = data;
	};

	// Mocking external dependencies
	window.MovieGuru = {
		GlobalCode: {
			SetSpinnerText: () => {},
			SetSpinnerCounter: () => {},
			SetBusyPanelClass: () => {},
			GenerateKey: () => {
				return 10000;
			},
		},
		GlobalData: {
			GraphQLURL: 'https://tmdb.sandbox.zoosh.ie/dev/graphql',
			GetMovieQuery: 'query getMovie {\n movie (id: <MOVIEID>) {id \n name \n score \n genres { name } \n overview \n releaseDate \n similar {id} \n} \n}',
			WikipediaSearchURL:
				'https://en.wikipedia.org/w/api.php?action=query&origin=*&format=json&prop=info|extracts|description&inprop=url&exintro&generator=search&gsrlimit=1000&gsrsearch=%27<MOVIETITLE>%27',
			TMDBMoviePageURL: `https://www.themoviedb.org/movie/<MOVIEID>`,
		},
	};

	await ResultParser([{ name: 'Fight Club', id: 550, releaseDate: '1999-10-15T00:00:00.000Z' }], target);

	expect(result.length).toBe(1);
});
