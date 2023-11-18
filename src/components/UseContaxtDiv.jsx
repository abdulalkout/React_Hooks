import React from "react";
import { useContext } from "react";
import { counterContext } from "../App";

function UseContaxtDiv() {
  // using the values of the counterContext that we have made in App.js now we have access to these values
  const [counter, setCounter] = useContext(counterContext);

  const increase = () => {
    // using setCounter to change the counter value
    setCounter(counter + 1);
  };

  const decrease = () => {
    // using setCounter to change the counter value
    setCounter(counter - 1);
  };

  return (
    <div>
      <h3>{`Counter from Context : ${counter}`}</h3>
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
    </div>
  );
}

export default UseContaxtDiv;
