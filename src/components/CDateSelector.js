import React, {useEffect, useContext} from 'react';
import bulmaCalendar from 'bulma-calendar/dist/js/bulma-calendar.min';
import "bulma-calendar/dist/css/bulma-calendar.min.css"
import './cdateselector.css';
import DateContext from "../model/DateContext";

const CDateSelector = ({}) => {
  
  const modelDate = useContext(DateContext)
  
  
  useEffect(() => {
    // Initialize all input of date type.
    bulmaCalendar.attach('[type="date"]', {dateFormat:"yyyy-MM-dd"});
    
    // To access to bulmaCalendar instance of an element
    // eslint-disable-next-line no-undef
    const element = document.querySelector('#datetxt');
    // bulmaCalendar instance is available as element.bulmaCalendar
    element.bulmaCalendar.on('select', (datepicker) => {
      const v=datepicker.data.value();
      const isValid = modelDate.getIsApocDateValid(v );
      if(isValid===true){
        modelDate.setDate(v)
      }else{
        console.log('wrong date');
      }
      
    });
    element.bulmaCalendar.color="#012b6c"
    element.bulmaCalendar.dateFormat="yyyy-MM-dd"
    
  }, []);
  
  return (
    <div className="is-flex mb-4" style={{justifyContent:"center"}}>
      <div style={{maxWidth:"180px"}}>
        <input id="datetxt" type="date" />
        {modelDate.getDate()}
      </div>
      
    </div>
  );
};

export default CDateSelector