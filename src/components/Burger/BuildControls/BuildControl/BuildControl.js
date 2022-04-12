import React from 'react';
import './BuildControl.css';

const BuildControl = ({type, removed, added, disabled}) => {
  return (
    <div className="BuildControl">
      <div className="Label">{type}</div>
      <button className="Less" onClick={removed} disabled={disabled}>Less</button>
      <button className="More" onClick={added}>More</button>
    </div>
  )
};

export default BuildControl;