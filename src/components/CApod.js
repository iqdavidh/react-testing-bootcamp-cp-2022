import React from 'react';
import './capod.css';

const CApod = ({apodItem}) => {
  
  
  if (apodItem === null) {
    return null;
  }
  
  return (
    
    <div className="is-flex-tablet">
      <div className="wrapperApodImg">
        <a href={apodItem.hdurl} target="_blank">
          <img title={apodItem.title} src={apodItem.url} alt={apodItem.date}/>
        </a>
      </div>
      
      <div className="apodExplanation">
        {apodItem.explanation}
      </div>
    
    </div>
  
  );
};

export default CApod