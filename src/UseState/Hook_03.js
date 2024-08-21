import React, { useState } from "react";

const Hook_03 = () => {
  const [items, setItems] = useState([]);

  const addItems = () => {
    setItems([
      ...items,
      {
        // id: items.length,
        value: Math.floor(Math.random() * 10 + 1),
      },
    ]);
  };

  return (
    <>
      <h1>Hooks_03</h1>
      <button onClick={addItems}>Add a Number</button>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item.value}</li>
        ))}
      </ul>
    </>
  );
};

export default Hook_03;
