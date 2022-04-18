import React, {useEffect, useState} from 'react';

const getToday = () => {
  const today = new Date();
  const month = (today.getMonth() + 1).toString().padStart(2, '0');
  const day = today.getDate().toString().padStart(2, '0');
  
  return today.getFullYear() + `-${month}-${day}`;
}

const useDate = () => {
  
  const [d, setD] = useState(null)
  
  //Inicializacion
  useEffect(() => {
    setD(null)
  }, []);
  
  
  const getIsApocDateValid = (d) => {
    const todayYMD = getToday();
    
    const minDate = '1995-06-16';
    
    if (d < minDate) {
      return `Date must be grater than ${minDate}`
    }
    
    if (d > todayYMD) {
      return `Date must be less than ${todayYMD}`
    }
    
    return true;
    
  };
  
  const setDate = (v) => {
    console.log(v);
    setD(v);
  }
  
  return {
    getDate: () => d,
    setDate,
    getIsApocDateValid
  };
};

export default useDate;