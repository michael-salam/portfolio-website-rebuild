import { useEffect, useState } from "react";
import "./App.scss";

import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import Projects from "./components/Projects/Projects";
import Services from "./components/Services/Services";
import AboutMe from "./components/AboutMe/AboutMe";
import GetInTouch from "./components/GetInTouch/GetInTouch";

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
      <GetInTouch />
    </>
  );
}

export default App;
