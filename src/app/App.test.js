import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/NASA's picture of the day/i);
  expect(linkElement).toBeInTheDocument();
});
