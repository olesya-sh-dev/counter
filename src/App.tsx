import { useState } from "react";
import "./App.css";
import { Counter } from "./components/counter/Counter";
import { Settings } from "./components/settings/Settings";

function App() {
  let maxValue = 5;
  let minValue = 0;
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
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "100px",
        }}
      >
        <Settings />
        <Counter
          maxValue={maxValue}
          minValue={minValue}
          incrementHandler={incrementHandler}
          resetHandler={resetHandler}
          number={number}
        />
      </div>
    </div>
  );
}

export default App;
