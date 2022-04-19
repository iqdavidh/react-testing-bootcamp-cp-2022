import React from "react";

//import your function component and render, screen functions
import { render,  screen } from "@testing-library/react";
import App from './App';

test('renders learn react link', () => {
  render(<App />)
  expect(screen.getByText("davidh")).toBeInTheDocument();
  
});
