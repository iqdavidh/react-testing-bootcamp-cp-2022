import React from 'react';
import CMain from "../components/CMain";
import CFooter from "../components/CFooter";
import useAppState from "../model/UseAppState";
import AppContext from "../model/AppContext";

function App() {
  
  
  return (
    
    <AppContext.Provider value={useAppState()}>
      <section className="section">
        <div className="container">
          <h1 className="title has-text-centered mb-5">
            NASA's picture of the day
          </h1>
          <CMain />
          <CFooter/>
        </div>
      </section>
    </AppContext.Provider>
  );
}

export default App;
