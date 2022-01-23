import "./App.css";
import React, { useState } from "react";

function App() {
  const [count, seCount] = useState(4);

  function decremntCount() {
    seCount((prevCount) => prevCount - 1);
  }

  function incrementCount() {
    seCount((prevCount) => prevCount + 1);
  }

  return (
    <div className='App'>
      <button onClick={decremntCount}>-</button>
      <span>{count}</span>
      <button onClick={incrementCount}>+</button>
    </div>
  );
}

export default App;
