import React, {useContext, useEffect, useState} from 'react';
import CApod from "./CApod";
import CLoading from "./CLoading";
import CErrorMsg from "./CErrorMsg";
import ApodImgService from "../services/ApodImgService";
import AppContext from "../model/AppContext";
import CModalSelDate from "./CModalSelDate";

import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CMain = () => {
  
  const [apodState, setApodState] = useState({isLoaded: false})
  const [dateSelected, setDateSelected] = useState(null)
  
  const modelAppState = useContext(AppContext);
  
  useEffect(() => {
    
    //Inititialization loading data from api
    (async () => {
      try {
        
        if (dateSelected) {
          //DateValidation
          const isValidOrError = ApodImgService.getIsValidDate(dateSelected);
          if (isValidOrError !== true) {
            throw new Error(isValidOrError)
          }
        }
        
        const item = await ApodImgService.getItemFromDate(dateSelected);
        setApodState({item, isLoaded: true})
      } catch (e) {
        setApodState({...apodState , isLoaded: true})
        toast.error(e.message)
      }
    })();
  }, [dateSelected])
  
  useEffect(() => {
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
  const elModal = modelAppState.getIsShowModal() === true ? <CModalSelDate setDateSelected={setDateSelected}/> : null;
  
  const fn = () => {
    console.log('x');
    modelAppState.setIsShowModal(true)
  }
  
  return (
    <main>
      <CApod apodItem={apodState.item} onShowModal={fn}/>
      {elModal}
      <ToastContainer/>
    </main>
  );
  
  
};

export default CMain