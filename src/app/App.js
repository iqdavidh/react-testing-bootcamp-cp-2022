import {useEffect, useState} from "react";
import CMain from "../components/CMain";
import CFooter from "../components/CFooter";
import useDate from "../model/UseDate";
import DateContext from "../model/DateContext";

function App() {
  
  
  
  return (
    
    <DateContext.Provider value={useDate()}>
      <section className="section">
        <div className="container">
          
          <h1 className="title has-text-centered mb-5">
            NASA's picture of the day
          </h1>
          
          <CMain />
          
          <CFooter/>
        
        </div>
      </section>
    </DateContext.Provider>
  );
}

export default App;
