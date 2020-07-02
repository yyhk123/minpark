import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

class Footer extends Component {
  render() {
    return (
      <Grid className="footer">
        <Cell col={6}>
          <h1>left</h1>
        </Cell>
        <Cell col={6}>
          <h1>right</h1>
        </Cell>
      </Grid>
    );
  }
}

export default Footer;
