import React, {useEffect, useState} from 'react';

const today = new Date();
const todayYMD = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

const useDate = () => {
  
  const [d, setD] = useState(null)
  
  //Inicializacion
  useEffect(() => {
    setD(null)
  }, []);
  
  
  const getIsApocDateValid = (d) => {
    
    const minDate = '1995-06-16';
    
    if (d < minDate) {
      return `Date must be grater than ${minDate}`
    }
    
    if (d > todayYMD) {
      return `Date must be less than ${todayYMD}`
    }
    
    return true;
    
  };
  
  const setDate =(v)=>{
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