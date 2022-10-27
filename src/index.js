import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import RootPanel from './components/RootPanel/RootPanel';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<RootPanel />
	</React.StrictMode>
);
