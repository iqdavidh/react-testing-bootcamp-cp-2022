import React, {useContext, useEffect, useState} from 'react';
import CApod from "./CApod";
import CLoading from "./CLoading";
import CErrorMsg from "./CErrorMsg";
import ApodStore from "../services/ApodStore";
import apiClient from "../services/NasaApiClient";
import AppContext from "../model/AppContext";
import CModalSelDate from "./CModalSelDate";

const CMain = () => {
  
  const [apodState, setApodState] = useState({isLoaded: false})
  
  
  const modelAppState = useContext(AppContext);
  
  const dateSelected = modelAppState.getDate();
  
  
  
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
  
  useEffect(()=>{
   modelAppState.setIsShowModal(false)
  }, [])
  
  
  if (!apodState.isLoaded) {
    return <CLoading/>;
  }
  
  if (apodState.msgError) {
    return <CErrorMsg msg={apodState.msgError}/>;
  }
  
  if (!apodState.item) {
    return null;
  }
  const elModal= modelAppState.getIsShowModal()? <CModalSelDate /> : null;
  
  const fn=()=>{
    console.log('x');
    modelAppState.setIsShowModal(true)
  }
  
  return (
    <div>
      <CApod apodItem={apodState.item} onShowModal={fn}/>
      {elModal}
    </div>
  );
  
  
};

export default CMain