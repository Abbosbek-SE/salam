
// nodejs library to set properties for components

// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
// @material-ui/icons
import Favorite from "@material-ui/icons/Favorite";
// core components

import Footer from "./assets/jss/Footer.js";
import GridContainer from "./assets/jss/GridContainer.js";
import GridItem from "./assets/jss/GridItem.js";
import Button from "./assets/jss/Button.js";

import Parallax from "./assets/jss/Parallax.js";

import landingPageStyle from "./assets/jss/landingPageStyle.js";
import big from "./assets/bg8.jpg"
// Sections for this page
import SectionProduct from "./sections/SectionProduct.js";
import SectionTeam from "./sections/SectionTeam.js";


import React, { useState } from "react"
import { Alert } from "react-bootstrap"
import { useAuth } from "../../contexts/AuthContext"
import { useHistory } from "react-router-dom"


const useStyles = makeStyles(landingPageStyle);

export default function LandingPage({ ...rest }) {
   
  const [error, setError] = useState("")
  const { currentUser, logout } = useAuth()
  const history = useHistory()

  async function handleLogout() {
    setError("")

    try {
      await logout()
      history.push("/login")
    } catch {
      setError("Failed to log out")
    }
  }



  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  });
  const classes = useStyles();
  return (
    <div>
      <Parallax image={big} filter="dark">
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={6} md={6}>
              <h2>Every story has small beginnings...</h2>
              <h3>
              the man who moves a mountain begins by carrying away small stones
              </h3>
           
      
        <Button variant="link" onClick={handleLogout}>
          Log Out
        </Button>
     
      <Button as = "a" href = "/update-profile">
          {error && <Alert variant="danger">{error}</Alert>}
          Update Profile
          </Button>
              <br />
              <Button
                color="danger"
                size="lg"
                href="https://youtu.be/nrdNdprcYls"
                target="_blank"
              >
                <i className="fas fa-play" />
                Watch video
              </Button>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <SectionProduct />
          <SectionTeam />
        </div>
      </div>
      <Footer
        content={
          <div>
            <div className={classes.left}>
              <List className={classes.list}>
                <ListItem className={classes.inlineBlock}>
                  <a
                    href="https://www.linkedin.com/in/abbosbek-muydinboev-7785b11b2/"
                    target="_blank"
                    className={classes.block}
                  >
                   LinkedIn
                  </a>
                </ListItem>
                <ListItem className={classes.inlineBlock}>
                  <a
                    href="https://www.instagram.com/2abu_cali/"
                    target="_blank"
                    className={classes.block}
                  >
                    Instagram
                  </a>
                </ListItem>
                <ListItem className={classes.inlineBlock}>
                  <a href="https://medium.com/me/stories/public" className={classes.block}>
                    Blog
                  </a>
                </ListItem>
              </List>
            </div>
            <div className={classes.right}>
              &copy; {1900 + new Date().getYear()} , made with{" "}
              <Favorite className={classes.icon} /> by{" "}
              <a
                href="https://www.linkedin.com/in/abbosbek-muydinboev-7785b11b2/"
                target="_blank"
              >
                SalaMTeam
              </a>{" "}
          
            </div>
          </div>
        }
      />
    </div>
  );
}
