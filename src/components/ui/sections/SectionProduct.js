import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Chat from "@material-ui/icons/Chat";
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import MeetingRoomIcon from '@material-ui/icons/MeetingRoom';
// core components
import GridContainer from "../assets/jss/GridContainer.js";
import GridItem from "../assets/jss/GridItem.js";
import InfoArea from "../assets/jss/InfoArea.js";

import productStyle from "../assets/jss/productStyle.js";

const useStyles = makeStyles(productStyle);

export default function SectionProduct() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={8} md={8}>
          <h2 className={classes.title}>Our product offers you</h2>
          <h5 className={classes.description}>
            This website offers realtime social-networking between your teams, friends and co-workers
          </h5>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={4} md={4}>
            <InfoArea
              title="Realtime VideoChat"
              description="You can have realtime video and chat based on your purpose."
              icon={Chat}
              iconColor="info"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={4} md={4}>
            <InfoArea
              title="Verified Users"
              description="This website is used by verified people and you can see their posts and any news on their side"
              icon={VerifiedUser}
              iconColor="success"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={4} md={4}>
            <InfoArea
              title="New Meetings"
              description="People offers new meetings which could based on different fields which you could find helpful"
              icon={MeetingRoomIcon}
              iconColor="danger"
              vertical
            />
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
