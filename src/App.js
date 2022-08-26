import React, { useState } from "react";
import "./App.css";

//components
import Screen from "./components/Screen";
import Buttons from "./components/Buttons";

function App() {
  const [number, setNumber] = useState(0);
  const [oldNumber, setOldNumber] = useState(0);
  const [operator, setOperator] = useState();

  return (
    <div className='App'>
      <Screen number={number} />

      <Buttons
        number={number}
        setNumber={setNumber}
        operator={operator}
        setOperator={setOperator}
        oldNumber={oldNumber}
        setOldNumber={setOldNumber}
      />
    </div>
  );
}

export default App;
