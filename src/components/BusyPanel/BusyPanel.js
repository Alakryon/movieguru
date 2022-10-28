import { useState } from 'react';
import './BusyPanel.css';
import Spinner from '../Spinner/Spinner';

function BusyPanel() {
	let new_state = useState('BusyPanelHidden');
	let class_name = new_state[0];
	window.MovieGuru.GlobalCode.SetBusyPanelClass = new_state[1];
	let render_spinner = 'Spinner will be there';
	if (class_name === 'BusyPanel') {
		render_spinner = <Spinner />;
	}

	return <div className={class_name}>{render_spinner}</div>;
}

export default BusyPanel;
