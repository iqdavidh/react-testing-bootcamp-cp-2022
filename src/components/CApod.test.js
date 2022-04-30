//https://stackoverflow.com/questions/71685441/react-testing-library-gives-console-error-for-reactdom-render-in-react-18
import React from 'react';
import {render, screen, fireEvent} from '@testing-library/react';
import CApod from './CApod';

const item = {
  "date": "2022-04-17",
  "explanation": "What's that approaching? Astronauts on board the International Space Station in 2010 first saw it far in the distance. Soon it enlarged to become a dark silhouette. As it came even closer, the silhouette appeared to be a spaceship. Finally, the object revealed itself to be the Space Shuttle Endeavour, and it soon docked as expected with the Earth-orbiting space station. Pictured here, Endeavour was imaged near Earth's horizon as it approached, where several layers of the Earth's atmosphere were visible. Directly behind the shuttle is the mesosphere, which appears blue. The atmospheric layer that appears white is the stratosphere, while the orange layer is Earth's Troposphere. Together, these thin layers of air -- collectively spanning less than 2 percent of Earth's radius -- sustain us all in many ways, including providing oxygen to breath and a barrier to dangerous radiations from space. Coming up Friday: Earth Day 2022",
  "hdurl": "https://apod.nasa.gov/apod/image/2204/shuttleAtm_nasa_6048.jpg",
  "media_type": "image",
  "service_version": "v1",
  "title": "Shuttle Over Earth",
  "url": "https://apod.nasa.gov/apod/image/2204/shuttleAtm_nasa_960.jpg"
}

describe('CApod', function () {
  
  test('renders Apod date,title, explanaiton', async () => {
    
    render(<CApod apodItem={item}/>);
    
    expect(screen.getByText(item.date)).toBeInTheDocument()
    expect(screen.getByText(item.explanation)).toBeInTheDocument()
    expect(screen.getByText(item.title)).toBeInTheDocument()
    //  expect(screen.getByText(item.url)).toBeInTheDocument()
  
    
  });
  
  test('the showmodal is executed on click event', () => {
    const handleClick = jest.fn()
    render(<CApod apodItem={item} onShowModal={handleClick}/>);
    fireEvent.click(screen.getByRole("button"));
    expect(handleClick).toHaveBeenCalledTimes(1)
    
  })
  
  
});
