import { render,  screen } from "@testing-library/react";
import App from './App';

describe('App', function () {
  test('renders learn react link', () => {
    render(<App />)
    expect(screen.getByText("davidh")).toBeInTheDocument();
  });
});
