import React, { Component } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

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
    // console.log(document.body.getBoundingClientRect());

    this.setState({
      scrollPos: document.body.getBoundingClientRect().top,
      show: document.body.getBoundingClientRect().top > this.state.scrollPos,
    });
  };

  render() {
    return (
      <div className="mainimg" id="home">
        <div id="header" className={this.state.show ? "active" : "hidden"}>
          <div className="header-menu">
            <ul style={{ listStyle: "none" }}>
              <li className="header-li">
                <AnchorLink href="#home">Home</AnchorLink>
              </li>
              <li className="header-li">
                <AnchorLink href="#about">About</AnchorLink>
              </li>
              <li className="header-li">
                <AnchorLink href="#experiences">Experiences</AnchorLink>
              </li>
              <li className="header-li">
                <AnchorLink href="#skills">Skills</AnchorLink>
              </li>
              <li className="header-li">
                <AnchorLink href="#projects">Projects</AnchorLink>
              </li>
            </ul>
          </div>
        </div>
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
