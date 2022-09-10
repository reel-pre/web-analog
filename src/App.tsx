import React from "react";
import logo from "./logo.svg";
import "./App.scss";
import Display from "./components/Display";
import Analog from "./components/Analog";
import { useState } from "react";
function App() {
  const [xyData, setXydata] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });

  return (
    <div className="App">
      <Display xyData={xyData} />
      <Analog setXydata={setXydata} />
    </div>
  );
}

export default App;
