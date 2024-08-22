import React, { useEffect, useState } from "react";

const UseEffect_01 = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  // run on every render of the page
  useEffect(() => {
    console.log("Every Render :- ", Math.floor(Math.random() * 10));
  });

  // run on when the page is loaded
  useEffect(() => {
    console.log("First Render :- 1");
  }, []);

  // run when the changes in count variable
  useEffect(() => {
    console.log("Count :- ", count);
    document.title = `Count :- ${count}`;
  }, [count]);

  let addNumber = () => {
    setCount(count + 1);
    document.title = `Count : ${count}`;
  };

  return (
    <>
      <h1>UseEffect_01</h1>
      <button onClick={addNumber}>Counter</button>
      <button onClick={() => setCount(count + 1)}>Counter : {count}</button>
      <br />
      <br />
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <br />
    </>
  );
};

export default UseEffect_01;
