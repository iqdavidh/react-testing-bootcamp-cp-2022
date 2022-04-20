import React from "react";


const AppContext = React.createContext({
  getDate: () => {
  },
  setDate: () => {
  },
  getIsApocDateValid:()=>{},
  getIsShowModal:()=>{},
  setIsShowModal:(b)=>{ console.log('Nmo implemented')}
});

export default AppContext;

