import "./App.css";

//components
import Screen from "./components/Screen";
import Buttons from "./components/Buttons";

function App() {
  return (
    <div className='App'>
      <div className='container'>
        <Screen />

        <Buttons />
      </div>
    </div>
  );
}

export default App;
