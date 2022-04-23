import React, {useContext, useEffect} from 'react';
import AppContext from "../model/AppContext";
import bulmaCalendar from 'bulma-calendar/dist/js/bulma-calendar.min';
import "bulma-calendar/dist/css/bulma-calendar.min.css"
import './cdateselector.css';
import 'react-toastify/dist/ReactToastify.css';
import {toast, ToastContainer} from "react-toastify";


const CModalSelDate = ({}) => {
  
  const modelAppState = useContext(AppContext);
  
  useEffect(() => {
    // Initialize all input of date type.
    const calOptions={dateFormat: "yyyy-MM-dd", showHeader:false, displayMode:"dialog"}
    bulmaCalendar.attach('[type="date"]', calOptions);
    
    // To access to bulmaCalendar instance of an element
    // eslint-disable-next-line no-undef
    const element = document.querySelector('#datetxt');
    // bulmaCalendar instance is available as element.bulmaCalendar
    element.bulmaCalendar.on('select', setDatePicket);
    element.bulmaCalendar.show();
    
  }, []);
  
  const setDatePicket = (datepicker) => {
    const v = datepicker.data.value();
    const isValid = modelAppState.getIsApocDateValid(v);
    if (isValid === true) {
      modelAppState.setDate(v)
    } else {
      toast(isValid);
    }
  }
  
  
  const fnClose=()=>{
    modelAppState.setIsShowModal(false);
  }
  return (
    <>
      <div className="modal is-active" >
        <div className="modal-background" onClick={fnClose}/>
        <div className="modal-card">
          <header className="modal-card-head">
            <p className="modal-card-title">
              <i className="fa fa-calendar mr-2"/>
              Select picture from date
            </p>
            <button
              onClick={fnClose}
              className="delete"
              aria-label="close"
            />
          </header>
          <section className="modal-card-body">
            <div className="calWrapper">
              <input id="datetxt" type="date"/>
            </div>
            <ToastContainer/>
          </section>
          <footer className="modal-card-foot has-text-right">
            <button onClick={fnClose} className="button is-info">
              <i className="fa fa-times mr-2"/>Close
            </button>
          </footer>
        </div>
        
      </div>
    </>
  );
};

export default CModalSelDate