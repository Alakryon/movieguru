import { useState } from 'react';
import './Movie.css';
import { Paper } from '@material-ui/core';
import { Divider } from '@material-ui/core';
import { Button } from '@material-ui/core';

function Movie(props) {
	/*let new_state = useState('Results will be listed here...');
	let content = new_state[0];
	window.MovieGuru.GlobalCode.SetResultsPanelContent = new_state[1];*/
	//console.log(props.index);
	return (
		<Paper id="MoviePaper" variant="outlined">
			<div className="data_section">
				<span className="property">Title:</span>
				{props.data.movie.name}
			</div>
			<Divider orientation="vertical" variant="middle" />
			<div className="url_section">
				<span className="property">Wikipedia URL:</span>
				{props.data.wiki.url ? props.data.wiki.url : 'No Wikipedia page found.'}
				<span className="property">IMDB URL:</span>
				{props.data.wiki.url ? props.data.wiki.url : 'No IMDB page found.'}
			</div>
			<Divider orientation="vertical" variant="middle" />
		</Paper>
	);
}

export default Movie;
