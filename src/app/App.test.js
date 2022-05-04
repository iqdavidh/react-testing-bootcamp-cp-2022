import {render, screen} from "@testing-library/react";
import '@testing-library/jest-dom'


//jest.mock("../model/useAppState")
//jest.mock("../model/AppContext")


import App from './App';

describe('App', function () {

  test('renders', () => {
    render(<App/>)
    expect(screen.getByText("davidh")).toBeInTheDocument();
  });
});
