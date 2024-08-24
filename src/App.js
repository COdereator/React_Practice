import "./App.css";
import Functional from "./Functional";
import Class from "./Class";
import UseEffect_01 from "./UseEffect/UseEffect_01";
import UseEffect_02 from "./UseEffect/UseEffect_02";
import UseEffect_03 from "./UseEffect/UseEffect_03";
import Hook_01 from "./UseState/Hook_01";
import Hook_02 from "./UseState/Hook_02";
import Hook_03 from "./UseState/Hook_03";

function App() {
  return (
    <>
      {/* UseState Hook */}
      {/* <Hook_01 />
      <Hook_02 />
      <Hook_03 /> */}
      {/* UseEffect Hook */}
      {/* <UseEffect_01 />
      <UseEffect_02 />
      <UseEffect_03 /> */}
      <Class />
      <Functional />
    </>
  );
}

export default App;
