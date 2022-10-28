import Movie from '../components/Movie/Movie';
import SearchForMovieWikipedia from './SearchForMovieWikipedia';
import SearchForMovieIMDB from './SearchForMovieIMDB';

async function SearchMoviesResultParser(result, target) {
	let DataToRender = [];
	if (result.data.searchMovies.length > 0) {
		for (let index = 0; index < result.data.searchMovies.length; index++) {
			let movie = result.data.searchMovies[index];
			let wiki_page = await SearchForMovieWikipedia(movie);
			let imdb_page = await SearchForMovieIMDB(movie);
			let movie_index = window.MovieGuru.GlobalCode.GenerateKey();
			DataToRender.push(<Movie key={movie_index} index={movie_index} data={{ movie, wiki: wiki_page }}></Movie>);
		}
	} else {
		DataToRender = 'No results found.';
	}
	window.MovieGuru.GlobalCode.SetBusyPanelClass('BusyPanelHidden');
	target(DataToRender);
}

export default SearchMoviesResultParser;
