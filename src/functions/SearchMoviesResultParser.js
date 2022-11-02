import Movie from '../components/Movie/Movie';
import SearchForMovieWikipedia from './SearchForMovieWikipedia';
//import SearchForMovieIMDB from './SearchForMovieIMDB';

async function SearchMoviesResultParser(result, target) {
	let DataToRender = [];
	let ToParse = result.data.searchMovies.length;
	if (result.data.searchMovies.length > 0) {
		for (let index = 0; index < result.data.searchMovies.length; index++) {
			window.MovieGuru.GlobalCode.SetSpinnerCounter(ToParse);
			let movie = result.data.searchMovies[index];
			let wiki_page = await SearchForMovieWikipedia(movie);
			let tmdb_page = `https://www.themoviedb.org/movie/${movie.id}`; //-${movie.name.toLowerCase().split(' ').join('-')}`;
			let movie_index = window.MovieGuru.GlobalCode.GenerateKey();
			DataToRender.push(<Movie key={movie_index} index={movie_index} data={{ movie, wiki: wiki_page, tmdb: tmdb_page }}></Movie>);
			ToParse--;
		}
	} else {
		DataToRender = 'No results found.';
	}
	window.MovieGuru.GlobalCode.SetSpinnerCounter(undefined);
	window.MovieGuru.GlobalCode.SetBusyPanelClass('BusyPanelHidden');
	target(DataToRender);
}

export default SearchMoviesResultParser;
