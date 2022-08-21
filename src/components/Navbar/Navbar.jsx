import React, { useState } from "react";

import "./Navbar.scss";

import logo from "../../images/logo.svg";

const Navbar = () => {
  // this piece of state stores the open state of the mobile menu as a boolean
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleCloseMenu = () => {
    // once the width of the window is less than 1023px, override any state and set isMenuOpen to false
    if (window.innerWidth > 1023) {
      setIsMenuOpen(false);
    }
  };

  // logic to handle inverting the menuOpen state (open and close the menu)
  const toggleMenuOpen = () => {
    setIsMenuOpen((prev) => !prev);
  };

  // listen for window resize and run "handleCloseMenu"
  window.addEventListener("resize", handleCloseMenu);

  // on clicking any of the navbar links, the mobile menu is automatically closed
  const links = document.querySelectorAll(".link");
  links.forEach((link) =>
    link.addEventListener("click", () => setIsMenuOpen(false))
  );

  return (
    <nav className="navbar">
      <a href="/#" className="navbar__logo">
        <img src={logo} alt="Michael Salam" />
      </a>

      <ul className={`navbar__links ${isMenuOpen && "mobile"}`}>
        <li className="link">
          <a href="#services">Services</a>
        </li>
        <li className="link">
          <a href="#projects">Projects</a>
        </li>
        <li className="link">
          <a href="#about-me">About Me</a>
        </li>
        <li className="link">
          <a className="btn" href="#get-in-touch">
            Get in touch
          </a>
        </li>
      </ul>

      <div
        className={`hamburger ${isMenuOpen && "close"}`}
        onClick={toggleMenuOpen}
      >
        <span className="line"></span>
        <span className="line"></span>
        <span className="line"></span>
      </div>
    </nav>
  );
};

export default Navbar;
