import GenerateKey from './GenerateKey';
import GraphQLRequest from './GraphQLRequest';
import SearchMoviesResultParser from './SearchMoviesResultParser';
import SearchForMovie from './SearchForMovie';

function SetupDefaultDataStructure() {
	window.MovieGuru = {
		GlobalData: {
			NextKey: 10000,
			GraphQLURL: 'https://tmdb.sandbox.zoosh.ie/dev/graphql',
			WikipediaSearchURL:
				'https://en.wikipedia.org/w/api.php?action=query&origin=*&format=json&prop=info|extracts|description&inprop=url&exintro&generator=search&gsrlimit=1000&gsrsearch=%27<MOVIETITLE>%27',
			SearchInputHelperText: '',
			SearchValue: '',
			SearchMoviesQuery: `query SearchMovies {\n  searchMovies(query: \"<MOVIETITLE>\") {id \n name \n score\n genres { name } \n overview\n releaseDate\n } \n}`,
			Movies: [],
		},
		GlobalCode: {
			GenerateKey: GenerateKey,
			GraphQLRequest: GraphQLRequest,
			SearchMoviesResultParser: SearchMoviesResultParser,
			SearchForMovie: SearchForMovie,
			Movies: [],
		},
	};
}

export default SetupDefaultDataStructure;
