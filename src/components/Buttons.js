import React from "react";
import "./styles/Buttons.css";

const Buttons = ({ number, setNumber, oldNumber, setOldNumber, operator, setOperator }) => {

  //number handler
  const numberHandler = (e) => {
    const value = e.target.value;

    if (number === 0) {
      setNumber(value);
    } else {
      setNumber(number + value)
    }
  };

  //clear input
  const clear = () => {
    setNumber(0);
  }

  //calc percentage
  const percentage = () => {
    setNumber(number / 100);
  }

  //change plus and minus sign
  const changeSign = () => {
    if (number > 0) {
      setNumber(-number);
    }
    else {
      setNumber(number * -1);
    }
  }

  //operators
  const operatorHandler = (e) => {
    const operatorValue = e.target.value;
    setOperator(operatorValue);
    setOldNumber(number);
    setNumber(0);
  }

  const calculate = () => {
    let result;

    if (operator === "÷") {
      result = parseFloat(oldNumber) / parseFloat(number);
      setNumber(+parseFloat(result).toFixed(10));

    } else if (operator === "×") {
      result = parseFloat(oldNumber) * parseFloat(number);
      setNumber(+parseFloat(result).toFixed(10));

    } else if (operator === "+") {
      result = parseFloat(oldNumber) + parseFloat(number);
      setNumber(+parseFloat(result).toFixed(10));

    } else if (operator === "-") {
      result = parseFloat(oldNumber) - parseFloat(number)
      setNumber(+parseFloat(result).toFixed(10));
    }
  }

  return (
    <div className='buttons'>
      <button onClick={clear} value="C">C</button>
      <button onClick={percentage} value="%">%</button>
      <button onClick={changeSign} value="+/-">+/-</button>
      <button onClick={operatorHandler} className='orange' value="÷">÷</button>

      <button onClick={numberHandler} value="7">7</button>
      <button onClick={numberHandler} value="8">8</button>
      <button onClick={numberHandler} value="9">9</button>
      <button onClick={operatorHandler} className='orange' value="×">×</button>

      <button onClick={numberHandler} value="4">4</button>
      <button onClick={numberHandler} value="5">5</button>
      <button onClick={numberHandler} value="6">6</button>
      <button onClick={operatorHandler} className='orange' value="-">-</button>

      <button onClick={numberHandler} value="1">1</button>
      <button onClick={numberHandler} value="2">2</button>
      <button onClick={numberHandler} value="3">3</button>
      <button onClick={operatorHandler} className='orange' value="+">+</button>

      <button onClick={numberHandler} className='w-2' value="0">0</button>
      <button onClick={numberHandler} value=".">.</button>
      <button onClick={calculate} className='orange' value="=">=</button>
    </div>
  );
};

export default Buttons;
