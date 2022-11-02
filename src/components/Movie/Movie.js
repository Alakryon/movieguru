import { useState } from 'react';
import './Movie.css';
import { Paper } from '@material-ui/core';
import { Divider } from '@material-ui/core';
import { Button } from '@material-ui/core';

function Movie(props) {
	let genres_element = '-';
	if (props.data.movie.genres) {
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
	let wiki_element = 'No Wikipedia page found.';
	if (props.data.wiki.url) {
		wiki_element = (
			<a href={props.data.wiki.url} target="_blank">
				{props.data.wiki.url}
			</a>
		);
	}
	let tmdb_element = 'No TMDB page found.';
	if (props.data.tmdb) {
		tmdb_element = (
			<a href={props.data.tmdb} target="_blank">
				{props.data.tmdb}
			</a>
		);
	}
	return (
		<Paper id="MoviePaper" variant="outlined">
			<div className="title_section">
				<span className="property">Title:</span>
				{props.data.movie.name}
			</div>
			<Divider orientation="vertical" variant="middle" />
			<div className="details_section">
				<span className="property">Genre(s):</span>
				{genres_element}
				<span className="property">Score:</span>
				{props.data.movie.score}
			</div>
			<Divider orientation="vertical" variant="middle" />
			<div className="overview_section">
				<span className="property">Overview:</span>
				{props.data.movie.overview ? props.data.movie.overview : '-'}
			</div>
			<Divider orientation="vertical" variant="middle" />
			<div className="url_section">
				<span className="property">Wikipedia URL:</span>
				{wiki_element}
				<span className="property">TMDB URL:</span>
				{tmdb_element}
			</div>
		</Paper>
	);
}

export default Movie;
