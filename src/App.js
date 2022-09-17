import React, { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const up = () => {
    setCount((prev) => prev + 1);
  };

  const down = () => {
    setCount((prev) => prev - 1);
  };

  return (
    <div>
      <h1>Count : {count}</h1>
      <button onClick={up}>up</button>
      <button onClick={down}>down</button>
    </div>
  );
}

export default App;
