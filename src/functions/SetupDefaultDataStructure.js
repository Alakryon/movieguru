import GenerateKey from './GenerateKey';
import GraphQLRequest from './GraphQLRequest';
import ResultParser from './ResultParser';
import SearchForMovie from './SearchForMovie';
import GetMovies from './GetMovies';

function SetupDefaultDataStructure() {
	window.MovieGuru = {
		GlobalData: {
			NextKey: 10000,
			GraphQLURL: 'https://tmdb.sandbox.zoosh.ie/dev/graphql',
			WikipediaSearchURL:
				'https://en.wikipedia.org/w/api.php?action=query&origin=*&format=json&prop=info|extracts|description&inprop=url&exintro&generator=search&gsrlimit=1000&gsrsearch=%27<MOVIETITLE>%27',
			TMDBMoviePageURL: `https://www.themoviedb.org/movie/<MOVIEID>`,
			SearchValue: '',
			SearchMoviesQuery: 'query SearchMovies {\n  searchMovies(query: "<MOVIETITLE>") {id \n name \n score\n genres { name } \n overview\n releaseDate\n similar {id} \n} \n}',
			GetMovieQuery: 'query getMovie {\n movie (id: <MOVIEID>) {id \n name \n score \n genres { name } \n overview \n releaseDate \n similar {id} \n} \n}',
		},
		GlobalCode: {
			GenerateKey,
			GraphQLRequest,
			ResultParser,
			SearchForMovie,
			GetMovies,
		},
	};
}

export default SetupDefaultDataStructure;
