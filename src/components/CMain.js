import React from 'react';
import CApod from "./CApod";
import CLoading from "./CLoading";
import CErrorMsg from "./CErrorMsg";

const CMain = ({appState, setDateSelected}) => {
  
  if (!appState.isLoaded) {
    return <CLoading/>;
  }
  
  if (appState.msgError) {
    return <CErrorMsg msg={appState.msgError}/>;
  }
  
  if(!appState.item){
    return null;
  }
  
  return <CApod apodItem={appState.item}  setDateSelected={setDateSelected} />
  
  
};

export default CMain