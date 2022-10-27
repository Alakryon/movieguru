function SearchMoviesResultParser(result, target) {
	let DataToRender = [];
	result.data.searchMovies.forEach((movie) => {
		DataToRender.push(
			<p key={window.MovieGuru.GlobalCode.GenerateKey()}>{movie.name}</p>
		);
	});
	target(DataToRender);
}

export default SearchMoviesResultParser;
