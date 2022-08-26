import React, { useState } from "react";
import "./App.css";

//components
import Screen from "./components/Screen";
import Buttons from "./components/Buttons";

function App() {
  const [number, setNumber] = useState(0);

  return (
    <div className='App'>
      <Screen number={number} />

      <Buttons number={number} setNumber={setNumber} />
    </div>
  );
}

export default App;
