import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./App.css";
import {
  increaseCounter,
  decreaseCounter,
  increaseByAmountCounter,
} from "./redux/counter";
function App() {
  const count = useSelector((state) => {
    return state.count;
  });

  const dispatch = useDispatch();

  const increase = () => {
    const action = increaseCounter();
    dispatch(action);
  };

  const decrease = () => {
    dispatch(decreaseCounter());
  };

  const increaseTen = () => {
    const action = increaseByAmountCounter(10);
    dispatch(action);
  };

  return (
    <div>
      <h1>Count : {count}</h1>
      <button onClick={increase}>up</button>
      <button onClick={decrease}>down</button>
      <button onClick={increaseTen}>increaseTen</button>
    </div>
  );
}

export default App;
