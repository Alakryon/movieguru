import { useState } from 'react';
import './ResultsPanel.css';
import { Paper } from '@material-ui/core';

function ResultsPanel() {
	let new_state = useState('Results will be listed here...');
	let content = new_state[0];
	window.MovieGuru.GlobalCode.SetResultsPanelContent = new_state[1];

	return (
		<Paper id="ResultsPaper" elevation={4}>
			{content}
		</Paper>
	);
}

export default ResultsPanel;
