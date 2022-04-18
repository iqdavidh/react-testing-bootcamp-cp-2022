import React from 'react';
import './capod.css';
import CDateSelector from "./CDateSelector";

const CApod = ({apodItem}) => {
  
  
  
  if (apodItem === null) {
    return null;
  }
  
  return (
    <>
    <CDateSelector />
    
    <div className="is-flex-tablet" style={{alignItems:"center"}}>
      <div className="wrapperApodImg">
        <a href={apodItem.hdurl} target="_blank">
          <img title={apodItem.title} src={apodItem.url} alt={apodItem.date}/>
        </a>
      </div>
      
      <div className="apodExplanation">
      
        <div className="mb-3">
          <h2 className="imgTitle">{apodItem.title}</h2>
          <p className="has-text-centered" style={{fontSize:"12px"}}>{apodItem.date}</p>
        </div>
        
        {apodItem.explanation}
      </div>
    
    </div>
    </>
  );
};

export default CApod