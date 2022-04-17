import './App.css';
import {useState} from "react";
import CApod from "../components/CApod";
import CLoading from "../components/CLoading";

function App() {
  
  const [apodItem, setAPodItem] = useState(null)
  const [appState, setAppState] = useState({isLoaded: false})
  
  
  const mainElem = appState.isLoaded
    ? <CApod apodItem={apodItem}/>
    : <CLoading/>
  
  
  return (
    <section className="section">
      <div className="container">
        <h1 className="title has-text-centered">
          NASA picture of the day
        </h1>
        
        {mainElem}
        
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
