import { useState } from "react";
import "./App.css";
import { Counter } from "./components/counter/Counter";
import { Settings } from "./components/settings/Settings";

function App() {
  const getFromLocalStorage = () => {
    let minValueString = localStorage.getItem("startValue");
    let maxValueString = localStorage.getItem("maxValue");
    if (maxValueString && minValueString) {
      let maxValue = parseInt(maxValueString);
      let minValue = parseInt(minValueString);
      return { maxValue, minValue };
    }
  };

  const [number, setNumber] = useState<number>(getFromLocalStorage()!.minValue);

  const incrementHandler = () => {
    if (number < getFromLocalStorage()!.maxValue) {
      setNumber((prevNumber) => prevNumber + 1);
    }
  };

  const resetHandler = () => {
    setNumber(getFromLocalStorage()!.minValue);
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
        <Settings
          maxValue={getFromLocalStorage()!.maxValue}
          startValue={getFromLocalStorage()!.minValue}
          setNumber={setNumber}
        />
        <Counter
          maxValue={getFromLocalStorage()!.maxValue}
          minValue={getFromLocalStorage()!.minValue}
          incrementHandler={incrementHandler}
          resetHandler={resetHandler}
          number={number}
        />
      </div>
    </div>
  );
}

export default App;
