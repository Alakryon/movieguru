import { render, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import GraphQLRequest from './GraphQLRequest';

jest.setTimeout(10000);

test('Calling with GraphQLRequest with test parameters, checking count of results ', async () => {
	// Mocking external dependencies
	window.MovieGuru = {
		GlobalCode: {
			SetSpinnerText: () => {},
			SetSpinnerCounter: () => {},
			SetBusyPanelClass: () => {},
			ResultParser: (data) => {
				result = data;
			},
			GraphQLRequest: () => {
				return { data: { data: { movie: 'test data' } } };
			},
		},
		GlobalData: {
			GraphQLURL: 'https://tmdb.sandbox.zoosh.ie/dev/graphql',
			GetMovieQuery: 'query getMovie {\n movie (id: <MOVIEID>) {id \n name \n score \n genres { name } \n overview \n releaseDate \n similar {id} \n} \n}',
		},
	};

	let result = await GraphQLRequest(window.MovieGuru.GlobalData.GraphQLURL, {
		query: window.MovieGuru.GlobalData.GetMovieQuery.replace('<MOVIEID>', 550),
	});

	expect(result.data.data.movie.id).toBe('550');
});
