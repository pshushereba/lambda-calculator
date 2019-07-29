import React from "react";

const NumberButton = (props) => {
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      {props.number === '0' ? (<button name="zero">{props.number}</button>) : <button>{props.number}</button> }
      
    </>
  );
};

export default NumberButton;