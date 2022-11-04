import { render, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import GenerateKey from './GenerateKey';

test('Checking the difference between two consecutive result from GenerateKey', async () => {
	// Mocking external dependencies
	window.MovieGuru = { GlobalCode: {}, GlobalData: { NextKey: 10000 } };

	let a = parseInt(GenerateKey());
	let b = parseInt(GenerateKey());

	expect(b - a).toBe(1);
});
