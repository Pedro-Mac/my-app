import React, { useState, useEffect } from "react";

import "./header.scss";

const Header = () => {
  const [effect, setEffect] = useState("");
  useEffect(() => {
    setEffect("active-effect");
  }, [effect]);

  return (
    <header className="d-flex flex-column justify-content-center intro-header wrapper col-md-10 mx-auto">
      <h1 className={`text-center mb-5 primary-title ${effect}`}>
        HI! I AM PEDRO
      </h1>
      <p className={`description-highlight ${effect}`}>
        I am a frontend developer and I am always looking for adventures,
        wilderness, inspirational stories and for the best waves to surf.
      </p>
    </header>
  );
};

export default Header;
