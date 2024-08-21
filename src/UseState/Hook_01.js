import React from "react";
import { useState } from "react";

const Hook_01 = () => {
  let initialCount = 0;
  const [count, setCount] = useState(initialCount);

  return (
    <>
      <h1>Hooks_01</h1>
      <h1>Count : {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increament</button>
      <button onClick={() => setCount(count - 1)}>Decreament</button>
      <button onClick={() => setCount(initialCount)}>InitialCount</button>
      <br />
      <br />
    </>
  );
};

export default Hook_01;
