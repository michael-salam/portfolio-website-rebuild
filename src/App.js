import "./App.scss";

import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import Services from "./components/Services/Services";
import Projects from "./components/Projects/Projects";
import AboutMe from "./components/AboutMe/AboutMe";
import GetInTouch from "./components/GetInTouch/GetInTouch";

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <Services />
      <Projects />
      <AboutMe />
      <GetInTouch />
    </>
  );
}

export default App;
