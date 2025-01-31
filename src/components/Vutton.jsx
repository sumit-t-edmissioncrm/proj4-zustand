import React from "react";
import useStore, { useActions } from "../store/myStore";

const Vutton = () => {
  const { increaseCount, decreaseCount } = useActions();

  return (
    <div>
      <button onClick={increaseCount}> Increase</button>
      <button onClick={decreaseCount}>Decrease</button>
    </div>
  );
};

export default Vutton;
