import React, { useState } from "react";

const Functional = () => {
  const [hide, setHide] = useState(true);
  const [pass, setPass] = useState(false);
  const [menu, setMenu] = useState(false);
  const [toggle, setToggle] = useState(true);

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
        <div className={`modalDiv ${modal ? "activeModal" : ""}`}>
          <button onClick={() => setModal(false)}>&times;</button>
        </div>
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

      <div className="faqOuter">
        <div className="faqItems">
          <h1>Heading Tag</h1>
          <p className={`${toggle ? "activeAns" : ""}`}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
            corrupti illum maiores cumque assumenda, laborum iusto sapiente
            veniam hic, accusamus, illo doloremque harum quasi deleniti
            repellendus ratione ad. Fuga qu isquam veniam delectus?
          </p>
        </div>
      </div>
      <button onClick={() => setToggle(!toggle)}>Toggle</button>
    </>
  );
};

export default Functional;
