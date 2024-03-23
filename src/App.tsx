import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Counter } from "./components/Counter";

function App() {
  const maxValue = 5;
  const minValue = 0;
  return (
    <div className="App">
      <Counter maxValue={maxValue} minValue={minValue} />
      <Counter maxValue={maxValue} minValue={minValue} />
    </div>
  );
}

export default App;
