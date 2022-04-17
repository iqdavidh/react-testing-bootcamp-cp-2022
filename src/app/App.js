import './App.css';
import {useEffect, useState} from "react";
import CMain from "../components/CMain";

const apiClient = require('../services/NasaApiClient');

function App() {
  
  const [dateSelected, setDateSelected] = useState(null)
  const [apodState, setApodState] = useState({isLoaded: false})
  
  
  useEffect(() => {
    
    //Inititialization loading data from api
    (async () => {
      
      // const result = await apiClient.Apod(dateSelected);
      const result = {
        success: true,
        data: {
          "date": "2022-04-17",
          "explanation": "What's that approaching? Astronauts on board the International Space Station in 2010 first saw it far in the distance. Soon it enlarged to become a dark silhouette. As it came even closer, the silhouette appeared to be a spaceship. Finally, the object revealed itself to be the Space Shuttle Endeavour, and it soon docked as expected with the Earth-orbiting space station. Pictured here, Endeavour was imaged near Earth's horizon as it approached, where several layers of the Earth's atmosphere were visible. Directly behind the shuttle is the mesosphere, which appears blue. The atmospheric layer that appears white is the stratosphere, while the orange layer is Earth's Troposphere. Together, these thin layers of air -- collectively spanning less than 2 percent of Earth's radius -- sustain us all in many ways, including providing oxygen to breath and a barrier to dangerous radiations from space. Coming up Friday: Earth Day 2022",
          "hdurl": "https://apod.nasa.gov/apod/image/2204/shuttleAtm_nasa_6048.jpg",
          "media_type": "image",
          "service_version": "v1",
          "title": "Shuttle Over Earth",
          "url": "https://apod.nasa.gov/apod/image/2204/shuttleAtm_nasa_960.jpg"
        }
      }
      
      console.log(result);
      
      const stateNew = result.success
        ? {isLoaded: true, item: result.data}
        : {isLoaded: true, msgError: result.msg};
      
      setApodState(stateNew);
      
    })();
  }, [dateSelected])
  
  
  return (
    <section className="section">
      <div className="container">
        <h1 className="title has-text-centered">
          NASA's picture of the day
        </h1>
        
        <CMain appState={apodState}/>
        
        <div id="footer" className="is-small has-text-centered mt-5">
          <p>
            davidh
          </p>
          <p className="">
            Project created during Wizeline Academy React Testing Bootcamp April 2022
          </p>
        </div>
      
      
      </div>
    </section>
  );
}

export default App;
