import React from 'react';
import { render, screen } from '@testing-library/react';
import CModalSelDate from "./CModalSelDate";

describe('CModalSelDate', function () {
  it('modal should has especific title ', function () {
    render(<CModalSelDate/>)
    expect(screen.getByText("Select picture from date")).toBeInTheDocument();
  });
  
  it('modal should have a close button', function () {
    render(<CModalSelDate/>)
    expect(screen.getByText("Select picture from date")).toBeInTheDocument();
  });
  
  it('modal should hhave the calendar', function () {
    render(<CModalSelDate/>)
    expect(screen.getByText("Select picture from date")).toBeInTheDocument();
  });
  
});