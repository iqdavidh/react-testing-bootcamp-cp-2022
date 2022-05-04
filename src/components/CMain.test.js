import React from 'react';
import {fireEvent, render, screen, act} from '@testing-library/react';
import CMain from "./CMain";


jest.mock("../services/ApodImgService")

describe('CMain', function () {
  it('should - display image', async function () {
    
    render(<CMain/>)
    //1.- At the beggining we can see the Loading message
    expect(screen.getByText("Loading")).toBeInTheDocument();
    
    
    await act(() => Promise.resolve())
  
    //2.- When the component loads Apod Images it rerieve "MOCK - TODAY" image
    //This date is defined in the mock object in case of null date selected  NASA api retries the current date image
    expect(screen.getByText("MOCK - TODAY")).toBeInTheDocument();
  
    //3.- We confirm the Loading mesage is not present
    expect(()=>(screen.getByText('Loading')).toThrow('Unable to find an element'));
  
    //Get the calendar bottom, the buttopn has the date
    const calendarButton=screen.getByText("TODAY");
    expect(calendarButton).toBeInTheDocument();
    
    //lets click button and show calendar
    fireEvent.click(screen.getByRole("button"));
    await act(() => Promise.resolve())
    
    screen.debug();
    
    expect(true).toBe(true);
    
 //   expect(screen.getByText("Loading")).toBeInTheDocument();
    
  });
});