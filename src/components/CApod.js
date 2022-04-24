import React, {} from 'react';
import './capod.css';


const CApod = ({apodItem, onShowModal}) => {
  
  
  if (apodItem === null) {
    return (
      <div className=" has-text-centered mb-4">
        <button className="button is-info " onClick={onShowModal}>
          <i className="fa fa-calendar mr-2"/>
        </button>
      </div>
    );
  }
  
  return (
    <>
      <div className=" has-text-centered mb-4">
        <button className="button is-info " onClick={onShowModal}>
          <i className="fa fa-calendar mr-2"/>
          {apodItem.date}
        </button>
      </div>
      
      <article className="is-flex-tablet" >
        <div className="wrapperApodImg">
          <a href={apodItem.hdurl} target="_blank">
            <img title={apodItem.title} src={apodItem.url} alt={apodItem.date}/>
          </a>
        </div>
        
        <div className="apodExplanation" style={{aligItems: "top"}}>
          <h2 className="imgTitle mb-2">{apodItem.title}</h2>
          {apodItem.explanation}
        </div>
      
      </article>
    </>
  );
};

export default CApod