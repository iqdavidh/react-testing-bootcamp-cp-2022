import React from 'react';
import {fireEvent, render, screen} from '@testing-library/react';
import CModalSelDate from "./CModalSelDate";

describe('CModalSelDate', function () {
  
 
  it('when click on date trigger evens setDateSelected', function () {
    
    const handleSelect = jest.fn()
    render(<CModalSelDate setDateSelected={handleSelect}/>)
  
    fireEvent.click(screen.getByText("15"));
    
    expect(handleSelect).toHaveBeenCalledTimes(1)
    
  });
  
  
});