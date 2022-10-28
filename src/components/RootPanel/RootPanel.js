import './RootPanel.css';
import SearchBox from '../SearchBox/SearchBox';
import ResultsPanel from '../ResultsPanel/ResultsPanel';
import BusyPanel from '../BusyPanel/BusyPanel';

function RootPanel() {
	return (
		<div className="RootPanel">
			<div id="page_title">Movie Guru</div>
			<SearchBox />
			<ResultsPanel />
			<BusyPanel />
		</div>
	);
}

export default RootPanel;
