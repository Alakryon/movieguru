import { render, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import BusyPanel from './BusyPanel';

test('Renders BusyPanel with classname BusyPanelHidden', async () => {
	// Mocking external dependencies
	window.MovieGuru = { GlobalCode: {} };

	let { container } = render(<BusyPanel />);
	let found = container.getElementsByClassName('BusyPanelHidden');

	expect(found.length).toBe(1);
});

test('Calling window.MovieGuru.GlobalCode.SetBusyPanelClass changes ClassName of BusyPanel', async () => {
	// Mocking external dependencies
	window.MovieGuru = { GlobalCode: {} };

	render(<BusyPanel />);
	act(() => {
		window.MovieGuru.GlobalCode.SetBusyPanelClass('BusyPanel');
	});

	let found = screen.getByTestId('BusyPanel');

	expect(found).toHaveClass('BusyPanel');
});
