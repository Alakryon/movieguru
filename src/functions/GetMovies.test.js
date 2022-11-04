import { render, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import GetMovies from './GetMovies';

test('Calling GetMovies with undefined, [{id:550}] as test parameters, checking count of results ', async () => {
	let result = undefined;

	// Mocking external dependencies
	window.MovieGuru = {
		GlobalCode: {
			SetSpinnerText: () => {},
			SetSpinnerCounter: () => {},
			ResultParser: (data) => {
				result = data;
			},
			GraphQLRequest: () => {
				return { data: { data: { movie: 'test data' } } };
			},
		},
		GlobalData: {
			GetMovieQuery: 'query getMovie {\n movie (id: <MOVIEID>) {id \n name \n score \n genres { name } \n overview \n releaseDate \n similar {id} \n} \n}',
		},
	};

	await GetMovies(undefined, [{ id: 550 }]);

	expect(result.length).toBe(1);
});
