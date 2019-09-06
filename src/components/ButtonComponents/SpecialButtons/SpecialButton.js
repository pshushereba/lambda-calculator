import React from "react";

const SpecialButton = (props) => {
  return (
    <span>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      {<button>{ props.special }</button>}
    </span>
  );
};

export default SpecialButton;