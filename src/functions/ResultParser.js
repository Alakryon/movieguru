import Movie from '../components/Movie/Movie';
import SearchForMovieWikipedia from './SearchForMovieWikipedia';

async function ResultParser(result, target) {
	let data_to_render = [];
	if (result?.data?.searchMovies) {
		result = result.data.searchMovies;
	}
	if (Array.isArray(result)) {
		let to_parse = result.length;
		for (let index = 0; index < result.length; index++) {
			window.MovieGuru.GlobalCode.SetSpinnerText('Movie data to parse:');
			window.MovieGuru.GlobalCode.SetSpinnerCounter(to_parse);
			let movie = result[index];
			let wiki_page = await SearchForMovieWikipedia(movie);
			let tmdb_page = window.MovieGuru.GlobalData.TMDBMoviePageURL.replace('<MOVIEID>', movie.id);
			let movie_index = window.MovieGuru.GlobalCode.GenerateKey();
			data_to_render.push(<Movie key={movie_index} index={movie_index} data={{ movie, wiki: wiki_page, tmdb: tmdb_page }}></Movie>);
			to_parse--;
		}
		if (data_to_render.length === 0) {
			data_to_render = 'No results found.';
		}
	} else {
		data_to_render = 'No results found.';
	}
	window.MovieGuru.GlobalCode.SetBusyPanelClass('BusyPanelHidden');
	target(data_to_render);
}

export default ResultParser;
