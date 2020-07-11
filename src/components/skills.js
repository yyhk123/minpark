import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import $ from "jquery";

$(window).scroll(function () {
  var scrollToVid = $("#skills").offset().top;
  var iHeight = $("#skills").height();

  if ($(window).scrollTop() >= scrollToVid - iHeight - 100) {
    $(".bar").css("animation", "bar-before 1 1.8s");
  }
});

class Skills extends Component {
  render() {
    return (
      <div className="skills" id="skills">
        <Grid className="row">
          <Cell col={2} className="skills-title-content">
            <h1 className="skills-title">
              Skills
              <hr></hr>
            </h1>
          </Cell>
          <Cell col={10} className="skills-graph">
            <table className="graph">
              <tbody>
                <tr>
                  <td className="graph-item">HTML/CSS</td>
                  <td className="graph-spacing">
                    <div className="bar-wrap">
                      <div className="bar bar1">65%</div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="graph-item">JavaScript</td>
                  <td className="graph-spacing">
                    <div className="bar-wrap">
                      <div className="bar bar2">50%</div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="graph-item">React</td>
                  <td className="graph-spacing">
                    <div className="bar-wrap">
                      <div className="bar bar3">55%</div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="graph-item">Java</td>
                  <td className="graph-spacing">
                    <div className="bar-wrap">
                      <div className="bar bar4">70%</div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="graph-item">C++</td>
                  <td className="graph-spacing">
                    <div className="bar-wrap">
                      <div className="bar bar5">60%</div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="graph-item">NodeJS</td>
                  <td className="graph-spacing">
                    <div className="bar-wrap">
                      <div className="bar bar6">25%</div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="graph-item">MongoDB</td>
                  <td className="graph-spacing">
                    <div className="bar-wrap">
                      <div className="bar bar7">30%</div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Skills;
