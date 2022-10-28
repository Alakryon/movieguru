import { useState } from 'react';
import './SearchTextField.css';
import { TextField } from '@material-ui/core';
import { Paper } from '@material-ui/core';

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
		<Paper id="TextFieldPaper" elevation={4}>
			<TextField
				id="TextField"
				variant="filled"
				label="Please type in a movie title, then click on Search button or press Enter"
				helperText={SearchInputHelperText}
				onChange={ChangeSearchValue}
				onKeyUp={SearchFieldKeyUp}
				error={!(SearchInputHelperText === '')}
			/>
		</Paper>
	);
}

export default SearchTextField;
