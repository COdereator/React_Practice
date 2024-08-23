import React, { useEffect, useState } from "react";

function UseEffect_02() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const logMousePosition = (e) => {
    setX(e.clientX);
    setY(e.clientY);
  };

  useEffect(() => {
    window.addEventListener("mousemove", logMousePosition);

    return () => {
      console.log("Component unmount");
      window.removeEventListener("mousemove", logMousePosition);
    };
  }, []);

  return (
    <div>
      <h1>
        Hooks X - {x} Y - {y}
      </h1>
    </div>
  );
}

export default UseEffect_02;
