import React from 'react';
import { render } from '@testing-library/react';
import App from './app';

test('renders learn react link', () => {
  const { app } = render(<App />);
  expect(app).not.toBe(null);
  // const linkElement = app(/learn react/i);
  // expect(linkElement).toBeInTheDocument();
});
