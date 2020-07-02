import React from "react";
import "./App.css";
// import Main from "./components/main";
import LandingPage from "./components/landingpage";
import AboutMe from "./components/aboutme";
import Experiences from "./components/experiences";
import Skills from "./components/skills";
import Projects from "./components/projects";
import Footer from "./components/footer";

function App() {
  return (
    <div>
      <LandingPage />
      <AboutMe />
      <Experiences />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
