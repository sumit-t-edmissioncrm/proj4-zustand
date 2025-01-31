import React from "react";
import useStore, { useActions } from "../store/myStore";

const DisplayCount = () => {
  const count = useStore((state) => state.count);

  return <div className="font-semibold text-2xl">Counter value : {count}</div>;
};

export default DisplayCount;
