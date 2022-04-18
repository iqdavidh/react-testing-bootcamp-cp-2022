import {useEffect, useState} from "react";
import CMain from "../components/CMain";
import CFooter from "../components/CFooter";
import apiClient from "../services/NasaApiClient";
import ApodStore from "../services/ApodStore";
import useDate from "../model/UseDate";
import DateContext from "../model/DateContext";

function App() {
  
  const [dateSelected, setDateSelected] = useState(null)
  const [apodState, setApodState] = useState({isLoaded: false})
  
  useEffect(() => {
    
    //Inititialization loading data from api
    (async () => {
      
      const apodCache = ApodStore.getItem(dateSelected);
      
      if (!apodCache) {
        const result = await apiClient.Apod(dateSelected);
        
        const stateNew = result.success
          ? {isLoaded: true, item: result.data}
          : {isLoaded: true, msgError: "There was an error, please try again. " + result.msg};
        
        if (result.success) {
          ApodStore.setItem(result.data);
        }
        
        setApodState(stateNew);
      }
      
      
    })();
  }, [dateSelected])
  
  
  return (
    
    <DateContext.Provider value={useDate()}>
      <section className="section">
        <div className="container">
          
          <h1 className="title has-text-centered mb-5">
            NASA's picture of the day
          </h1>
          
          <CMain appState={apodState} setDateSelected={setDateSelected}/>
          
          <CFooter/>
        
        </div>
      </section>
    </DateContext.Provider>
  );
}

export default App;
