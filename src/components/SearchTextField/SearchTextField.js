import { useState } from 'react';
import { TextField } from '@material-ui/core';

function ChangeSearchValue(event) {
	window.MovieGuru.GlobalData.SearchValue = event.target.value;
	window.MovieGuru.GlobalCode.SetSearchInputHelperText('');
}

function SearchFieldKeyUp(event) {
	if (event.keyCode === 13) {
		window.MovieGuru.GlobalCode.SearchForMovie();
	}
}

function SearchTextField() {
	let new_state = useState('');
	let SearchInputHelperText = new_state[0];
	window.MovieGuru.GlobalCode.SetSearchInputHelperText = new_state[1];

	return (
		<TextField
			id="TextField"
			variant="filled"
			label="Please type in a movie title, then click on Search button or press Enter"
			helperText={SearchInputHelperText}
			onChange={ChangeSearchValue}
			onKeyUp={SearchFieldKeyUp}
		/>
	);
}

export default SearchTextField;
