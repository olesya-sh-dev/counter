import { useState } from "react";
import "./App.css";
import { Counter } from "./components/counter/Counter";
import { Settings } from "./components/settings/Settings";

function App() {
  const getFromLocalStorage = () => {
    let maxValueString = localStorage.getItem("maxValue");
    let maxValue = maxValueString ? parseInt(maxValueString) : 5;

    let minValueString = localStorage.getItem("startValue");
    let minValue = minValueString ? parseInt(minValueString) : 0;

    return { maxValue, minValue };
  };

  const { maxValue, minValue } = getFromLocalStorage();
  const [number, setNumber] = useState<number>(minValue);

  const incrementHandler = () => {
    if (number < maxValue) {
      setNumber((prevNumber) => prevNumber + 1);
    }
  };

  const resetHandler = () => {
    setNumber(getFromLocalStorage().minValue);
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
          maxValue={maxValue}
          startValue={minValue}
          setNumber={setNumber}
        />
        <Counter
          maxValue={getFromLocalStorage().maxValue}
          minValue={getFromLocalStorage().minValue}
          incrementHandler={incrementHandler}
          resetHandler={resetHandler}
          number={number}
        />
      </div>
    </div>
  );
}

export default App;
