import React, {useContext, useEffect, useState} from 'react';
import CApod from "./CApod";
import CLoading from "./CLoading";
import CErrorMsg from "./CErrorMsg";
import ApodImgService from "../services/ApodImgService";
import AppContext from "../model/AppContext";
import CModalSelDate from "./CModalSelDate";

const CMain = () => {
  
  const [apodState, setApodState] = useState({isLoaded: false})
  const [dateSelected, setDateSelected]=useState(null)
  
  const modelAppState = useContext(AppContext);
  
  useEffect(() => {
    
    //Inititialization loading data from api
    (async () => {
      try {
        console.log(9999)
        const item = await ApodImgService.getItemFromDate(dateSelected);
        setApodState({item, isLoaded: true})
      } catch (e) {
        setApodState({isLoaded: true, msg: e.message})
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
    <div>
      <CApod apodItem={apodState.item} onShowModal={fn}/>
      {elModal}
    </div>
  );
  
  
};

export default CMain