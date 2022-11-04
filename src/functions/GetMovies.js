async function GetMovies(event, similar) {
	if (event) {
		event.stopPropagation();
		event.preventDefault();
	}
	let result = [];
	if (Array.isArray(similar)) {
		let to_query = similar.length;
		for (let index = 0; index < similar.length; index++) {
			let movie_id = similar[index].id;
			window.MovieGuru.GlobalCode.SetSpinnerText('Movie data to query:');
			window.MovieGuru.GlobalCode.SetSpinnerCounter(to_query);
			let response = await window.MovieGuru.GlobalCode.GraphQLRequest(window.MovieGuru.GlobalData.GraphQLURL, {
				query: window.MovieGuru.GlobalData.GetMovieQuery.replace('<MOVIEID>', movie_id),
			});
			if (response?.data?.data?.movie) {
				result.push(response.data.data.movie);
			}
			to_query--;
		}
	}
	window.MovieGuru.GlobalCode.ResultParser(result, window.MovieGuru.GlobalCode.SetResultsPanelContent);
}

export default GetMovies;
