import { useState } from 'react';
import './Spinner.css';
import SpinnerImage from '../../assets/spinner.svg';

function Spinner() {
	let counter_state = useState('1');
	let spinner_counter = counter_state[0];
	window.MovieGuru.GlobalCode.SetSpinnerCounter = counter_state[1];
	let text_state = useState('Executing query:');
	let spinner_text = text_state[0];
	window.MovieGuru.GlobalCode.SetSpinnerText = text_state[1];
	return (
		<div className="Spinner">
			<img src={SpinnerImage} className="SpinnerImage" alt="SpinnerImage" />
			<span className="SpinnerText">{spinner_text}</span>
			<span className="SpinnerText">{spinner_counter}</span>
		</div>
	);
}

export default Spinner;
