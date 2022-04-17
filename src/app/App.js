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
      
      const result = await apiClient.Apod(dateSelected);
      
      console.log(result);
      
      const stateNew = result.success
        ? {isLoaded: true, item: result.data }
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
