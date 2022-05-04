import React from 'react';
import {fireEvent, render, screen, act} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import CMain from "./CMain";


jest.mock("../services/ApodImgService")

describe('CMain', function () {
  it('should - display image', async function () {
    const user = userEvent.setup()
    
    render(<CMain/>)
    //1.- At the beggining we can see the Loading message
    expect(screen.getByText("Loading")).toBeInTheDocument();
    
    
    await act(() => Promise.resolve())
  
    //2.- When the component loads,  Apod Images service return  "MOCK - TODAY" image
    //This date is defined in the mock object. In case of null date selected,  NASA apis retrives the current date image
    expect(screen.getByText("MOCK - TODAY")).toBeInTheDocument();
  
    //3.- We confirm the Loading mesage is not present
    expect(()=>(screen.getByText('Loading')).toThrow('Unable to find an element'));
  
    //Get the calendar bottom, the buttopn has the date
    const calendarButton=screen.getByText("TODAY");
    expect(calendarButton).toBeInTheDocument();
  
    user.click(calendarButton);
    await act(() => Promise.resolve())
    //The problem is : the button shows a modal window that fills the DOM
    
    
    //document.getElementsByClassName("button")[0].click()
    screen.debug();
    
    
 //   expect(screen.getByText("Loading")).toBeInTheDocument();
    
  });
});