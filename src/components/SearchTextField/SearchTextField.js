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
	let helper_text_state = useState('');
	let search_input_helper_text = helper_text_state[0];
	window.MovieGuru.GlobalCode.SetSearchInputHelperText = helper_text_state[1];

	return (
		<Paper id="TextFieldPaper" data-testid="TextFieldPaper" elevation={4}>
			<TextField
				id="TextField"
				data-testid="SearchTextField"
				fullWidth
				variant="filled"
				label="Please type in a movie title, then click on Search button or press Enter"
				helperText={search_input_helper_text}
				onChange={ChangeSearchValue}
				onKeyUp={SearchFieldKeyUp}
				error={!(search_input_helper_text === '')}
			/>
		</Paper>
	);
}

export default SearchTextField;
