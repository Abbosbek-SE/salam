import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';
import FacebookIcon from '@material-ui/icons/Facebook';
import MailIcon from '@material-ui/icons/Mail';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
// core components
import GridContainer from "../assets/jss/GridContainer.js";
import GridItem from "../assets/jss/GridItem.js";
import Card from "../assets/jss/Card.js";
import CardHeader from "../assets/jss/CardHeader.js";
import CardBody from "../assets/jss/CardBody.js";
import CardFooter from "../assets/jss/CardFooter.js";
import Muted from "../assets/jss/Muted.js";
import Button from "../assets/jss/Button.js";


import cardProfile1Square from "../assets/1.jpg";
import cardProfile2Square from "../assets/2.jpg";
import cardProfile4Square from "../assets/3.jpg";
import cardProfile6Square from "../assets/4.jpg";

import teamsStyle from "../assets/jss/teamsStyle.js";
import teamStyle from "../assets/jss/teamStyle.js";
import Star from "./Star"
// import Divider from '@material-ui/core/Divider';
import {Divider} from "semantic-ui-react"

const style = {
  ...teamsStyle,
  ...teamStyle,
  justifyContentCenter: {
    justifyContent: "center"
  }
};

const useStyles = makeStyles(style);

export default function SectionTeam() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <h2 className={classes.title}>Meet our team</h2>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={6} md={6}>
            <Card profile plain className={classes.card3}>
              <GridContainer>
                <GridItem xs={12} sm={5} md={5}>
                  <CardHeader image plain>
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <img src={cardProfile1Square} alt="..." />
                    </a>
                    <div
                      className={classes.coloredShadow}
                      style={{
                        backgroundImage: `url(${cardProfile1Square})`,
                        opacity: "1"
                      }}
                    />
                  </CardHeader>
                </GridItem>
                <GridItem xs={12} sm={7} md={7}>
                  <CardBody plain>
                    <h4 className={classes.cardTitle}>Mrs A</h4>
                    <Muted>
                      <h6 className={classes.cardCategory}>FOUNDER</h6>
                    </Muted>
                    <p className={classes.description}>
                      Don{"'"}t be scared of the truth because we need to
                      restart the human foundation in truth...
                    </p>
                  </CardBody>
                  <CardFooter plain className={classes.justifyContentCenter}>
                    <Button justIcon simple color="twitter">
                      <TwitterIcon />
                    </Button>
                    <Button justIcon simple color="facebook">
                      <FacebookIcon />
                    </Button>
                    <Button justIcon simple color="google">
                      <MailIcon />
                    </Button>
                  </CardFooter>
                </GridItem>
              </GridContainer>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={6} md={6}>
            <Card profile plain className={classes.card3}>
              <GridContainer>
                <GridItem xs={12} sm={5} md={5}>
                  <CardHeader image plain>
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <img src={cardProfile6Square} alt="..." />
                    </a>
                    <div
                      className={classes.coloredShadow}
                      style={{
                        backgroundImage: `url(${cardProfile6Square})`,
                        opacity: "1"
                      }}
                    />
                  </CardHeader>
                </GridItem>
                <GridItem xs={12} sm={7} md={7}>
                  <CardBody plain>
                    <h4 className={classes.cardTitle}>Mrs B</h4>
                    <Muted>
                      <h6 className={classes.cardCategory}>GRAPHIC DESIGNER</h6>
                    </Muted>
                    <p className={classes.description}>
                      Good design is good business
                    </p>
                  </CardBody>
                  <CardFooter plain className={classes.justifyContentCenter}>
                    <Button justIcon simple color="linkedin">
                      <LinkedInIcon/>
                    </Button>
                    <Button justIcon simple color="facebook">
                      <FacebookIcon />
                    </Button>
                    <Button justIcon simple color="instagram">
                      <InstagramIcon />
                    </Button>
                    <Button justIcon simple color="google">
                      <MailIcon />
                    </Button>
                  </CardFooter>
                </GridItem>
              </GridContainer>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={6} md={6}>
            <Card profile plain className={classes.card3}>
              <GridContainer>
                <GridItem xs={12} sm={5} md={5}>
                  <CardHeader image plain>
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <img src={cardProfile4Square} alt="..." />
                    </a>
                    <div
                      className={classes.coloredShadow}
                      style={{
                        backgroundImage: `url(${cardProfile4Square})`,
                        opacity: "1"
                      }}
                    />
                  </CardHeader>
                </GridItem>
                <GridItem xs={12} sm={7} md={7}>
                  <CardBody plain>
                    <h4 className={classes.cardTitle}>Mr C</h4>
                    <Muted>
                      <h6 className={classes.cardCategory}>WEB DESIGNER</h6>
                    </Muted>
                    <p className={classes.description}>
                      Creativity is the mundane to find the marvelous 
                    </p>
                  </CardBody>
                  <CardFooter plain className={classes.justifyContentCenter}>
                    <Button justIcon simple color="youtube">
                      <YouTubeIcon />
                    </Button>
                    <Button justIcon simple color="twitter">
                      <TwitterIcon />
                    </Button>
                    <Button justIcon simple color="instagram">
                      <InstagramIcon />
                    </Button>
                  </CardFooter>
                </GridItem>
              </GridContainer>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={6} md={6}>
            <Card profile plain className={classes.card3}>
              <GridContainer>
                <GridItem xs={12} sm={5} md={5}>
                  <CardHeader image plain>
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <img src={cardProfile2Square} alt="..." />
                    </a>
                    <div
                      className={classes.coloredShadow}
                      style={{
                        backgroundImage: `url(${cardProfile2Square})`,
                        opacity: "1"
                      }}
                    />
                  </CardHeader>
                </GridItem>
                <GridItem xs={12} sm={7} md={7}>
                  <CardBody plain>
                    <h4 className={classes.cardTitle}>Mr D</h4>
                    <Muted>
                      <h6 className={classes.cardCategory}>BACKEND HACKER</h6>
                    </Muted>
                    <p className={classes.description}>
                     If you are not making mistakes, then you are not doing anything
                    </p>
                  </CardBody>
                  <CardFooter plain className={classes.justifyContentCenter}>
                    <Button justIcon simple color="linkedin">
                      <LinkedInIcon />
                    </Button>
                    <Button justIcon simple color="facebook">
                      <FacebookIcon />
                    </Button>
                    <Button justIcon simple color="google">
                      <MailIcon />
                    </Button>
                  </CardFooter>
                </GridItem>
              </GridContainer>
            </Card>
          </GridItem>
          
        </GridContainer>
        
      </div>
      <Divider horizontal>Your review helps us improve our platform</Divider>
      <Star />
    </div>
  );
}
