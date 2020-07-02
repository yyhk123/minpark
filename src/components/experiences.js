import React, { Component } from "react";
import Fade from "react-reveal/Fade";

class Experiences extends Component {
  render() {
    return (
      <div className="experiences" id="experiences">
        <div className="experiences-container">
          <Fade bottom>
            <h1 className="experiences-head">Experiences</h1>

            <div style={{ padding: "8px" }}>
              <div className="row">
                <div className="col-8">
                  <h2 className="experiences-title">
                    SAMSUNG ELECTRONICS AMERICA <br />
                    (THRU 3S NETWORK)
                  </h2>
                </div>
                <div className="col-4">
                  <h2 className="experiences-date">May 2020 - present</h2>
                </div>
              </div>
              <h3 className="experiences-position">SOFTWARE QA ENGINEER 1</h3>
              <p className="experiences-detail">
                - Test and troubleshoot hardware, software, and embedded
                software used in wireless data networking for CDMA/LTE. phones.
              </p>
              <p className="experiences-detail">
                - Provide data application development and support, including QA
                regression testing of hardware/software, troubleshooting Android
                OS, Windows Mobile OS, and Qualcomm BREW environments.
              </p>
              <p className="experiences-detail">
                - Conduct test automation activities including creating,
                executing and maintaining test scripts using Android Control
                Tester(ACT).
              </p>
            </div>

            <div style={{ padding: "25px 8px 8px 8px" }}>
              <div className="row">
                <div className="col-8">
                  <h2 className="experiences-title">
                    ALL STAR VERIZON WIRELESS
                  </h2>
                </div>
                <div className="col-4">
                  <h2 className="experiences-date">
                    November 2013 - April 2020
                  </h2>
                </div>
              </div>
              <h3 className="experiences-position">SALES REPRESENTATIVE</h3>
              <p className="experiences-detail">
                - Perform troubleshooting of customer devices to diagnose and
                repair issues with devices.
              </p>
              <p className="experiences-detail">
                - Demonstrate knowledge of products, applying solution-selling
                techniques to meet needs of customers.
              </p>
              <p className="experiences-detail">
                - Use Verizon Wireless internal database system to add, remove,
                or edit information accurately.
              </p>
            </div>

            <div style={{ padding: "25px 8px 8px 8px" }}>
              <div className="row">
                <div className="col-8">
                  <h2 className="experiences-title">BLUE OCEAN LOGISTICS</h2>
                </div>
                <div className="col-4">
                  <h2 className="experiences-date">March 2014 - August 2015</h2>
                </div>
              </div>
              <h3 className="experiences-position">MANAGER'S ASSIST</h3>
              <p className="experiences-detail">
                - Assisted customers in shipping cargo overseas by scheduling
                with shipping agents and managed databases.
              </p>
              <p className="experiences-detail">
                - Communicate with many different agents oversea for scheduling
                and shipping out.
              </p>
            </div>
          </Fade>
        </div>
      </div>
    );
  }
}

export default Experiences;
