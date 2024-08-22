import React, { useState } from "react";

function UseEffect_03() {
  const [display, setDisplay] = useState(true);

  return (
    <div>
      <button onClick={() => setDisplay(!display)}></button>
    </div>
  );
}

export default UseEffect_03;
