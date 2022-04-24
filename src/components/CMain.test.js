import React from 'react';
import {render, screen} from '@testing-library/react';
import CMain from "./CMain";


jest.mock("./services/ApodImgServic")

describe('CMain', function () {
  it('should - display image', function () {
 
    render(<CMain />)
  });
});