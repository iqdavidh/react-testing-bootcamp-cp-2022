import React from 'react';
import {render, screen} from '@testing-library/react';
import CLoading from "./CLoading";

describe('CLoading', function () {
  it('should Render a laoding componend with text and correct ari', function () {
    render(<CLoading />)
    expect(screen.getByRole("progressbar")).toBeInTheDocument();
    expect(screen.getByText("Loading")).toBeInTheDocument();
  });
});