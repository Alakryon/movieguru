import { render, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import Spinner from './Spinner';

test('Renders Spinner', async () => {
	// Mocking external dependencies
	window.MovieGuru = { GlobalCode: {} };

	render(<Spinner />);
	let found = screen.getAllByText('Executing query:');

	expect(found.length).toBe(1);
});

test('Calling window.MovieGuru.GlobalCode.SetSpinnerText with `test value`', async () => {
	// Mocking external dependencies
	window.MovieGuru = { GlobalCode: {} };

	render(<Spinner />);
	act(() => {
		window.MovieGuru.GlobalCode.SetSpinnerText('test value');
	});

	let found = screen.getAllByText('test value');

	expect(found.length).toBe(1);
});
