import { useEffect, useState } from "react";
import "./App.scss";

import Navbar from "./sections/Navbar/Navbar";
import Header from "./sections/Header/Header";
import Projects from "./sections/Projects/Projects";
import Services from "./sections/Services/Services";
import AboutMe from "./sections/AboutMe/AboutMe";
import BetterDev from "./sections/BetterDev/BetterDev";
import GetInTouch from "./sections/GetInTouch/GetInTouch";

function App() {
  const [navbarHeight, setNavbarHeight] = useState(5);
  useEffect(() => {
    const navbar = document.querySelector(".navbar");
    setNavbarHeight(navbar.offsetHeight);
  }, []);

  document.documentElement.style.setProperty(
    "--scroll-padding",
    navbarHeight + "px"
  );
  return (
    <>
      <Navbar />
      <Header />
      <Projects />
      <Services />
      <AboutMe />
      <BetterDev />
      <GetInTouch />
    </>
  );
}

export default App;
