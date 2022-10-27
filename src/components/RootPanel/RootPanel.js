import './RootPanel.css';
import SearchBox from '../SearchBox/SearchBox';
import ResultsPanel from '../ResultsPanel/ResultsPanel';

function RootPanel() {
	return (
		<div className="RootPanel">
			<div id="page_title">Movie Guru</div>
			<SearchBox />
			<ResultsPanel />
		</div>
	);
}

export default RootPanel;
