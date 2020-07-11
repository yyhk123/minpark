import React, { Component } from "react";
import { Grid, Cell, Card, CardTitle } from "react-mdl";
import { Fade } from "react-reveal";

class Projects extends Component {
  render() {
    return (
      <div className="projects" id="projects">
        <Fade bottom>
          <Grid className="projects-container">
            <Cell col={4}>
              <Card
                shadow={0}
                style={{
                  width: "auto",
                  height: "100%",
                  margin: "auto",
                }}
              >
                <CardTitle
                  expand
                  style={{
                    color: "#fff",
                    background:
                      "url(http://www.getmdl.io/assets/demos/dog.png) bottom right 15% no-repeat #46B6AC",
                  }}
                >
                  Update
                </CardTitle>
              </Card>
            </Cell>

            <Cell col={4}>
              <Card
                shadow={0}
                style={{
                  width: "auto",
                  height: "100%",
                  margin: "auto",
                }}
              >
                <CardTitle
                  expand
                  style={{
                    width: "auto",
                    color: "#fff",
                    background:
                      "url(http://www.getmdl.io/assets/demos/dog.png) bottom right 15% no-repeat #46B6AC",
                  }}
                >
                  Update
                </CardTitle>
              </Card>
            </Cell>

            <Cell col={4}>
              <Card
                shadow={0}
                style={{
                  width: "auto",
                  height: "100%",
                  margin: "auto",
                }}
              >
                <CardTitle
                  expand
                  style={{
                    width: "auto",
                    color: "#fff",
                    background:
                      "url(http://www.getmdl.io/assets/demos/dog.png) bottom right 15% no-repeat #46B6AC",
                  }}
                >
                  Update
                </CardTitle>
              </Card>
            </Cell>

            <Cell col={4}>
              <Card
                shadow={0}
                style={{
                  width: "auto",
                  height: "100%",
                  margin: "auto",
                }}
              >
                <CardTitle
                  expand
                  style={{
                    color: "#fff",
                    background:
                      "url(http://www.getmdl.io/assets/demos/dog.png) bottom right 15% no-repeat #46B6AC",
                  }}
                >
                  Update
                </CardTitle>
              </Card>
            </Cell>

            <Cell col={4}>
              <Card
                shadow={0}
                style={{
                  width: "auto",
                  height: "100%",
                  margin: "auto",
                }}
              >
                <CardTitle
                  expand
                  style={{
                    width: "auto",
                    color: "#fff",
                    background:
                      "url(http://www.getmdl.io/assets/demos/dog.png) bottom right 15% no-repeat #46B6AC",
                  }}
                >
                  Update
                </CardTitle>
              </Card>
            </Cell>

            <Cell col={4}>
              <Card
                shadow={0}
                style={{
                  width: "auto",
                  height: "100%",
                  margin: "auto",
                }}
              >
                <CardTitle
                  expand
                  style={{
                    width: "auto",
                    color: "#fff",
                    background:
                      "url(http://www.getmdl.io/assets/demos/dog.png) bottom right 15% no-repeat #46B6AC",
                  }}
                >
                  Update
                </CardTitle>
              </Card>
            </Cell>
          </Grid>
        </Fade>
      </div>
    );
  }
}

export default Projects;
