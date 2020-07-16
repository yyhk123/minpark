import React, { Component } from "react";
import { Grid, Cell, List, ListItem, ListItemContent, Button } from "react-mdl";
import {
  IoMdMail,
  IoIosCall,
  IoLogoLinkedin,
  IoLogoGithub,
} from "react-icons/io";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";

const mapStyles = {
  position: "relative",
  width: "100px",
  height: "100px",
};
class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="footer-container">
          <h1 className="footer-head">Contact Me</h1>
          <Grid>
            <Cell col={6}>
              <List>
                <ListItem>
                  <ListItemContent>
                    <ListItemContent>
                      <IoMdMail
                        style={{
                          fontSize: "2em",
                        }}
                      />
                      <Button href="mailto: minoook@hotmail.com">
                        minoook@hotmail.com
                      </Button>
                    </ListItemContent>
                  </ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent>
                    <ListItemContent>
                      <IoIosCall
                        style={{
                          fontSize: "2em",
                        }}
                      />
                      <Button href="tel:+13106135525">(310) 613-5525</Button>
                    </ListItemContent>
                  </ListItemContent>
                </ListItem>
                <ListItem>
                  <IoLogoLinkedin
                    style={{
                      fontSize: "2em",
                    }}
                  />
                  <ListItemContent>
                    <Button
                      href="https://linkedin.com/in/minwpark/"
                      target="_blank"
                    >
                      linkedin.com/in/minwpark
                    </Button>
                  </ListItemContent>
                </ListItem>
                <ListItem>
                  <IoLogoGithub
                    style={{
                      fontSize: "2em",
                    }}
                  />
                  <ListItemContent>
                    <Button href="https://github.com/yyhk123/" target="_blank">
                      github.com/yyhk123
                    </Button>
                  </ListItemContent>
                </ListItem>
              </List>
            </Cell>
            <Cell col={6}>
              <Map
                className="googlemap"
                google={this.props.google}
                zoom={14}
                initialCenter={{
                  lat: 33.080983,
                  lng: -96.818925,
                }}
                zoom={17}
              >
                <Marker
                  onClick={this.onMarkerClick}
                  name={"Current location"}
                />

                <InfoWindow onClose={this.onInfoWindowClose}>
                  <div>
                    <h1>here</h1>
                  </div>
                </InfoWindow>
              </Map>
            </Cell>
          </Grid>
        </div>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyBkP9qqd6quH5Z88pAh9joB1IFIJZHw9ew",
})(Footer);
