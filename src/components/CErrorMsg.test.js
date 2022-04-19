import React from 'react';
import {render, screen} from '@testing-library/react';
import CErrorMsg from "./CErrorMsg";

describe('CErrorMsg', function () {
  it('should show an error message as an alert', function () {
    const msg = "A First random message"
    render(<CErrorMsg msg={msg}/>)
    expect(screen.getByRole("alert")).toBeInTheDocument();
    expect(screen.getByText(msg)).toBeInTheDocument();
  });
  
  
});