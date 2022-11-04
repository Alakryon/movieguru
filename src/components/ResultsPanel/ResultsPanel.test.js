import { render, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import ResultsPanel from './ResultsPanel';

test('Renders ResultsPanel', async () => {
	// Mocking external dependencies
	window.MovieGuru = { GlobalCode: {} };

	render(<ResultsPanel />);
	let found = screen.getAllByText('Results will be listed here...');

	expect(found.length).toBe(1);
});

test('Calling window.MovieGuru.GlobalCode.SetResultsPanelContent with `test data`', async () => {
	// Mocking external dependencies
	window.MovieGuru = { GlobalCode: {} };

	render(<ResultsPanel />);
	act(() => {
		window.MovieGuru.GlobalCode.SetResultsPanelContent('test data');
	});

	let found = screen.getAllByText('test data');

	expect(found.length).toBe(1);
});
