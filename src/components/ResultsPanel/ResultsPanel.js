import { useState } from 'react';
import './ResultsPanel.css';

function ResultsPanel() {
	let new_state = useState('Results will be listed here...');
	let content = new_state[0];
	window.MovieGuru.GlobalCode.SetResultsPanelContent = new_state[1];

	return <div className="ResultsPanel">{content}</div>;
}

export default ResultsPanel;
