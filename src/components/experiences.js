import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import { Fade } from "react-reveal";

class Experiences extends Component {
  render() {
    return (
      <div className="experiences" id="experiences">
        <div className="experiences-container">
          <Fade bottom>
            <h1 className="experiences-head">Experiences</h1>

            <div style={{ padding: "8px" }}>
              <Grid style={{ margin: "0px" }}>
                <Cell
                  col={8}
                  className="mdl-cell--8-col"
                  style={{ width: "calc(66.6666666667% - 16px)" }}
                >
                  <h2 className="experiences-title">
                    MGM Resorts International <br />
                  </h2>
                </Cell>
                <Cell
                  col={4}
                  className="mdl-cell--4-col"
                  style={{ width: "calc(33.3333333333% - 16px)" }}
                >
                  <h2 className="experiences-date">January 2021 - present</h2>
                </Cell>
              </Grid>
              <section className="expereinces-detail-container">
                <h3 className="experiences-position">SOFTWARE ENGINEER</h3>
                <p className="experiences-detail">
                  - Developed and maintain high availability for MGM Resorts International's customer facing website that allows guests to book room reservations using Java.
                </p>
                <p className="experiences-detail">
                  - Contribute to creating solutions in GraphQL using TypeScript to ensure a smooth orchestration layer experience between our frontend and backend services.
                </p>
                <p className="experiences-detail">
                  - Created Key Performance Indicators (KPI's) using Power Bi to allow business to monitor cart and order services health and utilization.
                </p>
                <p className="experiences-detail">
                  - Collaborated with cross-functional teams to troubleshoot and resolve technical issues.
                </p>
              </section>
            </div>

            <div style={{ padding: "8px" }}>
              <Grid style={{ margin: "0px" }}>
                <Cell
                  col={8}
                  className="mdl-cell--8-col"
                  style={{ width: "calc(66.6666666667% - 16px)" }}
                >
                  <h2 className="experiences-title">
                    SAMSUNG ELECTRONICS AMERICA <br />
                    (Contingent work)
                  </h2>
                </Cell>
                <Cell
                  col={4}
                  className="mdl-cell--4-col"
                  style={{ width: "calc(33.3333333333% - 16px)" }}
                >
                  <h2 className="experiences-date">May 2020 - December 2021</h2>
                </Cell>
              </Grid>
              <section className="expereinces-detail-container">
                <h3 className="experiences-position">SOFTWARE QA ENGINEER 1</h3>
                <p className="experiences-detail">
                  - Provide data application development and support, including QA regression 
                  testing of hardware/software, troubleshooting Android OS, Windows Mobile OS, and Qualcomm BREW environments.
                </p>
                <p className="experiences-detail">
                  - Conduct test automation activities for android mobile devices including creating, executing and maintaining 
                  test scripts using Android Control Tester(ACT).
                </p>
                <p className="experiences-detail">
                  - Worked in a team of creating ML web scraping tool, using Scrapy Python. Developed and maintained reports and test results.
                </p>
              </section>
            </div>

          
          </Fade>
        </div>
      </div>
    );
  }
}

export default Experiences;
