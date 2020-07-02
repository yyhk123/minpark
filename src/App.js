import React from "react";
import "./App.css";
import Main from "./components/main";
import AboutMe from "./components/aboutme";
import Experiences from "./components/experiences";
import Skills from "./components/skills";
import Projects from "./components/projects";
import Footer from "./components/footer";

function App() {
  return (
    <div>
      <Main />
      <AboutMe />
      <Experiences />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
