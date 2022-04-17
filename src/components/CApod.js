import React from 'react';

const CApod = ({apodItem}) => {
  
  
  if(apodItem===null){
    return null;
  }
  
  return (
    <>
      <div>
        {JSON.stringify(apodItem)}
      </div>
      <div className="is-flex-desktop">
        <div className="is-half-desktop is-flex-grow-1">1a</div>
        <div className="is-half-desktop is-flex-grow-1">2</div>
      </div>
    </>
    
  );
};

export default CApod