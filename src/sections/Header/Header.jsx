import React from "react";

import "./Header.scss";

const Header = () => {
  return (
    <header className="header">
      <div className="header__text">
        <div className="heading">
          <h1 className="heading__sub">Transform Your Online Presence</h1>
        </div>
        <p className="description">
          Hi, I'm Michael. If a custom, easy-to-use website that converts and
          helps you achieve your goals is what you're looking for, you are in
          the right place.
        </p>
        <a href="/#get-in-touch" className="btn">
          Get in touch now!
        </a>
      </div>
    </header>
  );
};

export default Header;
