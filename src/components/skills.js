import React, { Component } from "react";

class Skills extends Component {
  render() {
    return (
      <div className="skills" id="skills">
        <div className="row">
          <div className="col-2">
            <h1 className="skills-title">Skills</h1>
          </div>
          <div className="col-10">
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
          </div>
          {/* <div className="col-10">
            <div className="graph">
              <span className="bar-item">html</span>
              <div className="bar-wrap">
                <div className="bar"></div>
              </div>
              <span className="bar-item">html</span>
              <div className="bar-wrap">
                <div className="bar"></div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    );
  }
}

export default Skills;
