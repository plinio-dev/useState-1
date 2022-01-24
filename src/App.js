import "./App.css";
import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(4);

  // function decremntCount() {
  //   setCount((prevCount) => prevCount - 1);
  // }

  // function incrementCount() {
  //   setCount((prevCount) => prevCount + 1);
  // }

  return (
    <div className='App'>
      <button onClick={() => setCount(count - 1)}>-</button>
      <span>{count}</span>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
}

export default App;
