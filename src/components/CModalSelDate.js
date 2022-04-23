import React, {useContext, useEffect} from 'react';
import AppContext from "../model/AppContext";

const CModalSelDate = ({}) => {
  
  const modelAppState = useContext(AppContext);

  const fnClose=()=>{
    modelAppState.setIsShowModal(false);
  }
  return (
    <>
      <div className="modal is-active" >
        <div className="modal-background" onClick={fnClose}/>
        <div className="modal-card">
          <header className="modal-card-head">
            <p className="modal-card-title">
              <i className="fa fa-calendar mr-2"/>
              Select picture from date
            </p>
            <button
              onClick={fnClose}
              className="delete"
              aria-label="close"
            />
          </header>
          <section className="modal-card-body">
            xxxx
            xxxx
          </section>
          <footer className="modal-card-foot has-text-right">
            <button onClick={fnClose} className="button is-info">
              <i className="fa fa-times mr-2"/>Close
            </button>
          </footer>
        </div>
        
      </div>
    </>
  );
};

export default CModalSelDate