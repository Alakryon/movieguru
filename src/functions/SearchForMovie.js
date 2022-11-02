async function SearchForMovie(event) {
	if (window.MovieGuru.GlobalData.SearchValue !== '' && window.MovieGuru.GlobalData.SearchValue.trim().length > 0) {
		window.MovieGuru.GlobalCode.GraphQLRequest(
			window.MovieGuru.GlobalData.GraphQLURL,
			{
				query: window.MovieGuru.GlobalData.SearchMoviesQuery.replace('<MOVIETITLE>', window.MovieGuru.GlobalData.SearchValue),
			},
			window.MovieGuru.GlobalCode.SearchMoviesResultParser,
			window.MovieGuru.GlobalCode.SetResultsPanelContent
		);
	} else {
		window.MovieGuru.GlobalCode.SetSearchInputHelperText('The search field can not be empty!');
	}
}
export default SearchForMovie;
