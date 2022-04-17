import React from 'react';

const CErrorMsg = ({msg}) => {
  return (
    <div className="has-text-centered is-danger">
      {msg}
    </div>
  );
};

export default CErrorMsg