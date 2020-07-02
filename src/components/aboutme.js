import React, { Component } from "react";
import Fade from "react-reveal/Fade";
import { Grid, Cell } from "react-mdl";

class AboutMe extends Component {
  render() {
    return (
      <div className="aboutme" id="about">
        <Fade bottom>
          <Grid className="aboutme-container">
            <Cell col={4} className="aboutme-head">
              <h1>
                About Me
                <hr></hr>
              </h1>
            </Cell>
            <Cell col={8} className="aboutme-content">
              <p>
                Cal Poly graduate with a degree in computer programming. Ready
                to apply a broad knowledge of software development and a passion
                for complex computing problem-solving in providing technical
                solutions. Ability to design, implement, and apply computing
                principles to identify solutions. Make informed judgments in
                computing practice, functioning effectively in a collaborative
                and agile team environment. Understanding of object-oriented
                programming, developing, testing, and debugging code, designing
                interfaces, and administering systems and networks.
                Self-directed ability to learn and master new technologies
                quickly.
              </p>
            </Cell>
          </Grid>
        </Fade>
      </div>
    );
  }
}

export default AboutMe;
