import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import SetupDefaultDataStructure from './functions/SetupDefaultDataStructure';
import RootPanel from './components/RootPanel/RootPanel';

SetupDefaultDataStructure();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<RootPanel />
	</React.StrictMode>
);
