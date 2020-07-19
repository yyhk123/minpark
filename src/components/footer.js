import React, { Component } from "react";
import { Grid, Cell, List, ListItem, ListItemContent, Button } from "react-mdl";
import {
  IoMdMail,
  IoIosCall,
  IoLogoLinkedin,
  IoLogoGithub,
  IoIosHome,
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
          <Grid className="info-container">
            <Cell col={6} className="contact-container">
              <List>
                <ListItem>
                  <ListItemContent>
                    <IoMdMail />
                    <Button href="mailto: minoook@hotmail.com" className="btn">
                      minoook@hotmail.com
                    </Button>
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent>
                    <IoIosCall />
                    <Button href="tel:+13106135525" className="btn">
                      (310) 613-5525
                    </Button>
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent>
                    <IoLogoLinkedin />
                    <Button
                      href="https://linkedin.com/in/minwpark/"
                      target="_blank"
                      className="btn"
                    >
                      linkedin.com/in/minwpark
                    </Button>
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent>
                    <IoLogoGithub />
                    <Button
                      href="https://github.com/yyhk123/"
                      target="_blank"
                      className="btn"
                    >
                      github.com/yyhk123
                    </Button>
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent>
                    <IoIosHome />
                    <Button
                      href="http://maps.google.com/?q=Plano Texas"
                      target="_blank"
                      className="btn"
                    >
                      Plano, Texas
                    </Button>
                  </ListItemContent>
                </ListItem>
              </List>
            </Cell>

            <Cell col={6} className="map-container">
              <Map
                className="googlemap"
                google={this.props.google}
                initialCenter={{
                  lat: 33.080983,
                  lng: -96.818925,
                }}
                zoom={15}
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
