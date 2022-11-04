import { render, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import SearchTextField from './SearchTextField';

test('Renders SearchTextField', async () => {
	// Mocking external dependencies
	window.MovieGuru = { GlobalCode: {} };

	render(<SearchTextField />);
	let found = screen.getAllByLabelText('Please type in a movie title, then click on Search button or press Enter');

	expect(found.length).toBe(1);
});

test('Calling window.MovieGuru.GlobalCode.SetSearchInputHelperText with `test value`', async () => {
	// Mocking external dependencies
	window.MovieGuru = { GlobalCode: {} };

	render(<SearchTextField />);
	act(() => {
		window.MovieGuru.GlobalCode.SetSearchInputHelperText('test value');
	});

	let found = screen.getAllByText('test value');

	expect(found.length).toBe(1);
});
