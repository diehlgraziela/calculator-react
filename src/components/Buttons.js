import React from "react";
import "./styles/Buttons.css";

const Buttons = ({ number, setNumber }) => {

  const handleNumber = (e) => {
    let value = e.target.value;
    setNumber(value);
    console.log(value);
  };

  return (
    <div className='buttons'>
      <button onClick={handleNumber} value="C">C</button>
      <button onClick={handleNumber} value="%">%</button>
      <button onClick={handleNumber} value="+/-">+/-</button>
      <button onClick={handleNumber} className='orange' value="÷">÷</button>

      <button onClick={handleNumber} value="7">7</button>
      <button onClick={handleNumber} value="8">8</button>
      <button onClick={handleNumber} value="9">9</button>
      <button onClick={handleNumber} className='orange' value="×">×</button>

      <button onClick={handleNumber} value="4">4</button>
      <button onClick={handleNumber} value="5">5</button>
      <button onClick={handleNumber} value="6">6</button>
      <button onClick={handleNumber} className='orange' value="-">-</button>

      <button onClick={handleNumber} value="1">1</button>
      <button onClick={handleNumber} value="2">2</button>
      <button onClick={handleNumber} value="3">3</button>
      <button onClick={handleNumber} className='orange' value="+">+</button>

      <button onClick={handleNumber} className='w-2' value="0">0</button>
      <button onClick={handleNumber} value=".">.</button>
      <button onClick={handleNumber} className='orange' value="=">=</button>
    </div>
  );
};

export default Buttons;
