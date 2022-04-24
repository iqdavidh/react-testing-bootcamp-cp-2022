import React, {useContext, useEffect} from 'react';
import AppContext from "../model/AppContext";
import 'react-toastify/dist/ReactToastify.css';
import 'react-calendar/dist/Calendar.css';
import Calendar from 'react-calendar';


const CModalSelDate = ({setDateSelected}) => {
  
  const modelAppState = useContext(AppContext);
  
  
  const fnClose = () => {
    modelAppState.setIsShowModal(false);
  }
  
  const onChange = (d) => {
    const day = d.getDate().toString().padStart(2, '0');
    const month = (d.getMonth() + 1).toString().padStart(2, '0');
    const y = d.getFullYear();
    
    const ymd = `${y}-${month}-${day}`;
    
    setDateSelected(ymd);
    modelAppState.setIsShowModal(false);
    
  }
  
  return (
    <>
      <div className="modal is-active">
        <div className="modal-background"
             style={{zIndex: -9999}}
             onClick={fnClose}/>
        <Calendar onChange={onChange}/>
      </div>
    </>
  );
};

export default CModalSelDate