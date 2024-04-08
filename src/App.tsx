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
    return { maxValue: 0, minValue:0 };
  };
  const [maxValue, setMaxValue] = useState(
    () => getFromLocalStorage().maxValue
  );
  const [minValue, setMinValue] = useState(
    () => getFromLocalStorage().minValue
  );

  const [number, setNumber] = useState<number>(getFromLocalStorage()!.minValue);

  const incrementHandler = () => {
    if (number < maxValue) {
      setNumber((prevNumber) => prevNumber + 1);
    }
  };

  const resetHandler = () => {
    setNumber(minValue);
  };

  const setNumbers = (newMinValue: number, newMaxValue: number) => {
    setMaxValue(newMaxValue);
    setMinValue(newMinValue);
    setNumber(newMinValue);
    localStorage.setItem("startValue", JSON.stringify(newMinValue));
    localStorage.setItem("maxValue", JSON.stringify(newMaxValue));
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
          setNumbers={setNumbers}
        />
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
