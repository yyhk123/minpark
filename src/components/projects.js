import React, { Component } from "react";
import {
  Grid,
  Cell,
  Card,
  CardTitle,
  CardActions,
  Button,
  CardText,
} from "react-mdl";
import { Fade } from "react-reveal";

class Projects extends Component {
  render() {
    return (
      <div className="projects" id="projects">
        <Fade bottom>
          <h1 className="projects-head">Projects</h1>

          <Grid className="projects-container">
            <Cell col={4} className="card">
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
                ></CardTitle>
                <CardText>ReactJS Portfolio</CardText>
                <CardActions border>
                  <Button
                    colored
                    href="https://github.com/yyhk123/minpark"
                    target="_blank"
                  >
                    Github
                  </Button>
                  <Button
                    colored
                    href="https://yyhk123.github.io/minpark/"
                    target="_blank"
                  >
                    Live Demo
                  </Button>
                </CardActions>
              </Card>
            </Cell>

            <Cell col={4} className="card">
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
                ></CardTitle>
                <CardText>Graduation Project</CardText>
                <CardActions border>
                  <Button
                    colored
                    href="https://github.com/CS4800-Team-MAKER/ChatTest"
                    target="_blank"
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

            <Cell col={4} className="card">
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
                ></CardTitle>
                <CardText>Connect 4 vs AI (Java)</CardText>
                <CardActions border>
                  <Button
                    colored
                    colored
                    href="https://github.com/yyhk123/4-in-a-line"
                    target="_blank"
                  >
                    Github
                  </Button>
                </CardActions>
              </Card>
            </Cell>

            <Cell col={4} className="card">
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
                ></CardTitle>
                <CardText>8 Queen (Java)</CardText>
                <CardActions border>
                  <Button
                    colored
                    href="https://github.com/yyhk123/8queen"
                    target="_blank"
                  >
                    Github
                  </Button>
                </CardActions>
              </Card>
            </Cell>

            <Cell col={4} className="card">
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
                ></CardTitle>
                <CardText>Website Mockup Practice</CardText>
                <CardActions border>
                  <Button
                    colored
                    href="https://github.com/yyhk123/practice"
                    target="_blank"
                  >
                    Github
                  </Button>
                  <Button
                    colored
                    href="https://yyhk123.github.io/practice/"
                    target="_blank"
                  >
                    Live Demo
                  </Button>
                </CardActions>
              </Card>
            </Cell>

            <Cell col={4} className="card">
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
                ></CardTitle>
                <CardText>Google AI Image Recognition</CardText>
                <CardActions border>
                  <Button
                    colored
                    href="https://github.com/yyhk123/aibts/tree/master"
                    target="_blank"
                  >
                    Github
                  </Button>
                  <Button colored href="http://mybts.net/" target="_blank">
                    Live Demo
                  </Button>
                </CardActions>
              </Card>
            </Cell>

            <Cell col={4} className="card">
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
                ></CardTitle>
                <CardText>Python - Binary Search Tree</CardText>
                <CardActions border>
                  <Button
                    colored
                    href="https://github.com/yyhk123/Python-BST/tree/master"
                    target="_blank"
                  >
                    Github
                  </Button>
                  <Button
                    colored
                    href="https://github.com/yyhk123/Python-BST/tree/master"
                    target="_blank"
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
