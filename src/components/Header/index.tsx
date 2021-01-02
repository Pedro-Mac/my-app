import React from "react";

import "./header.scss";

const Header = () => {
  return (
    <header className="d-flex flex-column justify-content-center intro-header wrapper">
      <h1 className="text-center mb-5 primary-title">HI! I AM PEDRO</h1>
      <p className="description-highlight">
        I am a frontend developer and I am always looking for adventures,
        wilderness, inspirational stories and for the best waves to surf.
      </p>
    </header>
  );
};

export default Header;
