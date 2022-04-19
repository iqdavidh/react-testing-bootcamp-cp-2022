import React from 'react';

const CErrorMsg = ({msg}) => {
  return (
    <div role="alert" className="has-text-centered is-danger">
      {msg}
    </div>
  );
};

export default CErrorMsg