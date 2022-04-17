import React from 'react';

const CApod = ({apodItem}) => {
  
  
  if(apodItem===null){
    return null;
  }
  
  return (
    <div className="is-flex-desktop">
      <div className="">1a</div>
      <div className="">2</div>
    </div>
  );
};

export default CApod