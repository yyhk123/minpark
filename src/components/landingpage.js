import React, { Component } from "react";
import { Link } from "react-scroll";

class LandingPage extends Component {
  constructor() {
    super();
    this.state = {
      show: true,
      scrollPos: 0,
    };
  }
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }
  handleScroll = () => {
    this.setState({
      scrollPos: document.body.getBoundingClientRect().top,
      show: document.body.getBoundingClientRect().top > this.state.scrollPos,
    });
  };

  render() {
    return (
      <div className="mainimg" id="home">
        <nav id="header" className={`${this.state.show ? "active" : "hidden"}`}>
          <div className="header-menu">
            <ul style={{ listStyle: "none" }}>
              <Link
                activeClass="active"
                to="home"
                spy={true}
                smooth={true}
                offset={0}
                duration={1000}
              >
                <li className="header-li">Home</li>
              </Link>
              <Link
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={0}
                duration={1000}
              >
                <li className="header-li">About</li>
              </Link>
              <Link
                activeClass="active"
                to="experiences"
                spy={true}
                smooth={true}
                offset={0}
                duration={1000}
              >
                <li className="header-li">Experiences</li>
              </Link>
              <Link
                activeClass="active"
                to="skills"
                spy={true}
                smooth={true}
                offset={0}
                duration={1000}
              >
                <li className="header-li">Skills</li>
              </Link>
              <Link
                activeClass="active"
                to="projects"
                spy={true}
                smooth={true}
                offset={0}
                duration={1000}
              >
                <li className="header-li">Projects</li>
              </Link>
            </ul>
          </div>
        </nav>
        <div className="banner">
          <div className="intro-text">
            <h1>Full Stack Web Developer</h1>
            <hr></hr>
            <div style={{ padding: "1% 0" }}>
              <span className="brief-skills">
                HTML/CSS | JavaScript | React | Java | C++ | NodeJS | MongoDB
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LandingPage;
