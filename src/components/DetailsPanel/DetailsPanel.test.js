import { render, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import DetailsPanel from './DetailsPanel';

test('Renders DetailsPanel with classname DetailsPanelHidden', async () => {
	// Mocking external dependencies
	window.MovieGuru = { GlobalCode: {} };

	render(<DetailsPanel />);
	let found = screen.getByTestId('DetailsPanel');

	expect(found).toHaveClass('DetailsPanelHidden');
});

test('Calling window.MovieGuru.GlobalCode.SetDetailsPanelClass changes ClassName of DetailsPanel', async () => {
	// Mocking external dependencies
	window.MovieGuru = { GlobalCode: {} };

	render(<DetailsPanel />);
	act(() => {
		window.MovieGuru.GlobalCode.SetDetailsPanelClass('DetailsPanel');
	});

	let found = screen.getByTestId('DetailsPanel');

	expect(found).toHaveClass('DetailsPanel');
});

test('Calling window.MovieGuru.GlobalCode.SetDetailsPanelData with undefined value', async () => {
	// Mocking external dependencies
	window.MovieGuru = { GlobalCode: {} };

	render(<DetailsPanel />);
	act(() => {
		window.MovieGuru.GlobalCode.SetDetailsPanelData(undefined);
	});

	let found = screen.getAllByText('-');

	expect(found.length).toBe(2);
});

test('Calling window.MovieGuru.GlobalCode.SetDetailsPanelData with scrambled `r31z5vz35tc43z!/7-$` value', async () => {
	// Mocking external dependencies
	window.MovieGuru = { GlobalCode: {} };

	render(<DetailsPanel />);
	act(() => {
		window.MovieGuru.GlobalCode.SetDetailsPanelData('r31z5vz35tc43z!/7-$');
	});

	let found = screen.getAllByText('-');

	expect(found.length).toBe(2);
});
