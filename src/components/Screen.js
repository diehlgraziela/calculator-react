import React from "react";
import "./styles/Screen.css";

const Screen = ({ number }) => {
  return (
    <div className='screen'>
      <span>{number}</span>
    </div>
  );
};

export default Screen;
