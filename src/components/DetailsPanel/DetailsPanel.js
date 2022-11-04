import { useState } from 'react';
import './DetailsPanel.css';
import { Divider, Button } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

function DetailsPanel() {
	let details_state = useState('DetailsPanelHidden');
	let class_name = details_state[0];
	window.MovieGuru.GlobalCode.SetDetailsPanelClass = details_state[1];

	let movie_details_state = useState({});
	let movie_details = movie_details_state[0];
	window.MovieGuru.GlobalCode.SetDetailsPanelData = movie_details_state[1];

	let on_click = function (event) {
		event.stopPropagation();
		event.preventDefault();
		window.MovieGuru.GlobalCode.SetDetailsPanelClass('DetailsPanelHidden');
	};

	let dont_click = function (event) {
		event.stopPropagation();
		event.preventDefault();
	};

	let url_click = function (event, url) {
		event.stopPropagation();
		event.preventDefault();
		window.open(url, '_blank', 'noreferrer=true');
	};

	let title_element = '-';
	let genres_element = '-';
	let score_element = '-';
	let wiki_element = 'No Wikipedia page found.';
	let tmdb_element = 'No TMDB page found.';
	let overview_element = '-';

	if (movie_details?.movie) {
		if (movie_details.movie.name) {
			title_element = <div className="dp_value">{movie_details.movie.name}</div>;
		}

		if (movie_details.movie.genres) {
			if (Array.isArray(movie_details.movie.genres)) {
				for (let index = 0; index < movie_details.movie.genres.length; index++) {
					let genre = movie_details.movie.genres[index];
					if (genres_element === '-') {
						genres_element = genre.name;
					} else {
						genres_element += `, ${genre.name}`;
					}
				}
			}
		}
		genres_element = <div className="dp_value">{genres_element}</div>;

		if (movie_details.movie.overview) {
			overview_element = <div className="dp_value">{movie_details.movie.overview}</div>;
		}

		if (movie_details.movie.score) {
			score_element = <div className="dp_value">{movie_details.movie.score}</div>;
		}

		if (movie_details.wiki?.url) {
			wiki_element = (
				<div className="dp_value">
					<span
						className="dp_url"
						onClick={(event) => {
							url_click(event, movie_details.wiki.url);
						}}
					>
						{movie_details.wiki.url}
					</span>
				</div>
			);
		}

		if (movie_details.tmdb) {
			tmdb_element = (
				<div className="dp_value">
					<span
						className="dp_url"
						onClick={(event) => {
							url_click(event, movie_details.tmdb);
						}}
					>
						{movie_details.tmdb}
					</span>
				</div>
			);
		}
	}

	return (
		<div className={class_name} data-testid="DetailsPanel" onClick={on_click}>
			<div className="DetailsContent" onClick={dont_click}>
				<div className="row_div">
					<div className="dp_title_section">
						<span className="dp_property">Title:</span>
						{title_element}
					</div>
					<Divider id="vertical_divider" orientation="vertical" />
					<div className="dp_details_section">
						<span className="dp_property">Genre(s):</span>
						{genres_element}
						<span className="dp_property">Score:</span>
						{score_element}
					</div>
					<IconButton id="close_button" onClick={on_click}>
						<CloseIcon />
					</IconButton>
				</div>
				<Divider id="horizontal_divider" />
				<div className="dp_url_section">
					<span className="dp_property">Wikipedia URL:</span>
					{wiki_element}
					<span className="dp_property">TMDB URL:</span>
					{tmdb_element}
				</div>
				<Divider id="horizontal_divider" />
				<div className="dp_overview_section">
					<span className="dp_property">Overview:</span>
					{overview_element}
				</div>
				<Divider id="horizontal_divider" />
				<Button
					id="related_button"
					variant="contained"
					onClick={(event) => {
						window.MovieGuru.GlobalCode.SetDetailsPanelClass('DetailsPanelHidden');
						if (movie_details.movie.similar.length > 0) {
							window.MovieGuru.GlobalCode.GetMovies(event, movie_details.movie.similar);
						} else {
							window.MovieGuru.GlobalCode.SetResultsPanelContent('No related movies data found.');
						}
					}}
				>
					Show related movies ({movie_details?.movie?.similar?.length})
				</Button>
			</div>
		</div>
	);
}

export default DetailsPanel;
