import React, { Component } from "react";
import { Grid, Cell, Card, CardTitle, CardActions, Button } from "react-mdl";
import { Fade } from "react-reveal";

class Projects extends Component {
  render() {
    return (
      <div className="projects" id="projects">
        <Fade bottom>
          <h1 className="projects-head">Experiences</h1>

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
                      "url(https://i.imgur.com/vNCZ5Y5.png) bottom right 15% no-repeat",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                  }}
                >
                  ReactJS Portfolio
                </CardTitle>
                <CardActions border>
                  <Button
                    colored
                    href="https://github.com/yyhk123/minpark"
                    target="_blank"
                    style={{
                      fontWeight: "bold",
                    }}
                  >
                    Github
                  </Button>
                  <Button
                    colored
                    href="https://yyhk123.github.io/minpark/"
                    target="_blank"
                    style={{
                      fontWeight: "bold",
                    }}
                  >
                    Live Demo
                  </Button>
                </CardActions>
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
                      "url(https://i.imgur.com/Qz1cch0.png) bottom right 15% no-repeat",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                  }}
                >
                  Graduation Project
                </CardTitle>
                <CardActions border>
                  <Button
                    colored
                    href="https://github.com/CS4800-Team-MAKER/ChatTest"
                    target="_blank"
                    style={{
                      fontWeight: "bold",
                    }}
                  >
                    Github
                  </Button>
                  <Button
                    colored
                    href="http://bronco.chat/"
                    target="_blank"
                    style={{
                      fontWeight: "bold",
                    }}
                  >
                    Live Demo
                  </Button>
                </CardActions>
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
                    color: "black",
                    background:
                      "url(https://i.imgur.com/7gogR3m.png) bottom right 15% no-repeat",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                  }}
                >
                  Connect 4 vs AI (Java)
                </CardTitle>
                <CardActions border>
                  <Button
                    colored
                    colored
                    href="https://github.com/yyhk123/4-in-a-line"
                    target="_blank"
                    style={{
                      fontWeight: "bold",
                    }}
                  >
                    Github
                  </Button>
                </CardActions>
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
                    color: "black",
                    fontWeight: "bold",
                    background:
                      "url(https://i.imgur.com/3RAwcY4.png) bottom right 15% no-repeat",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                  }}
                >
                  8 Queen (Java)
                </CardTitle>
                <CardActions border>
                  <Button
                    colored
                    href="https://github.com/yyhk123/8queen"
                    target="_blank"
                    style={{
                      fontWeight: "bold",
                    }}
                  >
                    Github
                  </Button>
                </CardActions>
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
                    color: "black",
                    background:
                      "url(https://i.imgur.com/U3OzIBS.png) bottom right 15% no-repeat",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                  }}
                >
                  Website Mockup Practice
                </CardTitle>
                <CardActions border>
                  <Button
                    colored
                    href="https://github.com/yyhk123/practice"
                    target="_blank"
                    style={{
                      fontWeight: "bold",
                    }}
                  >
                    Github
                  </Button>
                  <Button
                    colored
                    href="https://yyhk123.github.io/practice/"
                    target="_blank"
                    style={{
                      fontWeight: "bold",
                    }}
                  >
                    Live Demo
                  </Button>
                </CardActions>
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
                    color: "black",
                    background:
                      "url(https://i.imgur.com/r2ioq4G.png) bottom right 15% no-repeat #46B6AC",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                  }}
                >
                  Google AI Image Recognition
                </CardTitle>
                <CardActions border>
                  <Button
                    colored
                    href="https://github.com/yyhk123/aibts/tree/master"
                    target="_blank"
                    style={{
                      fontWeight: "bold",
                    }}
                  >
                    Github
                  </Button>
                  <Button
                    colored
                    href="http://mybts.net/"
                    target="_blank"
                    style={{
                      fontWeight: "bold",
                    }}
                  >
                    Live Demo
                  </Button>
                </CardActions>
              </Card>
            </Cell>
          </Grid>
        </Fade>
      </div>
    );
  }
}

export default Projects;
