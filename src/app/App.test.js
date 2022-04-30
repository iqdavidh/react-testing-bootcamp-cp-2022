import { render,  screen } from "@testing-library/react";
import '@testing-library/jest-dom'
import {NameContext, NameProvider, NameConsumer} from '../react-context'

import App from './App';

describe('App', function () {
  test('renders', () => {
    render(<App />)
    expect(screen.getByText("davidh")).toBeInTheDocument();
  });
});
