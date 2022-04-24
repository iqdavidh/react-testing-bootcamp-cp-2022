import React, {useEffect, useState} from 'react';

const getToday = () => {
  const today = new Date();
  const month = (today.getMonth() + 1).toString().padStart(2, '0');
  const day = today.getDate().toString().padStart(2, '0');
  
  return today.getFullYear() + `-${month}-${day}`;
}

const useAppState = () => {
  

  const [isShowModal, setIsShowModal] = useState(false)
  
  //Inicializacion
  useEffect(() => {
    setIsShowModal(false)
  }, []);
  
 

  return {
    getIsShowModal:()=>isShowModal,
    setIsShowModal
  };
};

export default useAppState;