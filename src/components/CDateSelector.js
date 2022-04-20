import React, {useEffect, useContext} from 'react';
import bulmaCalendar from 'bulma-calendar/dist/js/bulma-calendar.min';
import "bulma-calendar/dist/css/bulma-calendar.min.css"
import './cdateselector.css';
import AppContext from "../model/AppContext";
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CDateSelector = ({}) => {
  
  const modelAppState = useContext(AppContext)
  
  const setDatePicket = (datepicker) => {
    const v = datepicker.data.value();
    const isValid = modelAppState.getIsApocDateValid(v);
    if (isValid === true) {
      modelAppState.setDate(v)
    } else {
      toast(isValid);
    }
  }
  
  
  useEffect(() => {
    // Initialize all input of date type.
    bulmaCalendar.attach('[type="date"]', {dateFormat: "yyyy-MM-dd"});
    
    // To access to bulmaCalendar instance of an element
    // eslint-disable-next-line no-undef
    const element = document.querySelector('#datetxt');
    // bulmaCalendar instance is available as element.bulmaCalendar
    element.bulmaCalendar.on('select', setDatePicket);
    
    
  }, []);
  
  return (
    <div className="is-flex mb-4" style={{justifyContent: "center"}}>
      <div style={{maxWidth: "180px"}}>
        <input id="datetxt" type="date"/>
      </div>
      <ToastContainer/>
    </div>
  );
};

export default CDateSelector