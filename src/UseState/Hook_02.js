import React from "react";
import { useState } from "react";

const Hook_02 = () => {
  const [name, setName] = useState({ firstName: "", lastName: "" });
  const [fullName, setFullName] = useState();

  const print = () => {
    setFullName(`${name.firstName} ${name.lastName}`);
  };

  return (
    <>
      <h1>Hooks_02</h1>
      <input
        type="text"
        value={name.firstName}
        onChange={(e) => setName({ ...name, firstName: e.target.value })}
      />
      <br />
      <br />
      <input
        type="text"
        value={name.lastName}
        onChange={(e) => setName({ ...name, lastName: e.target.value })}
      />
      <br />
      <br />
      FirstName : {name.firstName} <br />
      <br />
      LastName : {name.lastName}
      <br />
      <br />
      <button type="button" onClick={print}>
        PRINT
      </button>
      Full Name : {fullName}
    </>
  );
};

export default Hook_02;
