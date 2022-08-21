import React from "react";

import "./Header.scss";

const Header = () => {
  return (
    <header className="header">
      <div className="header__text">
        <h1 className="main-heading">Welcome to my World!</h1>
        <h2 className="sub-heading">
          Michael Salam, Frontend Web Developer and Designer
        </h2>
        <p className="description">
          Get a feel for my services and expertise by going through my projects
          below. Get in touch so we can work together and contribute to each
          other's growth.
        </p>
        <a href="/#" className="btn">
          Take the first step now
        </a>
      </div>
    </header>
  );
};

export default Header;
