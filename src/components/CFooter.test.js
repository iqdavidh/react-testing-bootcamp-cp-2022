import React from 'react';
import { render, screen } from '@testing-library/react';
import CFooter from "./CFooter";

describe('CFooter', function () {
  it('Must containing the message (readme )', function () {
    render(<CFooter/>);
    const text="Project created during Wizeline Academy React Testing Bootcamp";
    expect(screen.getByText(text)).toBeInTheDocument();
  });
});