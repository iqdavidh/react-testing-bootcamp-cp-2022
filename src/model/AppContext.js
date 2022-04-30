import React from "react";


const AppContext = React.createContext({
  getDate: () => {
  },
  setDate: () => {
  },
  getIsApocDateValid:()=>{},
  getIsShowModal:()=>{},
  setIsShowModal:(b)=>{ }
});

export default AppContext;

