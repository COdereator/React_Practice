import React, { useState } from "react";
import UseEffect_02 from "./UseEffect_02";

function UseEffect_03() {
  const [display, setDisplay] = useState(true);

  return (
    <div>
      <button onClick={() => setDisplay(!display)}>Display</button>
      {display && <UseEffect_02 />}
    </div>
  );
}

export default UseEffect_03;
