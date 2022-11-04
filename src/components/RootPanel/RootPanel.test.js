import { render, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import RootPanel from './RootPanel';

test('Renders DetailsPanel with classname DetailsPanelHidden', async () => {
	// Mocking external dependencies
	window.MovieGuru = { GlobalCode: {} };

	render(<RootPanel />);
	let found = screen.getAllByText('Movie Guru');

	expect(found.length).toBe(1);
});
