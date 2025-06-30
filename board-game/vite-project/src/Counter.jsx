import React from "react";
import { useState, useEffect } from "react";

export default function Counter() {
  let [countx, setCountx] = useState(0);
  let [county, setCounty] = useState(0);

  let inCountx = () => {
    setCountx((currCount) => currCount + 1);
  };

  let inCounty = () => {
    setCounty((currCount) => currCount + 1);
  };

  useEffect(function printSomething() {
    console.log("This is a side effect");
  }, [countx]);
  return (
    <div>
      <h1>Count X = {countx}</h1>
      <button onClick={inCountx}>+1</button>
      <h1>Count Y = {county}</h1>
      <button onClick={inCounty}>+1</button>
    </div>
  );
}
