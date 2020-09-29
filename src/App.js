import React from "react";
import "./App.css";
import LandingPage from "./components/landingpage";
import AboutMe from "./components/aboutme";
import Experiences from "./components/experiences";
import Skills from "./components/skills";
import Footer from "./components/footer";
import Projects from "./components/projects";

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
