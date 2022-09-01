import "./App.scss";

import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import Projects from "./components/Projects/Projects";
import Services from "./components/Services/Services";
import AboutMe from "./components/AboutMe/AboutMe";
import GetInTouch from "./components/GetInTouch/GetInTouch";

function App() {
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
