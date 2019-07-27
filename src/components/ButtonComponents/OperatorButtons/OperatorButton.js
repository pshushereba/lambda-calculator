import React from "react";

const OperatorButton = (props) => {
  return (
    <span>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button>{ props.operator }</button>
    </span>
  );
};

export default OperatorButton;