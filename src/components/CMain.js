import React, {useContext, useEffect, useState} from 'react';
import CApod from "./CApod";
import CLoading from "./CLoading";
import CErrorMsg from "./CErrorMsg";
import ApodStore from "../services/ApodStore";
import apiClient from "../services/NasaApiClient";
import DateContext from "../model/DateContext";

const CMain = () => {
  
  const [apodState, setApodState] = useState({isLoaded: false})
  const modelDate = useContext(DateContext);
  
  const dateSelected=modelDate.getDate();
  
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
  
  if (!apodState.isLoaded) {
    return <CLoading/>;
  }
  
  if (apodState.msgError) {
    return <CErrorMsg msg={apodState.msgError}/>;
  }
  
  if (!apodState.item) {
    return null;
  }
  
  return <CApod apodItem={apodState.item}/>
  
  
};

export default CMain