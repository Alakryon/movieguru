import { useState } from 'react';
import './Spinner.css';
import SpinnerImage from '../../assets/spinner.svg';

function Spinner() {
	let new_state = useState(undefined);
	let SpinnerCounter = new_state[0];
	window.MovieGuru.GlobalCode.SetSpinnerCounter = new_state[1];
	return (
		<div className="Spinner">
			<img src={SpinnerImage} className="SpinnerImage" alt="SpinnerImage" />
			<span className="SpinnerText">{SpinnerCounter ? 'Movies to parse:' : ''}</span>
			<span className="SpinnerText">{SpinnerCounter ? SpinnerCounter : ''}</span>
		</div>
	);
}

export default Spinner;
