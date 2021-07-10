import "./App.css";
import React, { useState } from "react";

function countingFunction() {
  return 10;
}

function App() {
  var [count, setCount] = useState(() => countingFunction());

  function decrement() {
    setCount((prevCount) => prevCount - 1);
  }

  function increment() {
    setCount((prevCount) => prevCount + 1);
  }
  return (
    <div className="App">
      <div className="container">
        <button onClick={increment}>+</button>
        <p>{count}</p>
        <button onClick={decrement}>-</button>
      </div>
    </div>
  );
}

export default App;
