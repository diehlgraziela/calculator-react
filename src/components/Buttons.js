import "./styles/Buttons.css";

const Buttons = () => {
  return (
    <div className='buttons'>
      <button>C</button>
      <button>%</button>
      <button>+/-</button>
      <button className='orange'>÷</button>

      <button>7</button>
      <button>8</button>
      <button>9</button>
      <button className='orange'>×</button>

      <button>4</button>
      <button>5</button>
      <button>6</button>
      <button className='orange'>-</button>

      <button>1</button>
      <button>2</button>
      <button>3</button>
      <button className='orange'>+</button>

      <button className='w-2'>0</button>
      <button>.</button>
      <button className='orange'>=</button>
    </div>
  );
};

export default Buttons;
