import { render, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import SetupDefaultDataStructure from './SetupDefaultDataStructure';

test('Checking the default values set up after executing SetupDefaultDataStructure()', async () => {
	SetupDefaultDataStructure();

	expect(window.MovieGuru.GlobalData.NextKey).toBe(10000);
});
