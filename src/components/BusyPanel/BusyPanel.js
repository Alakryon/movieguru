import { useState } from 'react';
import './BusyPanel.css';
import Spinner from '../Spinner/Spinner';

function BusyPanel() {
	let new_state = useState('BusyPanelHidden');
	let class_name = new_state[0];
	window.MovieGuru.GlobalCode.SetBusyPanelClass = new_state[1];
	let render_spinner = <Spinner />;
	return (
		<div className={class_name} data-testid="BusyPanel">
			{render_spinner}
		</div>
	);
}

export default BusyPanel;
