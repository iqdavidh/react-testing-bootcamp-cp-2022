import React from "react";


const DateContext = React.createContext({
  getDate: () => {
  },
  setDate: () => {
  },
  getIsApocDateValid:()=>{}
});

export default DateContext;

