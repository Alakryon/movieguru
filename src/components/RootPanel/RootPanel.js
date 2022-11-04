import './RootPanel.css';
import SearchBox from '../SearchBox/SearchBox';
import ResultsPanel from '../ResultsPanel/ResultsPanel';
import BusyPanel from '../BusyPanel/BusyPanel';
import DetailsPanel from '../DetailsPanel/DetailsPanel';

function RootPanel() {
	return (
		<div className="RootPanel">
			<div id="page_title">Movie Guru</div>
			<SearchBox />
			<ResultsPanel />
			<DetailsPanel />
			<BusyPanel />
		</div>
	);
}

export default RootPanel;
