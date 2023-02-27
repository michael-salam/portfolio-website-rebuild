import React from "react";

import "./Header.scss";

const Header = () => {
  return (
    <header className="header">
      <div className="header__text">
        <div className="heading">
          <h2 className="heading__main">Hi, Michael here. I'm a</h2>
          <h1 className="heading__sub">Frontend Web Developer</h1>
        </div>
        <p className="description">
          Get a feel for my services and expertise by going through my projects
          below. Get in touch so we can work together and contribute to each
          other's growth.
        </p>
        <a href="/#get-in-touch" className="btn">
          Take the first step now
        </a>
      </div>
    </header>
  );
};

export default Header;
