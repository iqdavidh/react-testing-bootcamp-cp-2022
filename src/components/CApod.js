import React, {} from 'react';
import './capod.css';


const CApod = ({apodItem, onShowModal}) => {
  
  
  if (apodItem === null) {
    return null;
  }
  
  return (
    <>
      <div className=" has-text-centered mb-4">
        <button className="button is-info " onClick={onShowModal}>
          <i className="fa fa-calendar mr-2"/>
          {apodItem.date}
        </button>
      </div>
      
      <div className="is-flex-tablet" >
        <div className="wrapperApodImg">
          <a href={apodItem.hdurl} target="_blank">
            <img title={apodItem.title} src={apodItem.url} alt={apodItem.date}/>
          </a>
        </div>
        
        <div className="apodExplanation" style={{aligItems: "top"}}>
          
          <h2 className="imgTitle mb-2">{apodItem.title}</h2>
          {apodItem.explanation}
        </div>
      
      </div>
    </>
  );
};

export default CApod