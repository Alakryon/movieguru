import GenerateKey from './GenerateKey';
import CallAPI from './CallAPI';
import GraphQLRequest from './GraphQLRequest';
import SearchMoviesResultParser from './SearchMoviesResultParser';
import SearchForMovie from './SearchForMovie';

function SetupDefaultDataStructure() {
	window.MovieGuru = {
		GlobalData: {
			NextKey: 10000,
			GraphQLURL: 'https://tmdb.sandbox.zoosh.ie/dev/graphql',
			SearchInputHelperText: '',
			SearchValue: '',
			SearchMoviesQuery: `query SearchMovies {\n  searchMovies(query: \"<MOVIETITLE>\") {\n    id\n    name\n    overview\n    releaseDate\n    cast {\n      id\n      person {\n        name\n      }\n      role {\n        ... on Cast {\n          character\n        }\n      }\n    }\n  }\n}`,
		},
		GlobalCode: {
			GenerateKey: GenerateKey,
			CallAPI: CallAPI,
			GraphQLRequest: GraphQLRequest,
			SearchMoviesResultParser: SearchMoviesResultParser,
			SearchForMovie: SearchForMovie,
		},
	};
}

export default SetupDefaultDataStructure;
