import './Movie.css';
import { Paper } from '@material-ui/core';
import { Divider } from '@material-ui/core';

function Movie(props) {
	let click_handler = function (event) {
		event.stopPropagation();
		event.preventDefault();
		window.MovieGuru.GlobalCode.SetDetailsPanelData(props.data);
		window.MovieGuru.GlobalCode.SetDetailsPanelClass('DetailsPanel');
	};

	let title_element = '-';
	let genres_element = '-';
	let score_element = '-';

	if (props?.data?.movie?.name) {
		title_element = props.data.movie.name;
	}

	if (props?.data?.movie?.genres) {
		if (Array.isArray(props.data.movie.genres)) {
			for (let index = 0; index < props.data.movie.genres.length; index++) {
				let genre = props.data.movie.genres[index];
				if (genres_element === '-') {
					genres_element = genre.name;
				} else {
					genres_element += `, ${genre.name}`;
				}
			}
		}
	}

	if (props?.data?.movie?.score) {
		score_element = props.data.movie.score;
	}

	return (
		<Paper id="MoviePaper" data-testid="Movie" variant="outlined">
			<div className="title_section">
				<span className="property">Title:</span>
				{title_element}
			</div>
			<Divider orientation="vertical" variant="middle" flexItem />
			<div className="genre_section">
				<span className="property">Genre(s):</span>
				{genres_element}
			</div>
			<Divider orientation="vertical" variant="middle" flexItem />
			<div className="score_section">
				<span className="property">Score:</span>
				{score_element}
			</div>
			<span className="clickable" onClick={click_handler}></span>
		</Paper>
	);
}

export default Movie;
