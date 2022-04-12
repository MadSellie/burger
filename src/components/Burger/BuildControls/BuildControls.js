import React from 'react';
import './BuildControls.css';
import BuildControl from "./BuildControl/BuildControl";

const ingredientsControls = [
  {type: "salad"},
  {type: "bacon"},
  {type: "cheese"},
  {type: "meat"}
];

const BuildControls = props => {
  return (
    <div className="BuildControls">
      <p>Current price: <strong>{props.price} KGS</strong></p>
      {ingredientsControls.map(control => {
        return <BuildControl
          key={control.type}
          type={control.type}
          disabled={props.disabled[control.type]}
          added={() => props.ingredientAdded(control.type)}
          removed={() => props.ingredientRemoved(control.type)}
        />;
      })}
      <button
        className="OrderButton"
        disabled={!props.purchasable}
        onClick={props.purchase}
      >
        ORDER NOW
      </button>
    </div>
  )
};

export default BuildControls;