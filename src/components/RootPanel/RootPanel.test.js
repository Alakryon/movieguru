import { render, screen } from '@testing-library/react';
import RootPanel from './RootPanel';

test('renders learn react link', () => {
	render(<RootPanel />);
	//const linkElement = screen.getByText(/learn react/i);
	//expect(linkElement).toBeInTheDocument();
});
