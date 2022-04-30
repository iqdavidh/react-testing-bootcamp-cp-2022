import React, {useEffect, useState} from 'react';


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