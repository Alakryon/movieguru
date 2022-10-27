import './SearchBox.css';
import { Button } from '@material-ui/core';
import SearchTextField from '../SearchTextField/SearchTextField';

function SearchBox() {
	return (
		<div className="SearchBox">
			<SearchTextField />
			<Button
				id="SearchButton"
				variant="contained"
				onClick={window.MovieGuru.GlobalCode.SearchForMovie}
			>
				Search
			</Button>
		</div>
	);
}

export default SearchBox;
