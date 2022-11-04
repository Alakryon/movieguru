import { render, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import SearchForMovie from './SearchForMovie';

jest.setTimeout(10000);

test('Calling with SearchForMovie with SearchValue of `eeeee`, checking count of results ', async () => {
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
			SetResultsPanelContent: (data) => {
				result = data;
			},
			SetSearchInputHelperText: (data) => {
				console.log(data);
			},
			GenerateKey: () => {
				return 10000;
			},
			GraphQLRequest: (url, query, parser, set_target) => {
				parser(query, set_target);
			},
			ResultParser: (result, target) => {
				target(result);
			},
		},
		GlobalData: {
			SearchMoviesQuery: 'query SearchMovies {\n  searchMovies(query: "<MOVIETITLE>") {id \n name \n score\n genres { name } \n overview\n releaseDate\n similar {id} \n} \n}',
			SearchValue: 'eeeee',
		},
	};

	await SearchForMovie();

	expect(result.query.includes('eeeee')).toBe(true);
});
