import { useState } from "react";
import "./App.css";
import { Counter } from "./components/Counter";

function App() {
  const maxValue = 5;
  const minValue = 0;
  const [number, setNumber] = useState<number>(minValue);
  const incrementHandler = () => {
    if (number < maxValue) {
      setNumber((prevNumber) => prevNumber + 1);
    }
  };

  const resetHandler = () => {
    setNumber(minValue);
  };

  return (
    <div className="App">
      <Counter
        maxValue={maxValue}
        minValue={minValue}
        incrementHandler={incrementHandler}
        resetHandler={resetHandler}
        number={number}
      />
    </div>
  );
}

export default App;
