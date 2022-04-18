import React, {useEffect, useState} from 'react';
import bulmaCalendar from 'bulma-calendar/dist/js/bulma-calendar.min';
import "bulma-calendar/dist/css/bulma-calendar.min.css"
import './cdateselector.css';

const CDateSelector = ({onChageDate, initialDate}) => {
  
  const[date,setDate] = useState();
  
  useEffect(() => {
    // Initialize all input of date type.
    const calendars = bulmaCalendar.attach('[type="date"]', {dateFormat:"yyyy-MM-dd"});
    
    
    // To access to bulmaCalendar instance of an element
    // eslint-disable-next-line no-undef
    const element = document.querySelector('#datetxt');
    // bulmaCalendar instance is available as element.bulmaCalendar
    element.bulmaCalendar.on('select', (datepicker) => {
      setDate(datepicker.data.value())
    });
    element.bulmaCalendar.color="#012b6c"
    element.bulmaCalendar.dateFormat="yyyy-MM-dd"
    
  }, [initialDate]);
  
  return (
    <div className="is-flex mb-4" style={{justifyContent:"center"}}>
      <div style={{maxWidth:"180px"}}>
        <input id="datetxt" type="date" />
      </div>
      
    </div>
  );
};

export default CDateSelector