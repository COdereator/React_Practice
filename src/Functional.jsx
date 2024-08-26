import React, { useState } from "react";

const Functional = () => {
  const [hide, setHide] = useState(true);
  const [pass, setPass] = useState(false);
  const [menu, setMenu] = useState(false);

  const [modal, setModal] = useState(false);
  return (
    <>
      <div className={`content ${menu ? "activeMenu" : ""}`}>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Service</li>
          <li>Portfolio</li>
        </ul>
      </div>

      <div className={`modalOverlay ${modal ? "showModal" : ""}`}>
        <div className={`modalDiv ${modal ? "activeModal" : ""}`}></div>
      </div>

      <button onClick={() => setHide(!hide)}>{hide ? "Hide" : "Show"}</button>

      {hide && <h1>Hello Coder</h1>}

      <br />

      <input type={pass ? "text" : "password"} />
      <br />
      <br />
      <button onClick={() => setPass(!pass)}>{pass ? "Hide" : "Show"}</button>
      <h1>&#9776;</h1>
      <button className="icon" onClick={() => setMenu(!menu)}>
        {menu ? <span>&times;</span> : <span>&#9776;</span>}
      </button>

      <button onClick={() => setModal(!modal)}>Enquiry Now</button>
    </>
  );
};

export default Functional;
